import re
import sys


def main():
    print(parse(input("HTML: ")))


def parse(s):
    #<iframe src="http://www.youtube.com/embed/xvFZjo5PgG0"></iframe>
    if match := re.search(r'^<iframe(?: width="[0-9]+")?(?: height="[0-9]+")? src="https?://(?:www\.)?youtube\.com/embed/(.+)"(?: title="\w+")?(?: frameborder="[0-9]+")?(?: allow=".+")?(?: .+)?><\/iframe>$', s, re.IGNORECASE):
       return f"https://youtu.be/{match.group(1)}"
    else:
        return "None"


...


if __name__ == "__main__":
    main()
