from cs50 import get_string

word = 1
letters = 0
sentences = 0
user = get_string("Enter the sentences: ")
for i in range(len(user)):
    if (user[i] == " "):
        word += 1
    elif (user[i] == "." or user[i] == "?" or user[i] == "!"):
        sentences += 1
    elif (user[i].isalpha()):
        letters += 1
letters = float(letters)/float(word) * 100
sentences = float(sentences)/float(word) * 100
cli = round(0.0588 * letters - 0.296 * sentences - 15.8)
if cli < 1:
    print("Before Grade 1")
elif cli >= 16:
    print("Grade 16+")
else:
    print(f"Grade {cli}")
