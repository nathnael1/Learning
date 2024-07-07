def main():
    recive = input("What is the answer to the Great Question of Life, the Universe and Everything: ")
    recive = recive.strip()
    recive = recive.lower()
    if check(recive):
        print("Yes")
    else:
        print("No")


def check(recive):
    return True if recive == "42" or recive == "forty-two" or recive == "forty two" else False


main()
