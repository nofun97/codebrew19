import requests
import json
from imageSearch import getImageURL
from menu import imageFoodClassification
from sentimentAnalysis import analyzeAndGrade
from uuid import uuid4
import time

def start_item():
    URL = "https://jgtikqh9fi.execute-api.us-east-1.amazonaws.com/api/food"
    params = {'foodID': '13856423-b45d-4ad6-bca0-603c13c2de83', 'foodName': 'stewed lamb', 'category': [], 'diets': [], 'restaurantIDs': ['23424', '34234'], 'pictureURL': 'https://natashaskitchen.com/wp-content/uploads/2018/03/Lamb-Stew-5-600x900.jpg', 'rating': int(3.3388723762)}
    headers = {'content-type':'application/json'}
    response = requests.post(URL, data=json.dumps(params), headers=headers)
    data = response.text
    print(data)


def add_item(foodName, diets, category,
                restaurantIDs, pictureURL, rating):
    URL = "https://jgtikqh9fi.execute-api.us-east-1.amazonaws.com/api/food"
    uid = str(uuid4())
    payload = {'foodID': uid, 'foodName': foodName, 'category': category, 'diets': diets, 'restaurantIDs': restaurantIDs, 'pictureURL': pictureURL, 'rating': int(rating)}
    headers = {'content-type':'application/json'}
    response = requests.post(URL, data=json.dumps(payload), headers=headers)
    data = response.text     
    return data

ids = {
    #"Humble Rays": "18423923",
    #"Seven Seeds": "16573377",
    #"Shanghai Street": "16582280",
    #"Vegie Bar": "16572571",
    #"Serotonin Eatery": "16713362",
    "Richmond Oysters": "16572220",
    "Conservatory": "16571165",
    "Claypot Seafood Bar": "16571144",
    #"Sister of Soul": "16583336",
    "Gong De Lin": "16581071"
}



i = 0
categories = ["lunch", "brunch", "dinner", "breakfast"]
# for id in list(ids.values())[2]:
id = "18423923"
filename = "restaurantID/" + id + ".jpg"
foodList = imageFoodClassification(filename)
scoreDict = analyzeAndGrade(foodList)
for food in foodList:
	imageurl = getImageURL(food)
	try:
		print(add_item(food, [], [], ["23424", "34234"], imageurl, scoreDict[food]*5))
	except:
		print(add_item(food, [], [], ["23424", "34234"], imageurl, 3))





