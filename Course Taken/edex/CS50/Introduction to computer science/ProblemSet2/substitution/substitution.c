#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
int main(int argc,string argv[]){


    bool nonAlpha=false;
    bool nonRepeated=false;
    int counter=0;
    if(argc==2){
    for(int i=0,length=strlen(argv[1]);i<length;i++){
        if(isdigit(argv[1][i])||ispunct(argv[1][i])){
            nonAlpha=true;
        }
        for(int j=0;j<length;j++){
            if(argv[1][i]==argv[1][j]){
                counter++;
            }
        }

        if(counter>=2){
            nonRepeated=true;
        }
        counter=0;
    }}
    char asci;
    char aton;
    char mappedu[26];
    char mappedl[26];

    char encrypt;
    if(argc!=2){
        printf("./subustitution: key\n");
        return 1;
    }else if(nonAlpha){
        printf("Key must only contain alphabetic characters\n");
         return 1;
    }else if(strlen(argv[1])!=26){
        printf("Key must contain 26 characters\n");
         return 1;
    }else if(nonRepeated){
        printf("Key must not contain repeated character\n");
         return 1;
    }else{
        string input=get_string("plaintext: ");
        printf("ciphertext: ");
        for(int i=0,length=strlen(argv[1]);i<length;i++){
           //change each letter to ascicode by mapping
        mappedu[i]=toupper(argv[1][i]);
        mappedl[i]=tolower(argv[1][i]);

        }
        for(int i=0,length=strlen(input);i<length;i++){
            if(isalpha(input[i])){
                            if(isupper(input[i])){
                aton=input[i]-65;
                for(int j=0;j<26;j++){
                    if(j==aton){
                        encrypt=mappedu[j];
                        printf("%c",encrypt);
                    }
                }
            }else if(islower(input[i])){
                aton=input[i]-97;
                for(int j=0;j<26;j++){
                    if(j==aton){
                        encrypt=mappedl[j];
                        printf("%c",encrypt);
                    }
                }
            }
            }else{
                printf("%c",input[i]);
            }


        }
    }
    printf("\n");
    return 0;
}
