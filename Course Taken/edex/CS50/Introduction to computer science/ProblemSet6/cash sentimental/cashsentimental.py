import cs50
counter = 0
while (True):
    user = cs50.get_float("Enter the cash: ")
    if (user > 0):
        break
while (True):
    if user >= 0.25:
        user = round(user - 0.25, 2)
        counter += 1
    elif user >= 0.10:
        user = round(user - 0.10, 2)
        counter += 1
    elif user >= 0.05:
        user = round(user - 0.05, 2)
        counter += 1
    elif user >= 0.01:
        user = round(user - 0.01, 2)
        counter += 1
    else:
        break
print(counter)
