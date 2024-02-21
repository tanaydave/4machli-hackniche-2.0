import pandas as pd
import math,random


promotions = []
sales_data = pd.read_csv('server\dataset\ettara_sales.csv')
sales_data['date'] = pd.to_datetime(sales_data['Date'])

def get_daily_data():
    daily_sales = sales_data.groupby(sales_data['date'].dt.date).size().reset_index(name='transactions')
    final = sales_data.groupby(sales_data['date'].dt.date)['Final Total'].sum().reset_index(name='final_total').sort_values('final_total')

    daily = daily_sales.sort_values('transactions')  
    daily_sales['date'] = pd.to_datetime(daily_sales['date'])
    merge = pd.merge(final,daily,on='date', how='left')
    return merge.sort_values('date') 

def get_weekly_data():
    daily_sales = sales_data.groupby(sales_data['date'].dt.date).size().reset_index(name='transactions')
    daily_sales['date'] = pd.to_datetime(daily_sales['date'])
    final = sales_data.groupby(sales_data['date'].dt.date)['Final Total'].sum().reset_index(name='final_total').sort_values('final_total')
    weekend_sales = daily_sales[(daily_sales['date'].dt.dayofweek == 5) | (daily_sales['date'].dt.dayofweek == 6)]
    weekend_sales = weekend_sales.sort_values('transactions')
    final['date'] = pd.to_datetime(final['date'])
    merged_data = pd.merge(weekend_sales, final, on='date', how='left').sort_values('final_total',ascending=False)
    
    return merged_data.sort_values('date') 

def get_hourly_sales():
    sales_data = pd.read_csv('server\dataset\ettara_sales.csv')
    sales_data = sales_data[0:6075]
    sales_data['Timestamp'] = pd.to_datetime(sales_data['Timestamp'])
    sales_data['Timestamp'] = sales_data['Timestamp'].dt.hour
    dataf = pd.DataFrame({})
    for i in range(23):
        dataf.loc[i, 'Hour'] = i
        sales_hour = sales_data[sales_data['Timestamp'] == i]
        sales_hour = sales_hour[['Timestamp','Final Total']]
        sales_sum = sales_hour['Final Total'].sum() / 31
        dataf.loc[i, 'total'] = sales_sum
    return list(dataf['total'])

def get_weekly_sum():
    weekly = get_weekly_data()
    values = list(weekly['final_total'])
    trans = list(weekly['transactions'])
    weekends = {}
    transactions = {}
    j=0
    for i in range(0,len(values),2):
        weekends[j+1] = math.floor(values[i] + values[i+1])
        transactions[j+1] = (trans[i] + trans[i+1])
        j+=1
    return {'weekends':weekends,'transactions':transactions}

def get_promotions():
    promotions = []
    weekly = get_weekly_data()
    dates = list(weekly['date'].dt.strftime('%Y-%m-%d'))
    
    products1 = sales_data[sales_data['Status'] == "Success"]
    products1['Date'] = pd.to_datetime(products1['Date'])
    products1['Date'] = products1['Date'].dt.strftime('%Y-%m-%d')
    products = products1['Item Name'].value_counts().sort_values()
    least_products = products.head(5).index.tolist()  # Index values of the first 5 products
    most_products = products.tail(5).index.tolist()   # Index values of the last 5 products

    
    for i in range(5):
        least = least_products[i]
        most = most_products[-i]
        filtered_least = sales_data[sales_data['Item Name'] == least]
        filtered_most = sales_data[sales_data['Item Name'] == most]
        price_low = filtered_least['Price'].mean()
        price_high = filtered_most['Price'].mean() 
        avg = (price_low + price_high)*0.9
        promotions.append(f"Combo {i+1}: {least} and {most} at a special price of {math.floor(avg)}")
    return promotions   








