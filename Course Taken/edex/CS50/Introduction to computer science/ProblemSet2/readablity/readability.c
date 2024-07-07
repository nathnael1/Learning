#include <stdio.h>
#include <ctype.h>
#include <cs50.h>
#include <string.h>
#include <math.h>

int main(void) {
    int words = 1;
    int sentence = 0;
    int letters = 0;
    string input = get_string("Enter A word: ");

    for(int i = 0, length = strlen(input); i < length; i++) {
        if(isblank(input[i])) {
            words += 1;
        } else if(isalpha(input[i])) {
            letters += 1;
        } else if(input[i]=='.'||input[i]=='!'||input[i]=='?') {
            sentence += 1;
        }
    }

    if(words == 0 || sentence == 0) {
        printf("Can't retrieve the grade value\n");
        return 1;
    }

float L = (float)letters / (float)words * 100;
float S = (float)sentence / (float)words * 100;
int index = round(0.0588 * L - 0.296 * S - 15.8);


    if(index >= 16) {
        printf("Grade 16+\n");
    } else if(index <= 1) {
        printf("Before Grade 1\n");
    } else {
        printf("Grade %i\n", index);
    }

    return 0;
}
