from PIL import Image
import pytesseract
import cv2
import os
import re

img = cv2.imread("sample2.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# optional preprocessing

filename = "{}.jpg".format(os.getpid())
cv2.imwrite(filename, gray)

# this holds the resulting string
text = pytesseract.image_to_string(Image.open(filename))
os.remove(filename)



# print(type(text))

# cv2.imshow("Image", img)
# cv2.imshow("Output", gray)
# cv2.waitKey(0)


# NLP methods

# Method 1: remove numbers (prices)

output = re.sub(r'\d+', '', text)


#Method 2: separate into lines and remove empty strings
output = output.split("\n")
output = list(filter(None, output))
print(output)