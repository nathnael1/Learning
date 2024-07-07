# AI and Security
#### Video Demo:  <https://youtu.be/lQKChkFIUl8>
#### Description: AI summarizer and Create strong password
TODO
The "AI and Security" CLI tool provides a series of functions designed to enhance text processing and security operations. At its core, the tool provides powerful summary capabilities, using the Facebook Bart model to distill long documents into concise summaries This feature is particularly useful for users wanting to extract key insights or aggregate information for ease of use. Using the customizable word limit, users can tailor the summary to meet specific needs, making it suitable for a wide range of content. Additionally, the tool boasts powerful password generation, allowing users to quickly create strong and secure passwords. By allowing users to specify the password length, enforcing strict strength standards with lowercase and uppercase characters, and multiple characters, the tool ensures that more secure certificates will be created for applications

In addition, the "AI and Security" CLI tool prioritizes data security through its encryption and decryption functionality. By using the Fernet symmetric encryption algorithm, users can encrypt sensitive information files to protect against tampering or tampering. The tool supports file formats such as .txt, .pdf, and .docx, enabling encrypted data processing across platforms. Whether encrypting files for secure storage or decrypting to gain authorized access, users can rely on the tool’s robust encryption capabilities to protect their sensitive information Through connectivity with ease of use and comprehensive feature sets, the "Project Title" CLI tool makes a valuable resource for individuals and organizations looking to streamline text processing tasks


## AI and Security
Overview
The project provides a command-line interface (CLI) tool with multiple functionalities:

Text Summarization: Utilizes the Facebook BART model for summarizing text input from a file.
Password Generation: Generates strong passwords based on user-defined criteria.
Encryption/Decryption: Encrypts or decrypts text files using the Fernet symmetric encryption algorithm.
Features
### Text Summarization:

Accepts a text file as input.
Summarizes the text using the Facebook BART model.
Supports setting maximum and minimum word limits for the summary.
Outputs the summarized text to a new file.
### Password Generation:

Allows the user to specify the length of the password.
Ensures generated passwords meet strength criteria: at least one lowercase letter, one uppercase letter, and three digits.
### Encryption/Decryption:

Provides options for encryption or decryption.
Encrypts text files using a randomly generated Fernet key.
Decrypts text files using a user-provided key.
Supports various file formats including .txt, .pdf, and .docx.
Usage
The CLI tool can be used with the following command-line arguments:

-t: Text summarization
-p: Password generation
-e: Encryption/Decryption
### Usage examples:

python project.py -t: Summarizes text from a file.
python project.py -p: Generates a strong password.
python project.py -e: Encrypts or decrypts a text file.
### Installation
Clone the repository: git clone repository_url
Navigate to the project directory: cd project_directory
Install dependencies: pip install -r requirements.txt
### Requirements
Python 3.6+
transformers library for text summarization
cryptography library for encryption
pytest for running tests
### Testing
The project includes unit tests for each functionality:

test_textsummarizer.py: Tests for the text summarization feature.
test_passwordGenerator.py: Tests for the password generation feature.
test_encryption.py: Tests for the encryption/decryption feature.
To run the tests, execute pytest in the project directory.
