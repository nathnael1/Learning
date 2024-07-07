#include <cs50.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    long long credit = get_long_long("Enter your Credit Number: ");
    long long length = credit;

    int lengthCheck = 0;
    long long multiplier = 100;
    long long multiplierO = 10;
    long long divider = 10;
    long long dividerO = 1;
    int eachValue;
    int otherValue;
    int adder = 0;
    int addero = 0;
    int counter;
    int n = 1;
    string finalValue;
    while (length > 0)
    {
        length /= 10;
        lengthCheck++;
    }
    long powerFirst = pow(10, lengthCheck);
    long powerSecond = pow(10, lengthCheck - 1);
    long powerThird = pow(10, lengthCheck - 2);
    long firstValue = credit % powerFirst / powerSecond;
    long secondValue = credit % powerSecond / powerThird;
    while (n <= lengthCheck)
    {
        eachValue = ((credit % multiplier) / divider);
        otherValue = ((credit % multiplierO) / dividerO);
        int product = eachValue * 2;
        adder += (product > 9) ? (product % 10 + product / 10) : product; // it it is two digits add them  separatly digit by digit

        addero += otherValue;
        multiplierO *= 100;
        multiplier *= 100;
        divider *= 100;
        dividerO *= 100;
        n++;
    }
    int checkSum = addero + adder;
    if (checkSum % 10 == 0)
    {
        if ((lengthCheck == 13 || lengthCheck == 16) && firstValue == 4)
        {
            finalValue = "VISA";
        }
        else if ((lengthCheck == 15) && ((firstValue == 3 && secondValue == 4) || (firstValue == 3 && secondValue == 7)))
        {
            finalValue = "AMERICAN";
        }
        else if (lengthCheck == 16 && firstValue == 5 && secondValue >= 1 && secondValue <= 5)
        {
            finalValue = "MASTER";
        }
        else
        {
            finalValue = "INVALID";
        }
    }
    else
    {
        finalValue = "INVALID";
    }

    if (strcmp(finalValue, "VISA") == 0)
    {
        printf("VISA\n");
    }
    else if (strcmp(finalValue, "AMERICAN") == 0)
    {
        printf("AMEX\n");
    }
    else if (strcmp(finalValue, "MASTER") == 0)
    {
        printf("MASTERCARD\n");
    }
    else if (strcmp(finalValue, "INVALID") == 0)
    {
        printf("INVALID\n");
    }
}
