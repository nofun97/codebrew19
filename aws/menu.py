from PIL import Image
import pytesseract
import cv2
import os
import re
import nltk
from food import wordClassify, constructFoodClassifier
import pandas as pd
from collections import defaultdict

FOOD_DATASET_FILENAME = "cleanedCol.csv"
FOOD_DICT = constructFoodClassifier(filename=FOOD_DATASET_FILENAME)


def processImage(filename):
	img = cv2.imread(filename)
	gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

	# optional preprocessing
	filename = "{}.jpg".format(os.getpid())
	cv2.imwrite(filename, gray)

	# this holds the resulting string
	text = pytesseract.image_to_string(Image.open(filename))
	os.remove(filename)
	return text


# Visualization functions before and after
# print(type(text))

# cv2.imshow("Image", img)
# cv2.imshow("Output", gray)
# cv2.waitKey(0)


# NLP methods
def removeNumbers(text):
	return re.sub(r'\d+', '', text)



# detect grammar and set rules
def grammarFilter(listOfWords):
	food = []
	grammarData = []
	for word in listOfWords:
		# give up on words with length 2 or less
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
			# don't take in this word
			i += 1
	return food


def imageFoodClassification(imageFilename):
	foods = []
	text = processImage(imageFilename)
	output = removeNumbers(text)
	lines = output.split('\n')
	length = len(lines)
	i = 0
	for line in lines:
		i += 1
		# PROGRESS CHECKER
		if i % 100 == 0:
			print(f"{i} out of {length} done")
		if line:
			output = list(map(str.lower, list(re.split("[ (_!@#$%^+&*~`_.,<>?/\"{})|\\:;]+", line))))
			output = list(filter(lambda string: string.strip(), output))
			if output:
				combined = wordClassify(output, FOOD_DICT)
				foods += grammarFilter(combined)
	return list(set(foods))



if __name__ == '__main__':
	foods = imageFoodClassification("sample2.jpg")
	print(("************************************"))
	print(foods)






