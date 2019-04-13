import requests
import json
import time
import os
import boto3
import botocore

from . import db

#### This deals with the Menu (where we get the food and dishes) ####
from PIL import Image
import requests
from io import BytesIO

# menuURL = "https://www.zomato.com/melbourne/chin-chin-flinders-lane-cbd-melbourne/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop"
url = "https://b.zmtcdn.com/data/pictures/2/16577492/8fc90c4709e0b4ea37afce2a36d18040.jpg"

response = requests.get(url)
img = Image.open(BytesIO(response.content))
# img.show()

def getZomatoAPI(bucket, file):
	s3 = boto3.resource('s3')
	obj = s3.Object(bucket, file)
	return json.loads(obj.get()['Body'].read().decode('utf-8'))['zomato']


def zomatoDataParser(apiKey):
	COUNT = 20
	LAT = -37.8136
	LONG = 144.9631

	start = 0
	for _ in range(875):
		URL = "https://developers.zomato.com/api/v2.1/search"
		parameters = {"start": start, "count": COUNT, "lat": LAT, "lon": LONG}
		response = requests.get(url=URL, params=parameters, headers={"user-key": apiKey})
		data = json.loads(response.text)
		for restaurantInfo in data["restaurants"]:
			r = restaurantInfo["restaurant"]
			add_item(zomatoID=r["id"], restaurantName=r["name"], cuisines=r["cuisines"].split(','), 
					address=r["location"]["address"], latitude=r["location"]["latitude"], 
					longitude=r["location"]['longitude'], foodIDs=[], pictureURL=r['featured_image'], 
					priceRange=r["price_range"], userRating=r['user_rating']['aggregate_rating'], 
					userVotes=r['user_rating']['votes'], zomatoURL=r['url'])



if __name__ == '__main__':
	apiKey = getZomatoAPI("codebrew-credentials","api.json")
	zomatoDataParser(apiKey)
