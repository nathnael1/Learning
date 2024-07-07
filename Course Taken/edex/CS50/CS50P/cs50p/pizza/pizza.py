import sys
from pathlib import Path
import csv
from tabulate import tabulate

def main():
    if len(sys.argv) == 1:
        sys.exit("Too few command-line arguments")
    elif len(sys.argv) > 2:
        sys.exit("Too many command-line arguments")
    else:
        value = sys.argv[1].split(".")
        if value[1] != 'csv':
            sys.exit("Not a Python file")
    data = pizza(sys.argv[1])
    header = data[0].keys()
    rows = [x.values() for x in data]
    print(tabulate(rows, header,tablefmt="grid"))
def pizza(x):
    pizzaFile = []
    filePath = Path(x)
    if filePath.exists():
        with open(filePath) as file:
            reader = csv.DictReader(file)
            for row in reader:
                if "Sicilian Pizza" in row:
                    pizzaFile.append({"Sicilian Pizza": row["Sicilian Pizza"], "Small": row["Small"], "Large": row["Large"]})
                elif "Regular Pizza" in row:
                    pizzaFile.append({"Regular Pizza": row["Regular Pizza"], "Small": row["Small"], "Large": row["Large"]})

    else:
        sys.exit("File does not exist")
    return pizzaFile


if __name__ == "__main__":
    main()
