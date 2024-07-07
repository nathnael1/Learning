
def main():
    x = input("Write in a fraction form: ")
    frac = convert(x)
    print(gauge(frac))

def convert(fraction):
    while True:

        value = fraction.find("/")
        first = fraction[:value]
        second = fraction[value+1:]
        first = float(first)
        second = float(second)
        if second != 0 and first <= second:
            operation = first/second * 100
            operation = round(operation)
            return operation


def gauge(percentage):
    if percentage >= 90:
        return "F"
    elif percentage <= 1:
        return "E"
    else:
        return f"{percentage}%"




if __name__ == "__main__":
    main()

