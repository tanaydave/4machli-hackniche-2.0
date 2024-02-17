import pandas as pd
import numpy as np
import seaborn as sns
import datetime
import matplotlib.pyplot as plt
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules

def encode_units(x):
    if x <= 0:
        return 0
    if x >= 1:
        return 1
    
    
def get_patterns():       
    df = pd.read_csv('server\dataset\ettara.csv')
    x = df['Item Name'] == "NONE"
    hot_encoded_df = df.groupby(['Invoice No.', 'Item Name'])['Item Name'].count().unstack().fillna(0)
    hot_encoded_df = hot_encoded_df.applymap(encode_units)

    frequent_itemsets = apriori(hot_encoded_df, min_support = 0.01, use_colnames = True)
    rules = association_rules(frequent_itemsets, metric = "lift", min_threshold = 1)
    rules.sort_values('confidence', ascending = False, inplace = True)
    return rules[['antecedents','consequents','support','confidence','lift']]

