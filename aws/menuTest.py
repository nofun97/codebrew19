from PIL import Image
import pytesseract
import cv2
import os
import re
import nltk

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

#Method 2: separate into lines and remove empty strings and strings that are whitespaces
output = output.split("\n")
output = list(filter(lambda string: string.strip(), output))
# print(output)

#Method 3: detect grammar
food = []
for string in output[:40]:
	grammarData = []
	listOfWords = string.split(' ')
	for word in listOfWords:
		text = nltk.word_tokenize(word)
		if text:
			grammarData.append(nltk.pos_tag(text)[0])
	i = 0
	while i < len(grammarData):
		if 'VB' in grammarData[i][1] and i+1 < len(grammarData):
			food.append(''.join([grammarData[i][0], " ", grammarData[i+1][0]]))
			i += 2
		else:
			food.append(grammarData[i][0])
			i += 1
print(food)
