from PIL import Image
import pytesseract
import cv2
import os
import re
import requests
import json

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


# Method 2: separate into lines and remove empty strings
output = output.split("\n")
output = list(filter(None, output))
print(output)

# AppID 485558d3
# AppKey c9cf20e81acf2f2a380fc79af83edd57


def isFood(possibleFood):
    url = "https://api.edamam.com/api/food-database/parser"
    params = {
        "app_id": "485558d3",
        "app_key": "c9cf20e81acf2f2a380fc79af83edd57",
        "ingr": possibleFood
    }
    response = requests.get(url, params)
    data = response.json()
    return len(data["parsed"]) > 0


def extractPossibleFood(line):
    line = line.lower()
    url = "https://api.edamam.com/api/food-database/parser"
    params = {
        "app_id": "485558d3",
        "app_key": "c9cf20e81acf2f2a380fc79af83edd57",
        "ingr": line,
        "nutrition-type": "logging"
    }

    response = requests.get(url, params)
    data = response.json()
    foods = []
    for d in data["parsed"]:
        food = d["food"]["label"]
        if food.lower() in line:
            foods.append(d["food"]["label"])
    return foods


if __name__ == "__main__":
    print(isFood("Poached Egg"))
    print(extractPossibleFood("Poached Egg $20 Fried Rice 30$"))
