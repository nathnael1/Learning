
from os.path import exists
from cryptography.fernet import Fernet
import time
import re
import string
import secrets
import sys
import os
def textsummarizer():
    from transformers import pipeline
    for _ in range(2): # to make it attractive in terminal
        print()
    article = input("The file you want to read from: ")
    for _ in range(2): # to make it attractive in terminal
        print()
    print( "if the file doesn't contain a text it will just print nothing","...")
    time.sleep(2)
    match = re.search(r"\w+(\.txt)$",article,re.IGNORECASE)
    if not match:
        raise ValueError("Error in format of the input data")
    file_exists = exists(article)
    if not file_exists:
        raise ValueError("File not Found")
    print("\ninput file successful")
    for _ in range(2): # to make it attractive in terminal
        print()

    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    for _ in range(2): # to make it attractive in terminal
        print()
    with open(article,"r") as ifile:
        summarized = ifile.read()
        word = summarized.split(" ")
    try:
        maximum:int = int(input("Enter maximum number of words: "))
        print() #to make it attractive
        minimum:int = int(input("Enter minimum nmber of words: "))
        if len(word) < maximum:
            raise ValueError("This is a summarization app there for the words must be greater than the maximum output" )
    except ValueError("Error in setting token") as e:
        print(e)
    for _ in range(2): # to make it attractive in terminal
        print()

    time.sleep(1)
    o = input("Enter file name to output(.txt: foramt): ").strip()
    print("Cheking it is in correct format","...")
    matcho = re.search(r"\w+(\.txt)$",o,re.IGNORECASE)
    if not matcho:
        raise ValueError("Error in format of the input data: usage 'text.txt'")
    time.sleep(1)
    print("Format correct!")
    print("summarizing(30sec to 1 minute) please wait .... ")
    result = summarizer(summarized, max_length=maximum, min_length=minimum, do_sample=False)
    for item in result:
        final = item["summary_text"]
        parts = re.split(r'[,.]',final)
    print("File summarized")


    with open(o,'w') as file:
        for part in parts:
            file.write(part.strip() + '\n')
    print(f"saving {o} ...")
    time.sleep(2)
    print(f"{o} Saved successful")
    return "success"

def passwordGenerator():
    alphabet = string.ascii_letters + string.digits
    n:int = int(input("Length of password (it must be greater than 4): "))
    if n < 5:
        raise ValueError("it must be greater than 4")
    while True:
        password = ''.join(secrets.choice(alphabet) for i in range(n))
        if (any(c.islower() for c in password)
                and any(c.isupper() for c in password)
                and sum(c.isdigit() for c in password) >= 3):
            break
    print("Writting encrypted password...")
    time.sleep(2)
    print("Writting successful!")
    time.sleep(2)
    print("Encrypted Password:",password)
    return "success"
def encryption():
    choice = input("Encryption or Decryption(E/D)):").strip().lower()
    test = True
    if choice == 'e':
        key = Fernet.generate_key()
        f = Fernet(key)
        sharable_key = key.decode()
        data = input("The  text from the file you want to encrypt(pdf,txt,docx): ")
        print( "checking file exists and format of the file","...")
        time.sleep(2)
        match = re.search(r"\w+([\.txt|\.pdf|\.docx?])$",data,re.IGNORECASE)
        if not match:
            raise ValueError("Error in format of the input data")
        file_exists = exists(data)
        if not file_exists:
            raise ValueError("File not Found")
        with open(data,"r") as ifile:
            container = ifile.read()
            container = container.encode()
        print("File exist: successful")

        token = f.encrypt(container)
        token = token.decode()
        print("Encrypting the text","...")
        time.sleep(2)
        print("File encrypted!")
        o = input("The  text to  the file you want to encrypt(pdf,txt,docx): ")
        matcho = re.search(r"\w+([\.txt|\.pdf|\.docx?])$",o,re.IGNORECASE)
        if not matcho:
            raise ValueError("Error in format of the input data usage: 'text.txt/pdf/docx'")
        print(f"saving {o}","...")
        time.sleep(2)
        print("File saved!")
        print("Save this key in safe place, used for decrypting:",sharable_key)
        with open(o,'w') as ofile:
            ofile.write(token)
        test = True
    elif choice == 'd':
        data = input("Enter the file you want to decrypt(text,pdf,docx): ")
        userkey = input("Enter the key for decrypting: ").strip()
        key = userkey.encode()
        print( "checking file exists and file format","...")
        time.sleep(2)
        match = re.search(r"\w+([\.txt|\.pdf|\.docx?])$",data,re.IGNORECASE)
        if not match:
            raise ValueError("Error in format of the input data")
        file_exists = exists(data)
        if not file_exists:
            raise ValueError("File not Found")
        print("File exist: successful")
        print("encoding","...")
        time.sleep(2)
        with open(data,"r") as ifile:
            container = ifile.read()
            containere = container.encode()
        print("enode successful!")
        print("Decrypting the text","...")
        time.sleep(1)

        f = Fernet(key)
        token = f.decrypt(containere)
        token = token.decode()
        print("Decrypted succesful!")
        o = input("The  text to  the file you want to decrypt(pdf,txt,docx): ")
        matcho = re.search(r"\w+([\.txt|\.pdf|\.docx?])$",o,re.IGNORECASE)
        if not matcho:
            raise ValueError("Error in format of the input data usage: 'text.txt/pdf/docx'")
        print(f"saving {o}","...")

        time.sleep(2)

        with open(o,'w') as ofile:
            ofile.write(token)
        print("File saved: Decrypted succesfully!")
        test = True
    else:
        raise ValueError("Usage: e/d or E/D")
    if test:
        return "success"
    else:
        return "no sucess"
def argumentPharser(n):
    if n == '-t':
        textsummarizer()
        return "success"
    elif n == '-p':
        passwordGenerator()
        return "success"
    elif n == '-e':
        encryption()
        return "success"
    else:
        for item in info():
            print(item)
        return "no success"
def info():
    info = ["Usage: project.py (-t -p -e)",
            "python project.py -t : Ai text summarization , takes input and prints .txt output",
            "python project.py -p : Generate Strong password from user's length terminal output",
            "python project.py -e : Encryption/Decryption of file takes input (.txt, .docx, .pdf) and produces output "]
    return info
def main():
    if len(sys.argv) == 2:
        argumentPharser(sys.argv[1])
    else:
        for item in info():
            print(item)





if __name__ == "__main__":
    main()

