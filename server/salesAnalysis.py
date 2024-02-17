import pandas as pd
import math,random


def get_promotions():
    promotions = []
    sales_data = pd.read_csv('server\dataset\sales.csv')
    sales_data['timestamp'] = pd.to_datetime(sales_data['Timestamp'])
    daily_sales = sales_data.groupby(sales_data['timestamp'].dt.date).size().reset_index(name='transactions')
    daily_sales['timestamp'] = pd.to_datetime(daily_sales['timestamp'])
    weekend_sales = daily_sales[(daily_sales['timestamp'].dt.dayofweek == 5) | (daily_sales['timestamp'].dt.dayofweek == 6)]
    weekend_sales = weekend_sales.sort_values('transactions')
    weekend_sales['time'] = weekend_sales['timestamp'].dt.strftime('%d-%m-%Y')
    weekend_sales['time'] = weekend_sales['time'].astype(str)
    dates = list(weekend_sales['time'])
    products1 = sales_data[sales_data['Status'] == "Success"]
    products1 = products1[products1['Date'].isin(dates)]
    products = products1['Item Name'].value_counts().tail(15)
    for product, count in products.items():
        dis = random.randint(2,5)*5
        promotions.append(f"Promotion: {dis}% off on {product} during weekends")
    return promotions
