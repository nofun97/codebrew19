from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk import tokenize


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

    return "Good" if scores/len(sentences) > 0 else "Bad"


if __name__ == "__main__":
    paragraph = '''
    Busy cafe, definitely not the best spot to have super private chats. Luckily we went for the food and were not disappointed. Friendly staff made us feel very welcome, famous ice choc topped with ice cream was divine. Flavors of the dishes were really well rounded. Still thinking about them as i fall asleep.
    '''
    print(classify(paragraph))
