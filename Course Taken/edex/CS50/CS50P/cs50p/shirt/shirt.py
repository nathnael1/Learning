import sys
from pathlib import Path
from PIL import Image,ImageOps

def main():
    if len(sys.argv) < 3:
        sys.exit("Too few command-line arguments")
    elif len(sys.argv) > 3:
        sys.exit("Too many command-line arguments")
    else:
        value = sys.argv[1].split(".")
        valuetwo = sys.argv[2].split(".")
        if value[-1].lower() not in ('png', 'jpg', 'jpeg'):
            sys.exit("Image not supported")
        if valuetwo[-1].lower() not in ('png', 'jpg', 'jpeg'):
            sys.exit("Image not supported")
        if value[-1].lower() != valuetwo[-1].lower():
            sys.exit("Input and output have different extension")
    shirt(sys.argv[1],sys.argv[2])
def shirt(x, y):
    filePath = Path(x)
    shirt = Image.open("shirt.png")
    size = shirt.size

    if filePath.exists():
        photo = Image.open(filePath)  # Open the image directly using Image.open()
        photo_cropped = ImageOps.fit(photo,size)
        photo_cropped.paste(shirt, mask = shirt)
        photo_cropped.save(y)
    else:
        sys.exit("File does not exist")


if __name__ == "__main__":
    main()
