import string
result = string.punctuation
alpha = string.ascii_letters
digit = string.digits


def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    old = 100
    if not s[:2].isalpha():
        return False
    if len(s) < 2 or len(s) > 6:
        return False
    if any(char in string.punctuation or char.isspace() for char in s):
        return False
    for i in range(len(s)):
        if s[i].isdigit() and i < old:
            if s[i] == '0':
                return False
            else:
                old = i
        if s[i].isdigit():
            if i+1 < len(s) and s[i+1].isalpha():
                return False

    return True


main()
