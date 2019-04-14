from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk import tokenize
import requests
import json

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

goodFrequency = {}
totalFoods = {}

# 90e1d58c5d2f8ef84871829aa81cbfe6 zomato api
# 18423923 humble rays
# 16573377 seven seeds
# 16582280 Shanghai Street
# 16572571 Vegie Bar
# 16713362 Serotonin Eatery
# 16572220 Richmond Oysters
# https://api.zomato.com/v1/reviews.json/RESTAURANT-ID/user?count=0&apikey=90e1d58c5d2f8ef84871829aa81cbfe6


def classify(paragraph):
    sentences = tokenize.sent_tokenize(paragraph)
    sid = SentimentIntensityAnalyzer()
    scores = 0
    for s in sentences:
        ss = sid.polarity_scores(s)
        # print(s)
        # for k in sorted(ss):
        #     print('{0}: {1}, '.format(k, ss[k]))
        scores += ss["compound"]
        # print()

    return scores/len(sentences)


def getReviews(id):
    url = "https://api.zomato.com/v1/reviews.json/" + id + "/user"
    parameters = {
        "count": 50,
        "apikey": "90e1d58c5d2f8ef84871829aa81cbfe6"
    }
    p = []
    resp = requests.get(url, params=parameters)
    resp = resp.json()
    # print(resp)
    for r in resp["userReviews"]:
        p.append(r['review']["reviewText"])
    return p


def reviewChecker(review, foods):
    good = classify(review) > 0

    # line = line.strip('\n')
    # result = list(re.split("[ (!@#-$%^+&*~`.,<>?/\"{})|\\:;]+", line))
    # result = list(map(str.lower, list(filter(lambda string: string.strip(), result))))
    for i in foods:
        if i in review:
            if i not in goodFrequency:
                goodFrequency[i] = 0

            if good:
                goodFrequency[i] += 1
            elif goodFrequency[i] > 0:
                goodFrequency[i] -= 1

            if i not in totalFoods:
                totalFoods[i] = 1
            else:
                totalFoods[i] += 1


def getMenuURL(id):
    url = "https://developers.zomato.com/api/v2.1/restaurant"
    params = {"res_id": int(id)}
    payload = {'user-key': '90e1d58c5d2f8ef84871829aa81cbfe6'}
    # headers = {'content-type': 'application/json'}
    r = requests.get(url, params=params, headers=payload)
    r = r.json()
    return r["menu_url"]


def calculateGrade():
    grades = {}
    for i in goodFrequency:
        grades[i] = float(goodFrequency[i])/totalFoods[i]
    return grades


if __name__ == "__main__":
    # f = open("/Users/novan/Desktop/CODE/codebrew19/aws/cleaned.csv", "r")
    # foods = f.readline().split(",")
    # f.close()

    # for id in ids.values():
    #     reviews = getReviews(id)
    #     for i in reviews:
    #         reviewChecker(i, foods)

    # grades = calculateGrade()
    # print(totalFoods)
    # print(goodFrequency)
    # for i in grades:
    #     print("Grade for {}: {}\n".format(i, grades[i]))
    print(getMenuURL("18423923"))
    # print(classify(paragraph))
