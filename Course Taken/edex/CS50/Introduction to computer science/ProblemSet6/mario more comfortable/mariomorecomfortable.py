while (True):
    try:
        height = int(input("Height: "))
        if (height > 0 and height < 9):
            break
    except ValueError:
        print("Not an intger")

count = height
for i in range(height):
    for j in range(count-1):
        print(" ", end="")
    print("#"*(i+1) + "  " + "#"*(i+1))
    count -= 1
