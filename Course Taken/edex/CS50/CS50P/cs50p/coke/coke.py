value = 50
while True:
    insert = int(input("Insert coin: "))
    if insert == 25 or insert == 10 or insert == 5:
        value -= insert
    else:
        value = value
    if value == 0:
        break
    elif value < 0:
        break
    else:
        print(f"Amount Due: {value}")
value = (-1* value)
print(f"Change Owed: {value}")
