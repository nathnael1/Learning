#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt the user for change owed, in cents
    int cent;
    do
    {
        cent = get_int("Enter yor Change ");
    }
    while (cent < 1);
    int counter = 0;

    while (cent > 0)
    {
        if (cent >= 25)
        {
            cent -= 25;
            counter++;
        }
        else if (cent >= 10)
        {
            cent -= 10;
            counter++;
        }
        else if (cent >= 5)
        {
            cent -= 5;
            counter++;
        }
        else if (cent >= 1)
        {
            cent -= 1;
            counter++;
        }
    }
    printf("%i\n", counter);
}
