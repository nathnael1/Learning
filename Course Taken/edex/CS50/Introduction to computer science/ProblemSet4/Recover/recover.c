#include <math.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{

    // Accept a single command-line argument
    if (argc != 2)
    {
        return 1;
    }
    // Open the memory card
    char *memory = argv[1];

    FILE *m = fopen(memory, "r");
    FILE *img = NULL;
    uint8_t buffer[512];
    int i = 0;
    while (fread(buffer, 1, 512, m) == 512)
    {
        if ((buffer[0] == 0xFF) && (buffer[1] == 0xD8) && (buffer[2] == 0xFF) &&
            (buffer[3] >= 0xE0) && (buffer[3] <= 0xEF))
        {
            if (img != NULL)
                fclose(img);
            char filename[8];
            sprintf(filename, "%03i.jpg", i++);
            img = fopen(filename, "w");
            fwrite(buffer, 1, 512, img);
        }
        else
        {
            if (img != NULL)
            {
                fwrite(buffer, 1, 512, img);
            }
        }
    }

    // While there's still data left to read from the memory card
    fclose(img);
    fclose(m);
    // Create JPEGs from the data
}
