    #include <ctype.h>
    #include <cs50.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {

    string player1=get_string("Player 1 enter your Word: ");
    string player2=get_string("Player 2 enter your Word: ");

    int length1=strlen(player1);
    int length2=strlen(player2);
    int value1=0;
    int value2=0;
    int firstPlayer[length1];
    int secondPlayer[length2];
    char charListOne[]={'A','E','I','L','N','O','R','S','T','U'};
    char charListTwo[]={'D','G'};
    char charListThree[]={'M','B','C','P'};
    char charListFour[]={'F','H','V','W','Y'};
    char charListFive[]={'K'};
    char charListEight[]={'J','X'};
    char charListTen[]={'Z','Q'};
    int points[26]={0};
    int lengthFirstArray=sizeof(charListOne)/sizeof(charListOne[0]);
    int lengthSecondArray=sizeof(charListTwo)/sizeof(charListTwo[0]);
    int lengthThirdArray=sizeof(charListThree)/sizeof(charListThree[0]);
    int lengthFourthArray=sizeof(charListFour)/sizeof(charListFour[0]);
    int lengthFifthArray=sizeof(charListFive)/sizeof(charListFive[0]);
    int lengthEightthArray=sizeof(charListEight)/sizeof(charListEight[0]);
    int lengthTenthArray=sizeof(charListTen)/sizeof(charListTen[0]);
    for(int i=0;i<length1;i++){
        firstPlayer[i]=toupper(player1[i]);
        int value=firstPlayer[i];

    }
    for(int i=0;i<length2;i++){
        secondPlayer[i]=toupper(player2[i]);
    }
    for(int i=0;i<lengthFirstArray;i++){
        char currentChar=charListOne[i];
        int index= currentChar-'A';
        points[index]=1;

    }
    for(int i=0;i<lengthSecondArray;i++){
        char currentChar=charListTwo[i];
        int index= currentChar-'A';
        points[index]=2;

    }
    for(int i=0;i<lengthThirdArray;i++){
        char currentChar=charListThree[i];
        int index= currentChar-'A';
        points[index]=3;

    }
    for(int i=0;i<lengthFourthArray;i++){
        char currentChar=charListFour[i];
        int index= currentChar-'A';
        points[index]=4;
    }
    for(int i=0;i<lengthFifthArray;i++){
        char currentChar=charListFive[i];
        int index= currentChar-'A';
        points[index]=5;

    }
    for(int i=0;i<lengthEightthArray;i++){
        char currentChar=charListEight[i];
        int index= currentChar-'A';
        points[index]=8;

    }
    for(int i=0;i<lengthTenthArray;i++){
        char currentChar=charListTen[i];
        int index= currentChar-'A';
        points[index]=10;

    }
    for(int i=0;i<length1;i++){
        if(isalpha(firstPlayer[i])){
        int each=firstPlayer[i]-'A';
        value1+=points[each];
    }else{
        value1+=0;
    }


    }
    for(int i=0;i<length2;i++){
        if(isalpha(secondPlayer[i])){
        int each=secondPlayer[i]-'A';
        value2+=points[each];}
    else{
        value1+=0;
    }

    }
    if(value1>value2){
        printf("Player 1 wins!\n");
    }else if(value1<value2){
        printf("Player 2 wins!\n");
    }else{
        printf("Tie!\n");
    }
    printf("\n");


    }


