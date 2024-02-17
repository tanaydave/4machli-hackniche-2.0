import pandas as pd
import matplotlib.pyplot as plt

sales_data = pd.read_csv('sales.csv')
sales_data['timestamp'] = pd.to_datetime(sales_data['Timestamp'])
daily_sales = sales_data.groupby(sales_data['timestamp'].dt.date).size().reset_index(name='transactions')
daily_sales['timestamp'] = pd.to_datetime(daily_sales['timestamp'])

# Identify intervals with reduced activity (e.g., weekends)
weekend_sales = daily_sales[(daily_sales['timestamp'].dt.dayofweek == 5) | (daily_sales['timestamp'].dt.dayofweek == 6)]

# Communicate findings to management
print("Intervals with Reduced Activity (Weekends):")
print(weekend_sales)

# Peruse purchases data (Assuming you have purchases_data.csv)
purchases_data = pd.read_csv('sales.csv')
popular_products = purchases_data[purchases_data['Status'] == "Success"]
popular_products = popular_products1['Item Name'].value_counts().tail(10)
popular_products