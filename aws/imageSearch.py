import requests

def getImageURL(q):
    url = "https://pixabay.com/api"
    param = {
        "key": "12187185-9ee0cf018e808880a9347897b",
        "q": q
    }
    r = requests.get(url, param)
    r = r.json()
    if r["totalHits"] > 0:
        return r["hits"][0]["webformatURL"]
    else:
        return "not found"

if __name__ == "__main__":
    print(getImageURL("pho"))