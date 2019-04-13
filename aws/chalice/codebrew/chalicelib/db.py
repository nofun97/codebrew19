from uuid import uuid4
from boto3.dynamodb.conditions import Key

class FoodDB():
    def __init__(self, table_resource):
        self._table = table_resource

    def list_all_items(self):
        response = self._table.scan()
        return response['Items']

    def list_items(self, foodID):
        response = self._table.query(
            KeyConditionExpression=Key('foodID').eq(foodID)
        )
        return response['Items']

    def add_item(self, foodName, diets, category,
                restaurantIDs, pictureURL, rating=5):
        uid = str(uuid4())
        self._table.put_item(
            Item={
                'foodID': uid,
                'foodName': foodName,
                'category': category,
                'diets': diets,
                'restaurantIDs': restaurantIDs,
                'pictureURL': pictureURL,
                'rating': rating
            }
        )
        return uid

    def get_item(self, foodID):
        response = self._table.get_item(
            Key={
                'foodID': foodID
            },
        )
        return response['Item']

    def delete_item(self, uid, foodID):
        self._table.delete_item(
            Key={
                'foodID': foodID
            }
        )

    # def update_item(self, uid, description=None, state=None,
    #                 metadata=None, username=DEFAULT_USERNAME, 
    #                 duration=None, deadline=None):
    #     # We could also use update_item() with an UpdateExpression.
    #     item = self.get_item(uid, username)
    #     if description is not None:
    #         item['description'] = description
    #     if state is not None:
    #         item['state'] = state
    #     if metadata is not None:
    #         item['metadata'] = metadata
    #     if duration is not None:
    #         item['duration'] = duration
    #     if deadline is not None:
    #         item['deadline'] = deadline
    #     self._table.put_item(Item=item)

    
class RestaurantDB():
    def __init__(self, table_resource):
        self._table = table_resource

    def list_all_items(self):
        response = self._table.scan()
        return response['Items']

    def list_items(self, restaurantID):
        response = self._table.query(
            KeyConditionExpression=Key('foodID').eq(restaurantID)
        )
        return response['Items']

    def add_item(self, restaurantName, cuisine, 
                address, latitude, longitude, foodIDs, pictureURL):
        uid = str(uuid4())
        self._table.put_item(
            Item={
                'restaurantID': uid,
                'restaurantName': restaurantName,
                'cuisine': cuisine,
                'address': address,
                "lat": latitude,
                "longitude": longitude,
                "foodIDs": foodIDs,
                'pictureURL': pictureURL
            }
        )
        return uid

    def get_item(self, restaurantID):
        response = self._table.get_item(
            Key={
                'restaurantID': restaurantID
            },
        )
        return response['Item']

    def delete_item(self, uid, restaurantID):
        self._table.delete_item(
            Key={
                'restaurantID': restaurantID
            }
        )

    # def update_item(self, uid, description=None, state=None,
    #                 metadata=None, username=DEFAULT_USERNAME, 
    #                 duration=None, deadline=None):
    #     # We could also use update_item() with an UpdateExpression.
    #     item = self.get_item(uid, username)
    #     if description is not None:
    #         item['description'] = description
    #     if state is not None:
    #         item['state'] = state
    #     if metadata is not None:
    #         item['metadata'] = metadata
    #     if duration is not None:
    #         item['duration'] = duration
    #     if deadline is not None:
    #         item['deadline'] = deadline
    #     self._table.put_item(Item=item)

    
