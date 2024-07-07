import re
import sys


def main():
    print(convert(input("Hours: ")))


def convert(s):

    match = re.search(r"(\d+:?\d*?) (PM|AM) to (\d+:?\d*?) (PM|AM)",s,re.IGNORECASE)
    if not match:
        raise ValueError("Invalid time")
    first_time = match.group(1)
    first_format = match.group(2).lower()
    second_time = match.group(3)
    second_format = match.group(4).lower()
    if first_format == "pm":
        if ":" in first_time:
            if first_time.split(":")[0] == "12":
                fhour = 12
                temp_minute = int(first_time.split(":")[1])
                if  temp_minute == 60:
                    raise ValueError("Invalid time")
                fminute = temp_minute
            else:
                fhour = int(first_time.split(":")[0]) + 12
                temp_minute = int(first_time.split(":")[1])
                if  temp_minute == 60:
                    raise ValueError("Invalid time")
                fminute = temp_minute
        else:
            if first_time == "12":
                fhour = 12
            else:
                fhour = int(first_time) + 12
            fminute = 0
    else:
        if ":" in first_time:
            if first_time.split(":")[0] == "12":
                fhour = 0
            else:
                fhour = int(first_time.split(":")[0])
            temp_minute = int(first_time.split(":")[1])
            if  temp_minute == 60:
                raise ValueError("Invalid time")
            fminute = temp_minute
        else:
            if first_time == "12":
                fhour = 0
            else:
                fhour = int(first_time)
            fminute = 0
    if second_format == "pm":
        if ":" in second_time:
            if second_time.split(":")[0] == "12":
                shour = 12
                temp_minute = int(second_time.split(":")[1])
                if  temp_minute == 60:
                    raise ValueError("Invalid time")
                sminute = temp_minute
            else:
                shour = int(second_time.split(":")[0]) + 12
                temp_minute = int(second_time.split(":")[1])
                if  temp_minute == 60:
                    raise ValueError("Invalid time")
                sminute = temp_minute
        else:
            if second_time == "12":
                shour = 12
            else:
                shour = int(second_time) + 12
            sminute = 0
    else:
        if ":" in second_time:
            if second_time.split(":")[0] == "12":
                shour = 0
            else:
                shour = int(second_time.split(":")[0])
            temp_minute = int(second_time.split(":")[1])
            if  temp_minute == 60:
                raise ValueError("Invalid time")
            sminute = temp_minute
        else:
            if second_time == "12":
                shour = 0
            else:
                shour = int(second_time)
            sminute = 0

    return f"{fhour:02}:{fminute:02} to {shour:02}:{sminute:02}"



if __name__ == "__main__":
    main()
