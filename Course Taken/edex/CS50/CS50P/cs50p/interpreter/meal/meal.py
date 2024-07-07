def main():
    time = input("Enter your time: ")
    result = convert(time)
    if result >= 7 and result <= 8:
        print("breakfast time")
    elif result >=12 and result <=13:
        print("lunch time")
    elif result >=18 and result <= 19:
        print("dinner time")
def convert(time):
    hour,minutes = time.split(":")
    hour  = float(hour)
    minutes = float(minutes)
    result = minutes / 60 + hour
    return result



if __name__ == "__main__":
    main()
