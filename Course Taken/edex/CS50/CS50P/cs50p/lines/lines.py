import sys
from pathlib import Path


def main():
    if len(sys.argv) == 1:
        sys.exit("Too few command-line arguments")
    elif len(sys.argv) > 2:
        sys.exit("Too many command-line arguments")
    else:
        value = sys.argv[1].split(".")
        if value[1] != 'py':
            sys.exit("Not a Python file")
    print(counter(sys.argv[1]))
def counter(x):
    count = 0
    filePath = Path(x)
    if filePath.exists():
        with open(filePath) as file:
            lines = file.readlines()
            for line in lines:
                if not (line.lstrip().startswith("#") or line.strip() == ''):
                    count+=1
    else:
        sys.exit("File does not exist")
    return count

if __name__ == "__main__":
    main()
