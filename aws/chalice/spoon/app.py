from chalice import Chalice
from chalicelib import db
import boto3
import os
import logging

_DB = None
_DUMMY = False

app = Chalice(app_name='spoon')
logger = logging.getLogger()
logger.setLevel(logging.INFO)


def dummy():
    """
    Dummy function to force chalice to autogen a policy with all the permissions required.

    Uncomment the ones you really need
    Some S3 function help is here: https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html
    """
    s3 = boto3.client('s3')
    s3.download_file()
    s3.get_bucket_region()
    s3.get_bucket_location()
    s3.get_object()
    s3.head_bucket()
    s3.head_object()
    s3.list_objects_v2()
    s3.list_buckets()
    s3.put_object()
    s3.delete_object()
    db = boto3.resource('dynamodb')
    db.list_items()
    db.Table()
    db.scan()
    db.query()
    db.put_item()
    db.get_item()
    db.delete_item()

def get_food_db():
    global _DB
    if _DB is None:
        _DB = db.FoodDB(
            boto3.resource('dynamodb').Table(
                os.environ['FOOD_TABLE_NAME'])
            )
    return _DB

# def get_restaurant_db():
#     global _DB
#     if _DB is None:
#         _DB = db.RestaurantDB(
#             boto3.resource('dynamodb').Table(
#                 os.environ['RESTAURANT_TABLE_NAME'])
#             )
#     return _DB


@app.route('/')
def index():
	if _DUMMY:
		dummy()
	return {
		"message": "Welcome to Yeeter's API"
	}

@app.route('/food', methods=['GET'])
def list_food():
    string = "RUNNING"
    loggin.info(string)
    return get_food_db().list_all_items()

@app.route('/food', methods=['POST'])
def add_new_food():
    body = app.current_request.json_body
    return get_food_db().add_item(
        foodName=body['foodName'],
        category=body['category'],
        diets=body['diets'],
        restaurantIDs = body['restaurantIDs'],
        pictureURL = body['pictureURL'],
        rating=body.get('rating'),
    )

# @app.route('/restaurant', methods=['GET'])
# def list_food():
# 	return get_restaurant_db().list_all_items()

# @app.route('/restaurant', methods=['POST'])
# def add_new_restaurant():
#     body = app.current_request.json_body
#     return get_restaurant_db().add_item(
#             restaurantName= body['restaurantName'],
#             cuisine= body['cuisine'],
#             address= body['address'],
#             latitude= body["lat"],
#             longitude= body["long"],
#             foodIDs= body["foodIDs"],
#             pictureURL= body["pictureURL"]       
#     )
