from sklearn import linear_model
import matplotlib.pyplot as plt
import pandas as pd

data = pd.read_csv('server/dataset/ettara_sales.csv')
plt.xlabel("Date")
plt.ylabel("Price")
plt.scatter(data.area, data.price)
plt.plot(data.area, reg.predict(data[['area']]), color = 'red')

reg = linear_model.LinearRegression()
reg.fit(data[["area"]],data.price)

# reg.predict([[3300]])

pred = pd.read_csv("areas.csv")
p = reg.predict(pred)
pred['price'] = p
pred.to_csv("prediction_result")