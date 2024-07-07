def main():
    text = input("Enter a Text")
    text = text.lower()
    text = text.strip()
    index = text.rfind(".")
    text = text[index+1:]
    control(text)

def control(text):
    match text:
        case "gif":
            print(f"image/gif")
        case "jpg" | "jpeg":
            print(f"image/jpeg")
        case "png":
            print(f"image/png")
        case "pdf":
            print(f"application/pdf")
        case "txt":
            print(f"text/plain")
        case "zip":
            print(f"application/zip")
        case _:
            print("application/octet-stream")
main()
