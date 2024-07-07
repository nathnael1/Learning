#include <stdio.h>
#include <cs50.h>
void compare(int space,int i);
int main(void){
    int value;
    int space;
do{
     value=get_int("Height: ");
}while(value<1||value>8);
for(int i=0;i<value;i++){
     space=value-i-1;



    compare(space,i);


}
}
void compare(int space,int i){
    for(int j=0;j<space;j++){
        printf(" ");
    }
    for(int k=0;k<i+1;k++){
        printf("#");
    }
    for (int l=0;l<2;l++){
        printf(" ");
    }
    for(int m=0;m<i+1;m++){
        printf("#");
    }

    printf("\n");
}