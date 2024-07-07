import csv
import sys

dnaLists = []
dnadict = {}


def main():

    # TODO: Check for command-line usage
    if (len(sys.argv) != 3):
        print("Bad usage of command line")
        return False
    # TODO: Read database file into a variable
    with open(sys.argv[1], "r") as efile:
        dnaDatabase = csv.DictReader(efile)
        sequence = dnaDatabase.fieldnames[1:]
        for row in dnaDatabase:
            dnaLists.append(row)
    # print(dnaLists)
    # TODO: Read DNA sequence file into a variable
    with open(sys.argv[2], "r") as ofile:
        dnaPerson = ofile.read()
    # print(dnaPersons)
    # TODO: Find longest match of each STR in DNA sequence
    for key in sequence:
        c = longest_match(dnaPerson, key)
        dnadict[key] = c

    # print(dnaLists)

    # TODO: Check database for matching profiles
    foundmatch = False
    for profile in dnaLists:
        match = True
        for key, value in profile.items():
            if key != "name" and (key not in dnadict or dnadict[key] != int(value)):
                match = False

                break
        if match:
            print(profile["name"])
            foundmatch = True
            break
    if not foundmatch:
        print("No match")


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()
