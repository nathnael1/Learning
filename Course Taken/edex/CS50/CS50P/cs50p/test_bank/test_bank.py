# test_bank.py
from bank import value

def test_return_zero():
    assert value("hello nati") == 0
    assert value("Hello") == 0
    assert value("Hello nati") == 0

def test_return_20():
    assert value("Hi") == 20 # Handle entire phrases
    assert value("hey") == 20

def test_return_100():
    assert value("What's up?") == 100
    assert value("good morning") == 100



