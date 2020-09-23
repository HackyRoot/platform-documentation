---
id: app.prediction
title: app.prediction
sidebar_label: app.prediction
---

## Arrays

global_entities - This array contains global entity objects

```
global_entities: [
      {
        text: "Tomorrow",
        label: "DATE"
      }
]
```

## Objects

**intents** - object contains all the predicted intents (matched intents)

```
"intents": {
      weather-report: 0.3,
      trigger1: 0.111,
      trigger2: 0.123,
      get-function-data: 0.381
}
```

**parser** - This object contains parsed data i.e. noun_chunks, lemmas, sentence, tokens, entities, other_keywords, parsed_tree, lemma_list, 

> I want to book movie tickets for tomorrow : parser objects

**entities** - This object contains entities trained for matching and global entities like date, city, etc.

```
entities: {
      date: [
        {
          text: "tomorrow",
          value: {
            grain: "day",
            value: "2020-01-30T00:00:00.000Z",
            others: [
              {
                grain: "day",
                value: "2020-01-30T00:00:00.000Z"
              }
            ]
          }
        }
      ]
}
```

**global_model** - This object contains confidence and intent values

```
global_model: {
      confidence: 0.5346315503120422,
      intent: "what"
}
```


## Properties

core | boolean - Has the boolean value 

> "core" : false

language_defected | string - Has the value of detected langauge code

> "language_detected": "en"

sentiment | string - Has the sentiment value of entered text i.e. positive, negative and neutral.

> "sentiment": "neutral"

text | string - Has the value of exact text entereed by the user

> "text": "i want to book movie tickets for tomorrow"

confidence | int - Has the max value of confidence among matched intents 

> "confidence": 0.381

synonym_detected | boolean - Has the boolean value about synonyms detected or not

> "synonym_detected": false

intent | string - Has the slug name of highest confidence intent matched

> "intent": "get-function-data"
