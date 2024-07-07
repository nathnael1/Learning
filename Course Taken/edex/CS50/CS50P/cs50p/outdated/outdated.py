import string
months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
while True:

    try:
        x = input("Enter the month: ").title()
        findex = x.find("/")
        sindex = x.find("/", findex+1)
        firstLetter = x.find(" ")
        secondLetter = x.find(",")
        if (findex == -1 and sindex == -1) and (firstLetter == -1 and secondLetter == -1):
            continue
        if findex != -1 and sindex != -1:
            month = int(x[:findex])
            day = int(x[findex+1:sindex])
            year = int(x[sindex+1:])
            if month > 12 or day > 31:
                continue
            if month < 10 and day > 9:
                print(f"{year}-0{month}-{day}")
            elif day < 10 and month > 9:
                print(f"{year}-{month}-0{day}")
            elif day < 10 and month < 10:
                print(f"{year}-0{month}-0{day}")
            else:
                print(f"{year}-{month}-{day}")
            break
        if firstLetter != -1 and secondLetter != -1:
            monthWord = x[0:firstLetter]
            month = int(months.index(monthWord) + 1)
            day = int(x[firstLetter+1:secondLetter])
            year = int(x[secondLetter+2:])
            if month > 12 or day > 31:
                continue
            if month < 10 and day > 9:
                print(f"{year}-0{month}-{day}")
            elif day < 10 and month > 9:
                print(f"{year}-{month}-0{day}")
            elif day < 10 and month < 10:
                print(f"{year}-0{month}-0{day}")
            else:
                print(f"{year}-{month}-{day}")
            break
    except ValueError:
        continue
