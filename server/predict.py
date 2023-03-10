from underthesea import word_tokenize
import numpy as np
import tflearn
import random
import json
import pickle

data = pickle.load(open("models_save/training_data", "rb"))
words = data['words']
classes = data['classes']
train_x = data['train_x']
train_y = data['train_y']

with open("data/intents.json", encoding="utf8") as json_data:
    intents = json.load(json_data)

net = tflearn.input_data(shape=[None, len(train_x[0])])
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, len(train_y[0]), activation='softmax')
net = tflearn.regression(net)

model = tflearn.DNN(net, tensorboard_dir='tflearn_logs')


def bow(sentence, word):
    sentence_words = word_tokenize(sentence)
    sentence_words = [word.lower() for word in sentence_words]
    bag = [0] * len(word)
    for s in sentence_words:
        for i, w in enumerate(word):
            if w == s:
                bag[i] = 1

    return np.array(bag)


context = {}

ERROR_THRESHOLD = 0.25

model.load('models_save/model.tflearn')


def classify_ai(sentence):
    results = model.predict([bow(sentence, words)])[0]
    results = [[i, r] for i, r in enumerate(results)
               if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append((classes[r[0]], r[1]))
    return return_list


def response(sentence):
    results = classify_ai(sentence)
    if results:
        while results:
            for i in intents['intents']:
                if i['tag'] == results[0][0]:
                    return random.choice(i['responses'])

            results.pop(0)
