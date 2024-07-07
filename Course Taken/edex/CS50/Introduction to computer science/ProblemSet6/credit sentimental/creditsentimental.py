import cs50


card = cs50.get_int("Enter the card: ")
user = str(card)
length = len(user)
sum = 0

for i in range(length-2, -1, -2):
    digit = int(user[i]) * 2
    if digit > 9:
        digit -= 9
    sum += digit

for i in range(length-1, -1, -2):
    sum += int(user[i])

if sum % 10 == 0:
    if length == 15 and (user[:2] == "34" or user[:2] == "37"):
        print("AMEX")
    elif length == 16 and (user[:2] == "51" or user[:2] == "52" or user[:2] == "53" or user[:2] == "54" or user[:2] == "55"):
        print("MASTERCARD")
    elif (length == 13 or length == 16) and user[0] == "4":
        print("VISA")
    else:
        print("INVALID")
else:
    print("INVALID")
