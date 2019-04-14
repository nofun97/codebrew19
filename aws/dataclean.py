f = open('/Users/novan/Desktop/CODE/codebrew19/aws/food_coded.csv', 'r')
foods = {}
for l in f:
    splitted = l.split(',')
    splitted = map(lambda x: x.lower().strip('" \n.\r'), splitted)
    for i in splitted:
        if i not in foods:
            foods[i] = 1
        else:
            foods[i] += 1
f.close()

f = open('/Users/novan/Desktop/CODE/codebrew19/aws/cleanedCol.csv', 'w+')
for i in foods:
    f.write(i + '\n')
f.close()
