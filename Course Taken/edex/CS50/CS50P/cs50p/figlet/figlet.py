from pyfiglet import Figlet
import random
import sys

if len(sys.argv) == 1:
    isRandomFont = True
elif len(sys.argv) == 3 and (sys.argv[1] == '-f' or sys.argv[1] == '--font'):
    isRandomFont = False
else:
    sys.exit(1)
figlet = Figlet()
figlet.getFonts()
if isRandomFont == False:
    try:
        figlet.setFont(font=sys.argv[2])

    except:
        print("Invalid usage")
        sys.exit(1)
else:
    font = random.choice(figlet.getFonts())
s = input("Enter text:")
print(f"Output: {figlet.renderText(s)}")
