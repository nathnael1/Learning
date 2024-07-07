import string
result = {}
resultl = []
while True:
    try:
        x = input().upper()
        resultl.append(x)
    except EOFError:
        print()
        break
for item in resultl:
    result[item] = result.get(item, 0) + 1
sort_result = sorted(result.items())
for item, count in sort_result:
    print(count, item)
