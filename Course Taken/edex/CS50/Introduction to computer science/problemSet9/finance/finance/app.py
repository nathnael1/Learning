import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, jsonify
# from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
import datetime
from helpers import apology, login_required, lookup, usd
import re

# Configure application
app = Flask(__name__)

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""
    user_id = session["user_id"]
    transaction_db = db.execute(
        "SELECT symbol,SUM(shares) AS shares, price FROM transactions WHERE user_id = ? GROUP BY symbol", user_id)
    cash_db = db.execute("SELECT cash FROM users WHERE id = ?", user_id)
    cash = cash_db[0]["cash"]
    return render_template("index.html", database=transaction_db, cash=cash)


@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock."""

    # if user reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # ensure stock symbol and number of shares was submitted
        if (not request.form.get("stock")) or (not request.form.get("shares")):
            return apology("must provide stock symbol and number of shares")

        # ensure number of shares is valid
        if int(request.form.get("shares")) <= 0:
            return apology("must provide valid number of shares (integer)")

        # pull quote from yahoo finance
        quote = lookup(request.form.get("stock"))

        # check is valid stock name provided
        if quote == None:
            return apology("Stock symbol not valid, please try again")

        # calculate cost of transaction
        cost = int(request.form.get("shares")) * quote['price']

        # check if user has enough cash for transaction
        result = db.execute("SELECT cash FROM users WHERE id=:id", id=session["user_id"])
        if cost > result[0]["cash"]:
            return apology("you do not have enough cash for this transaction")

        # update cash amount in users database
        db.execute("UPDATE users SET cash=cash-:cost WHERE id=:id",
                   cost=cost, id=session["user_id"])

        # add transaction to transaction database
        add_transaction = db.execute("INSERT INTO transactions (user_id, stock, quantity, price, date) VALUES (:user_id, :symbol, :shares, :price, :date)",
                                     user_id=session["user_id"], stock=quote["symbol"], quantity=int(request.form.get("shares")), price=quote['price'], date=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

        # pull number of shares of symbol in portfolio
        curr_portfolio = db.execute(
            "SELECT quantity FROM portfolio WHERE stock=:stock", stock=quote["symbol"])

        # add to portfolio database
        # if symbol is new, add to portfolio
        if not curr_portfolio:
            db.execute("INSERT INTO portfolio (stock, quantity) VALUES (:stock, :quantity)",
                       stock=quote["symbol"], quantity=int(request.form.get("shares")))

        # if symbol is already in portfolio, update quantity of shares and total
        else:
            db.execute("UPDATE portfolio SET quantity=quantity+:quantity WHERE stock=:stock",
                       quantity=int(request.form.get("shares")), stock=quote["symbol"])

        return redirect("/")

    # else if user reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("buy.html")


@app.route("/history")
@login_required
def history():
    """Show history of transactions"""
    user_id = session["user_id"]
    transaction_db = db.execute("SELECT * FROM transactions WHERE user_id = ?", user_id)
    return render_template("history.html", transactions=transaction_db)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    """Get stock quote."""
    if request.method == "GET":
        return render_template("quote.html")
    else:
        symbol = request.form.get("symbol")
        if not symbol:
            return apology("must give symbol")
        stock = lookup(symbol)
        if stock is None:
            return apology("The symbol doesn't exist")
        return render_template("quoted.html", symbol=stock["symbol"], price=stock["price"])


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""
    username = request.form.get("username")
    password = request.form.get("password")
    confirmation = request.form.get("confirmation")
    pattern = re.compile(r'\d')
    if request.method == "POST":
        users = db.execute("SELECT *  FROM users WHERE username = ?", username)
        if not username:
            return apology("must provide username", 400)
        if not password:
            return apology("must provide password", 400)
        if len(password) < 8:
            return apology("you must enter a password greater than 8 characters", 400)
        if not re.search(pattern, password):
            return apology("Weak password add digit ")
        if not confirmation:
            return apology("must provide password confirmation", 400)
        if not password == confirmation:
            return apology("password doesn't match", 400)
        if users:
            return apology("user already exist", 400)
        password = generate_password_hash(password)
        db.execute("INSERT INTO users (username,hash) VALUES(?,?)", username, password)
        new_user_id = db.execute("SELECT LAST_INSERT_ROWID() AS id")[0]["id"]
        session["user_id"] = new_user_id
        return redirect("/login")
    return render_template("register.html")


@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock"""

    if request.method == "GET":
        user_id = session["user_id"]
        symbol_user = db.execute(
            "SELECT symbol FROM transactions WHERE user_id = ? GROUP BY symbol HAVING SUM(shares) > 0", user_id)
        return render_template("sell.html", symbols=[row["symbol"] for row in symbol_user])
    else:
        symbol = request.form.get("symbol")
        shares = int(request.form.get("shares"))
        if not symbol:
            return apology("must give symbol")
        stock = lookup(symbol)
        if stock == None:
            return apology("The symbol doesn't exist")
        if shares < 0:
            return apology("The share must be positive")

        transaction_value = shares * stock["price"]
        user_id = session["user_id"]
        user_cash_db = db.execute("SELECT cash FROM users WHERE id = ?", user_id)
        user_cash = user_cash_db[0]["cash"]
        user_shares = db.execute(
            "SELECT SUM(shares) AS total_shares  FROM transactions WHERE user_id = ? AND symbol = ? GROUP BY symbol", user_id, symbol)
        user_shares_real = user_shares[0]["total_shares"]
        if shares > user_shares_real:
            return apology("You don't have this amount of shares")
        uptd_cash = user_cash + transaction_value
        db.execute("UPDATE users SET cash = ? WHERE id = ?", uptd_cash, user_id)
        date = datetime.datetime.now()
        db.execute("INSERT INTO transactions (user_id,symbol,shares,price,date) VALUES(?,?,?,?,?)",
                   user_id, stock["symbol"], -shares, stock["price"], date)
        flash("Sold!")
        return redirect("/")
