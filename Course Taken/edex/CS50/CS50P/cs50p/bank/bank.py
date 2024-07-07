text = input("Enter a text: ")
text = text.strip()
text = text.lower()
if 'hello' in text:
    print("$0")
elif text[0] == 'h':
    print("$20")
else:
    print("$100")
