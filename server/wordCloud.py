import pandas as pd
import re
from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt

def generate_wordcloud(category):
    # filter the dataframe for the given category
    category_df = df1[df1['category_id'] == category]
    
    # calculate likes to view ratio for each tag
    category_df['likes_to_views_ratio'] = category_df['likes'] / category_df['view_count']
    
    # define a function to extract words from each tag
    def extract_words(tag):
        # remove special characters and digits
        tag = re.sub('[^a-zA-Z]+', ' ', tag)
        # convert to lowercase and split into words
        words = tag.lower().split()
        return words

    # apply the extract_words function to the 'tags' column and concatenate the resulting lists
    tags = category_df['tags'].apply(extract_words).sum()
    
    # group the tags by their average ratio
    tag_ratio = category_df.groupby('tags')['likes_to_views_ratio'].mean().reset_index()

    # sort the tags based on their ratio in descending order
    sorted_tags = tag_ratio.sort_values(by='likes_to_views_ratio', ascending=False)

    # take top 50 tags based on their ratio
    top_tags = sorted_tags.head(50)

    # generate word cloud
    wordcloud = WordCloud(width=1200, height=800, stopwords=set(STOPWORDS)).generate(' '.join(top_tags['tags']))

    # plot the word cloud
    plt.figure(figsize=(12,8))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.show()

# prompt the user to enter