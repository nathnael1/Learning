camel = input("Enter camelCase word: ")
words = []
final = []
for word in camel:
    words.append(word)
for i in range(len(words)):
    if i != 0 and words[i].isupper():
        final.append("_")
        fixed = words[i].lower()
        final.append(fixed)
    else:
        final.append(words[i])
print("snake case: ", end="")
for letter in final:
    print(letter, end="")
print()
