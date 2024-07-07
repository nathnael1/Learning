text = input("Enter a Fruit: ")
text = text.lower()
fruits = {"apple": 130, "avocado": 50, "sweet cherries": 100, "kiwifruit": 90, "pear": 100}
for fruit in fruits:
    if fruit == text:
        print(f"Calories: {fruits[text]}")
