x = 'Adieu, adieu, to '
contains = []
count = 0
complexl = []
while True:
    try:
        text = input("Enter a text: ")
        contains.append(text)
        count +=1
    except EOFError:
        break

print()
if count == 1:
    result = ' '.join(contains)
    final = x +  result
elif count == 2:
    resultl = ' '.join(contains[:-1])
    resultr = ' '.join(contains[-1:])
    final = x + resultl + " and " + resultr
else:
    containsl = contains[:-1]
    for i in containsl:
        complexl.append(i+",")
    resultr = ' '.join(contains[-1:])
    resultl = ' '.join(complexl)
    final = x + resultl + " and " + resultr
print(final)
