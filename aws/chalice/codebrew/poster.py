import requests
import json
from imageSearch import getImageURL
from menu import imageFoodClassification
from sentimentAnalysis import analyzeAndGrade
from uuid import uuid4




def add_item(foodName, diets, category,
                restaurantIDs, pictureURL, rating):
		URL = "https://jgtikqh9fi.execute-api.us-east-1.amazonaws.com/api/food"
		uid = str(uuid4())
		params = {'foodID': uid,
                'foodName': foodName,
                'category': category,
                'diets': diets,
                'restaurantIDs': restaurantIDs,
                'pictureURL': pictureURL,
                'rating': rating
            }
		response = requests.post(url=URL, data=params)
		data = json.loads(response.text)        
		return uid


ids = {
    "Humble Rays": "18423923",
    "Seven Seeds": "16573377",
    "Shanghai Street": "16582280",
    "Vegie Bar": "16572571",
    "Serotonin Eatery": "16713362",
    "Richmond Oysters": "16572220",
    "Conservatory": "16571165",
    "Claypot Seafood Bar": "16571144",
    "Sister of Soul": "16583336",
    "Gong De Lin": "16581071"
}

i = 0
categories = ["lunch", "brunch", "dinner", "breakfast"]
for id in ids.values():
	filename = "restaurantID/" + id + ".jpg"
	foodList = imageFoodClassification(filename)
	scoreDict = analyzeAndGrade(foodList)
	for food in foodList:
		try:
			add_item(food, [], [], ["23424", "34234"], getImageURL(food), scoreDict[food]*5)
		except:
			add_item(food, [], [], ["23424", "34234"], getImageURL(food), 3)





