#include <stdio.h>
#include <cs50.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>
int main(int argc,string argv[]){
    int tester=0;
    if(argc==2){
    for(int i=0,length=strlen(argv[1]);i<length;i++){
        if(isalpha(argv[1][i])||ispunct(argv[1][i])){
              tester=1;
        }
    }}
     if(argc!=2||tester==1){
        printf("Usage: ./caesar key \n");
        return 1;
    }else{
        int key= atoi(argv[1]);
        char atou;
        char atol;
        char encrypt;
        char toa;

        string plainText= get_string("Enter The Text You Want To Encrypt: ");
         printf("ciphertext: ");
        for(int i=0,length=strlen(plainText);i<length;i++){
            if(isalpha(plainText[i])){

                if(isupper(plainText[i])){
                    atou=plainText[i]-64;
                   encrypt=(atou+key)%26;
                   toa=encrypt+64;
                   printf("%c",toa);
                }if(islower(plainText[i])){
                   atol=plainText[i]-96;
                   encrypt=(atol+key)%26;
                   toa=encrypt+96;
                   printf("%c",toa);
                }

            }else{

              printf("%c",plainText[i]);
            }

        }
        printf("\n");
        return 0;
    }

}
