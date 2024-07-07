from project import  passwordGenerator, encryption,info
def test_info():
    expected_info = [
        "Usage: project.py (-t -p -e)",
        "python project.py -t : Ai text summarization , takes input and prints .txt output",
        "python project.py -p : Generate Strong password from user's length terminal output",
        "python project.py -e : Encryption/Decryption of file takes input (.txt, .docx, .pdf) and produces output "
    ]
    assert info() == expected_info, "info function does not return the expected result"
def test_passwordGenerator(mocker):
    # Mock the input function
    mocker.patch('builtins.input', return_value='8')
    assert passwordGenerator() == "success"

def test_encryption(mocker):
    # Mock the input and open functions
    mocker.patch('builtins.input', side_effect=['e', 'input.txt', 'output.txt'])
    mocker.patch('builtins.open', mocker.mock_open(read_data='This is a test.'))
    mocker.patch('time.sleep')  # This makes the test run faster
    assert encryption() == "success"
