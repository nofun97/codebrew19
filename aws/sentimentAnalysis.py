from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk import tokenize
import requests

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
        print(s)
        for k in sorted(ss):
            print('{0}: {1}, '.format(k, ss[k]))
        scores += ss["compound"]
        print()

    return scores/len(sentences)

def getReviews(id):
    url = "https://api.zomato.com/v1/reviews.json/" + id + "/user"
    params = {
        "count": 50,
        "apikey": "90e1d58c5d2f8ef84871829aa81cbfe6"
    }
    p = []
    resp = requests.get(url, param).json()
    for r in resp["userReviews"]:
        p.append(r["reviewText"])
    return p

if __name__ == "__main__":

    print(classify(paragraph))
