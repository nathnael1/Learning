from jar import Jar
import pytest

def test_init():
    with pytest.raises(ValueError,match = "negative"):
        jar = Jar(-1)


def test_str():
    jar = Jar()
    assert str(jar) == ""
    jar.deposit(1)
    assert str(jar) == "🍪"
    jar.deposit(11)
    assert str(jar) == "🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪"


def test_deposit():
    jar = Jar(3)
    with pytest.raises(ValueError,match = "Greater than capacity"):
        jar.deposit(4)



def test_withdraw():
    jar = Jar()
    with pytest.raises(ValueError,match = "More than the capacity"):
        jar.withdraw(4)
