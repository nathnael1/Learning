text = input("Enter a word: ")
slist = []
final = []
vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
for letter in text:
    slist.append(letter)
for i in range(len(slist)):
    if slist[i] in vowels and i != 0:
        final.append("")
    else:
        final.append(slist[i])
for letter in final:
    print(letter, end="")
print()
