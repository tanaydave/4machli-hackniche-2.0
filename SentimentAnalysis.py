import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from collections import Counter
import string
from ast import Continue
import requests
from bs4 import BeautifulSoup

ettara_sentiment_value = {'positive': 0, 'negative': 0, 'neutral': 0}
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

# Create an EdgeDriver instance
driver = webdriver.Edge()
review_class = "sc-1hez2tp-0"  # Use only one class name
review_array=[]

for page in range(5):
    pg_num = page + 1
    # Open a website
    driver.get(f"https://www.zomato.com/mumbai/melting-pot-juhu/reviews?page={pg_num}&sort=dd&filter=reviews-dd")

    # Function to get and print reviews
    def get_reviews():
        reviews = driver.find_elements(By.CLASS_NAME, review_class)
        
        for review in reviews:
            review_array.append(review.text)

    get_reviews()

    try:
        next_page_element = WebDriverWait(driver, 50).until(
            EC.presence_of_element_located((By.XPATH, f'//a[contains(@href, "page={pg_num + 1}")]'))
            
        )
        next_page_element.click()
    except NoSuchElementException:
        break
    
driver.quit()
reviews = [review for review in review_array if review]
final_reviews = []
for i in range(len(reviews)):
    if 'Votes' in reviews[i]:
        final_reviews.append(reviews[i-1])
   
    

def analyze_sentiment(review_text):
    sia = SentimentIntensityAnalyzer()
    sentiment_score = sia.polarity_scores(review_text)
    return sentiment_score


def extract_keywords(review_text):
    tokens = word_tokenize(review_text.lower())
    
    # Filter out stopwords and punctuation
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words and word not in string.punctuation]
    
    keywords = Counter(tokens).most_common(4)
    return [keyword[0] for keyword in keywords]



def get_review_analysis():
    for review in final_reviews:
        sentiment_score = analyze_sentiment(review)
        if sentiment_score['compound'] >= 0.05:
            sentiment = 'Positive'
            ettara_sentiment_value['positive'] += 1
        elif sentiment_score['compound'] <= -0.05:
            sentiment = 'Negative'
            ettara_sentiment_value['negative'] += 1
        else:
            sentiment = 'Neutral'
            ettara_sentiment_value['neutral'] += 1
    print(ettara_sentiment_value)


get_review_analysis()