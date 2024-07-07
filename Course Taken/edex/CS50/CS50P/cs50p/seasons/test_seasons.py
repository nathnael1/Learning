from seasons import convert

def test_time():
    assert convert(218) == "Three hundred thirteen thousand, nine hundred twenty minutes"
    assert convert(583) == "Eight hundred thirty-nine thousand, five hundred twenty minutes"
