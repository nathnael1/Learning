from datetime import date
import sys
import inflect
import operator
p = inflect.engine()


def main():
    try:
        x = input("Date: ")
        difference = operator.sub(date.today(),date.fromisoformat(x))
    except ValueError:
        sys.exit("Invalid format")
    print(convert(difference.days))
def convert(n):
    minutes = n * 24 * 60
    return f"{p.number_to_words(minutes,andword = "").capitalize()} minutes"


if __name__ == "__main__":
    main()
