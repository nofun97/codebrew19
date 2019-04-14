def getMenuURL(id):
    url = "https://developers.zomato.com/api/v2.1/restaurant"
    params = {"res_id": int(id)}
    payload = {'user-key': '90e1d58c5d2f8ef84871829aa81cbfe6'}
    # headers = {'content-type': 'application/json'}
    r = requests.get(url, params=params, headers=payload)
    r = r.json()
    return r["menu_url"]
