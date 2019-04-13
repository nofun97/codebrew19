from PIL import Image
import pytesseract
import cv2
import os
import re
import nltk
from food import wordCombine
import pandas as pd
from collections import defaultdict

img = cv2.imread("sample2.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# optional preprocessing

filename = "{}.jpg".format(os.getpid())
cv2.imwrite(filename, gray)

# this holds the resulting string
text = pytesseract.image_to_string(Image.open(filename))
os.remove(filename)


# Visualization
# print(type(text))

# cv2.imshow("Image", img)
# cv2.imshow("Output", gray)
# cv2.waitKey(0)


# NLP methods

# Method 1: remove numbers (prices)

output = re.sub(r'\d+', '', text)

def addSpaces(string):
	return " " + string + " "

foodDict = defaultdict(list)
foods = []
i = 0
#Method 2: separate into lines and remove empty strings and strings that are whitespaces
with open("Dish.csv", "r") as f:
	for line in f:
		if i % 10 == 0:
			print(i)
		line = line.strip('\n')
		result = list(re.split("[ (_!@#-$%^+&*~`_.,<>?/\"{})|\\:;]+", line))
		result = list(map(str.lower, list(filter(lambda string: string.strip(), result))))
		if result:
			foodDict[result[0]].append(result[1:])

# df = pd.read_csv("Dish.csv")
# df = df["name"].str.lower().apply(addSpaces)




# Method 3: detect grammar
def grammarFilter(listOfWords):
	food = []
	grammarData = []
	for word in listOfWords:
		if len(word) <= 2:
			continue
		text = nltk.word_tokenize(word)
		if text:
			grammarData.append(nltk.pos_tag(text)[0])
	i = 0
	while i < len(grammarData):
		# verb + noun
		if 'VB' in grammarData[i][1] and i+1 < len(grammarData):
			food.append(''.join([grammarData[i][0], " ", grammarData[i+1][0]]))
			i += 2
		# just a noun on its own is fine
		elif 'N' in grammarData[i][1]:
			food.append(grammarData[i][0])
			i += 1
		else:
			# don't take in anything else
			# food.append(grammarData[i][0])
			i += 1
	return food


lines = output.split('\n')
length = len(lines)
i = 0
for line in lines:
	i += 1
	if i % 10 == 0:
		print(f"{i} out of {length} done")
	if line:
		output = list(map(str.lower, list(re.split("[ (_!@#$%^+&*~`_.,<>?/\"{})|\\:;]+", line))))
		output = list(filter(lambda string: string.strip(), output))
		if output:
			combined = wordCombine(output, foodDict)
			foods += grammarFilter(combined)
print(foods)










