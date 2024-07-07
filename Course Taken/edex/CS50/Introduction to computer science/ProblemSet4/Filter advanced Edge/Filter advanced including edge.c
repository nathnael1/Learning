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

// Detect edges
void edges(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE temp[height][width];
    int sumredx;
    int sumgreenx;
    int sumbluex;
    int sumredy;
    int sumgreeny;
    int sumbluey;
    int red;
    int green;
    int blue;
    int gx[3][3];
    int gy[3][3];
    gx[0][0] = -1;
    gx[0][1] = 0;
    gx[0][2] = 1;
    gx[1][0] = -2;
    gx[1][1] = 0;
    gx[1][2] = 2;
    gx[2][0] = -1;
    gx[2][1] = 0;
    gx[2][2] = 1;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
            gy[i][j] = gx[j][i];
    }
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            red = 0;
            green = 0;
            blue = 0;
            sumgreenx = 0;
            sumgreeny = 0;
            sumbluex = 0;
            sumbluey = 0;
            sumredx = 0;
            sumredy = 0;
            for (int di = -1; di <= 1; di++) // to ittirate first second and third row
            {
                for (int dj = -1; dj <= 1; dj++) // to ittirate first second and third height
                {
                    int ni = i + di;
                    int nj = j + dj;

                    if ((ni >= 0) && (nj >= 0) && (ni < height) && (nj < width)) // to check bounds
                    {
                        sumredx += image[ni][nj].rgbtRed * gx[di + 1][dj + 1];
                        sumredy += image[ni][nj].rgbtRed * gy[di + 1][dj + 1];
                        sumbluex += image[ni][nj].rgbtBlue * gx[di + 1][dj + 1];
                        sumbluey += image[ni][nj].rgbtBlue * gy[di + 1][dj + 1];
                        sumgreenx += image[ni][nj].rgbtGreen * gx[di + 1][dj + 1];
                        sumgreeny += image[ni][nj].rgbtGreen * gy[di + 1][dj + 1];
                    }
                }
            }
            red = round(sqrt(pow(sumredx, 2) + pow(sumredy, 2)));
            green = round(sqrt(pow(sumgreenx, 2) + pow(sumgreeny, 2)));
            blue = round(sqrt(pow(sumbluex, 2) + pow(sumbluey, 2)));
            temp[i][j].rgbtRed = (red > 255) ? 255 : red;
            temp[i][j].rgbtGreen = (green > 255) ? 255 : green;
            temp[i][j].rgbtBlue = (blue > 255) ? 255 : blue;
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
