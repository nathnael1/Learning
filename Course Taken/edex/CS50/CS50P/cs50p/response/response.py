import validators

def main():
    print(email(input("Text: ")))


def email(s):
    if validators.email(s):
        return "Valid"
    return "Invalid"

...


if __name__ == "__main__":
    main()

