from plates import is_valid

def test_first_number():
    assert is_valid("22") == False
def test_size():
    assert is_valid("H") == False
    assert is_valid("OUTATIME") == False
def test_punctuation():
    assert is_valid("PI3.14") == False
def test_firstzero():
    assert is_valid("CS05") == False
def test_numberPosition():
    assert is_valid("CS50P") == False

