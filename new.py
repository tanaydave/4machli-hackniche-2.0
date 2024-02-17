import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from collections import Counter
import string
from ast import Continue
import requests
from bs4 import BeautifulSoup

costa_reviews=[]
words = {}
sentiment_value = {'positive': 0, 'negative': 0, 'neutral': 0}

url = "https://restaurant-guru.in/Costa-Coffee-Mumbai-28/reviews/google"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

response = requests.get(url, headers=headers)
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    reviews = soup.find_all('div',class_='overflow')  # Update the class accordingly
    print(reviews)
    # for review in reviews:
    #   try:
    #       division = review.find('div', class_='text')
    #       span= division.find('span')
    #       inner_span= span.find('span')
    #       costa_reviews.append(inner_span.text.strip())
    #       print(inner_span.text.strip())
          
    #   except:
    #     continue

    # print(division)
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")

# Function to perform sentiment analysis
def analyze_sentiment(review_text):
    sia = SentimentIntensityAnalyzer()
    sentiment_score = sia.polarity_scores(review_text)
    return sentiment_score

# Function to extract keywords
def extract_keywords(review_text):
    tokens = word_tokenize(review_text.lower())
    
    # Filter out stopwords and punctuation
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words and word not in string.punctuation]
    
    keywords = Counter(tokens).most_common(5)
    return [keyword[0] for keyword in keywords]

# Analyze each review
for review in costa_reviews:
    
    sentiment_score = analyze_sentiment(review)
    if sentiment_score['compound'] >= 0.05:
        sentiment = 'Positive'
        sentiment_value['positive'] += 1
    elif sentiment_score['compound'] <= -0.05:
        sentiment = 'Negative'
        sentiment_value['negative'] += 1
    else:
        sentiment = 'Neutral'
        sentiment_value['neutral'] += 1
    
    # Extract keywords
    keywords = extract_keywords(review)
    for x in keywords:
        if x not in words:
            words[x] = 1
        else : 
            words[x] += 1
            
    # Print review details with sentiment and keywords
    # print('Review Text:', review)
    # print('Keywords:', keywords)
    # print('---')


stop_words = set(stopwords.words('english'))
filtered_words = {word: count for word, count in words.items() if word not in stop_words and count > 1}
print(sentiment_value)
print(filtered_words)

