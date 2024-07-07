import re
import sys


def main():
    print(validate(input("IPv4 Address: ")))


def validate(ip):
    test = False
    if match := re.search(r"^([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)$",ip,re.IGNORECASE):
        test = True
    else:
        test = False
    try:
        first = int(match.group(1))
        second = int(match.group(2))
        third = int(match.group(3))
        fourth = int(match.group(4))
    except:
        return False
    if (first > 255 or second > 255 or third > 255 or fourth > 255) or test == False:
        return False

    else:
        return True


...


if __name__ == "__main__":
    main()
