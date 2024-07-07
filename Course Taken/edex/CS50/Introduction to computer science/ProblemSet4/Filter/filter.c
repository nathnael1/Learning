#include "helpers.h"
#include "math.h"
// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int average =
                round((image[i][j].rgbtBlue + image[i][j].rgbtGreen + image[i][j].rgbtRed) / 3.0);
            image[i][j].rgbtBlue = average;
            image[i][j].rgbtGreen = average;
            image[i][j].rgbtRed = average;
        }
    }
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int originalRed = image[i][j].rgbtRed;
            int originalGreen = image[i][j].rgbtGreen;
            int originalBlue = image[i][j].rgbtBlue;

            int newRed =
                round((originalRed * .393) + (originalGreen * .769) + (originalBlue * .189));
            int newGreen =
                round((originalRed * .349) + (originalGreen * .686) + (originalBlue * .168));
            int newBlue =
                round((originalRed * .272) + (originalGreen * .534) + (originalBlue * .131));

            image[i][j].rgbtRed = (newRed > 255) ? 255 : newRed;
            image[i][j].rgbtGreen = (newGreen > 255) ? 255 : newGreen;
            image[i][j].rgbtBlue = (newBlue > 255) ? 255 : newBlue;
        }
    }
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width / 2; j++)
        {
            RGBTRIPLE temp = image[i][j];
            image[i][j] = image[i][width - 1 - j];
            image[i][width - 1 - j] = temp;
        }
    }
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE temp[height][width];
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int sumred = 0;
            int sumgreen = 0;
            int sumblue = 0;
            int count = 0;
            for (int di = -1; di <= 1; di++) // to ittirate first second and third row
            {
                for (int dj = -1; dj <= 1; dj++) // to ittirate first second and third height
                {
                    int ni = i + di;
                    int nj = j + dj;
                    if ((ni >= 0) && (nj >= 0) && (ni < height) && (nj < width)) // to check bounds
                    {
                        sumred += image[ni][nj].rgbtRed;
                        sumgreen += image[ni][nj].rgbtGreen;
                        sumblue += image[ni][nj].rgbtBlue;
                        count++;
                    }
                }
            }
            temp[i][j].rgbtRed = round((float) sumred / count);
            temp[i][j].rgbtGreen = round((float) sumgreen / count);
            temp[i][j].rgbtBlue = round((float) sumblue / count);
        }
    }
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            image[i][j].rgbtRed = temp[i][j].rgbtRed;
            image[i][j].rgbtGreen = temp[i][j].rgbtGreen;
            image[i][j].rgbtBlue = temp[i][j].rgbtBlue;
        }
    }
}
