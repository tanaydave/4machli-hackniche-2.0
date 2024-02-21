import pandas as pd

df = pd.read_csv('server\dataset\ettara_sales.csv')

def ai_prod():
    products = df.groupby(df['Item Name']).size().sort_values(ascending = False)
    prods = products.head(5).tolist()
    names = products.head(5).index.tolist()
    return {'names':names,'prods':prods}
