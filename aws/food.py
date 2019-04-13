import numpy as np
import pandas as pd

# adds spaces on the left and right of the string
def addSpaces(string):
	return " " + string + " "


def wordCombine(words, dic):

	assert len(words) > 0

	# initialize
	foods = []
	i = 0
	while i < len(words):
		food = []
		food.append(words[i])
		try:
			wordList = dic[words[i]][0]
			i += 1
			j = 0
			while True:
				if i >= len(words) or j >= len(wordList):
					break
				if words[i] != wordList[j]:
					break
				food.append(words[i])
				i += 1
				j += 1
			foods.append(' '.join(food))
		except (KeyError, IndexError):
			foods.append(' '.join(food))
			i += 1
	return foods



	# while i < len(words):
	# 	food = []
	# 	food.append(words[i])
	# 	matched = df[df.str.contains(words[i])]
	# 	i += 1
	# 	while i < len(words):
	# 		matched = matched[matched.str.contains(addSpaces(words[i]).lower())]
	# 		if len(matched.index) != 0:
	# 			food.append(words[i])
	# 			i += 1
	# 		else:
	# 			foods.append(' '.join(food))
	# 			break
	# foods.append(' '.join(food))
	# return foods

if __name__ == '__main__':
	# words = ["spaghetti", "carbonara", "with", "parmesan", "included"]
	# words = ['scrambled', 'egg', 'sourdough', 'grain', 'toast']
	words = ['Granny', 'Smith', 'apple']
	wordCombine(words, dic)


