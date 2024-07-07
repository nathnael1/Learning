import sys
import requests
import json

if len(sys.argv) != 2:
    print("Missing command-line argument")
else:
    try:
        num = float(sys.argv[1])

    except ValueError:
        print("Command-line argument is not a number")

try:
    response = requests.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    ordered = response.json()
except requests.RequestException:
    print("error")
x = (ordered["bpi"]["USD"]["rate"])
temp = []
for char in x:
    if char != ',':
        temp.append(char)
x = float(''.join(temp))
amount = x * num
print(f"${amount:,.4f}")
