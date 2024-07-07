def main():
    word = input("Enter a text: ")
    print(shorten(word))

def shorten(word):
    slist = []
    final = []
    vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    for letter in word:
        slist.append(letter)
    for i in range(len(slist)):
        if slist[i] in vowels and i != 0:
            final.append("")
        else:
            final.append(slist[i])
    x = ''.join(final)
    return x
if __name__ == "__main__":
    main()
