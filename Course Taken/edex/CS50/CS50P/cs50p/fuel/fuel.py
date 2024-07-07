

while True:
    x = input("Write in a fraction form: ")
    value = x.find("/")
    first = x[:value]
    second = x[value+1:]

    try:
        first = int(first)
        second = int(second)
        if second != 0 and first <= second:
            operation = first/second * 100
            operation = round(operation)
            if operation >= 90:
                print("F")
                break
            elif operation <= 1:
                print("E")
                break
            else:
                print(f"{operation}%")
                break
    except ValueError:
        pass
