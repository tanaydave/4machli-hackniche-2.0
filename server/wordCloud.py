import pandas as pd
import re
from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt

df1 = pd.read_csv("/content/ettara_sales.csv")

def extract_words(tag):
    tag = re.sub('[^a-zA-Z]+', ' ', tag)
    words = tag.lower().split()
    return words

def generate_wordcloud(category):
    category_df = df1[df1['Category'] == category]
    tags = category_df['Item Name'].apply(extract_words).sum()
    tag_count = pd.Series(tags).value_counts()
    top_tags = tag_count.head(80)

    wordcloud = WordCloud(width=1200, height=800, stopwords=set(STOPWORDS)).generate(' '.join(top_tags.index))

    plt.figure(figsize=(12,8))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.show()