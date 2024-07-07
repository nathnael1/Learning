import random

while True:
    try:
        n = int(input("Enter a Positive Integer: "))
        if n > 0:
            break
    except ValueError:
        pass
random_number = random.randint(1,n)
while True:
    try:
        x = int(input("Guess: ").strip())
        if x > random_number:
            print("Too large!")
        elif x < random_number:
            print("Too small!")
        else:
            print("Just right!")
            break
    except ValueError:
        pass

