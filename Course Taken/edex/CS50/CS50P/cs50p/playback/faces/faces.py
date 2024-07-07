def main():
    text = input("Enter a text: ")
    convert(text)


def convert(text):
    text = text.replace(":)", "🙂")
    text = text.replace(":(", "🙁")
    print(text)


main()
