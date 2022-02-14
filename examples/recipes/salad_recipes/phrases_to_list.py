file1 = open('waldorf_ingredients.txt', 'r')
Lines = file1.readlines()
 
count = 0
# Strips the newline character
for line in Lines:
    count += 1
    if line != "\n":
        print("<li>{}</li>".format(line.strip()))

file1.close()

print("*" * 50)
file1 = open('cesar_ingredients.txt', 'r')
Lines = file1.readlines()

count = 0
# Strips the newline character
for line in Lines:
    count += 1
    if line != "\n":
        print("<li>{}</li>".format(line.strip()))