import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import math,random
import salesAnalysis,reviewAnalysis , marketBasket , paymentAnalysis, AiRecommender, whatsapp
app = Flask(__name__)
CORS(app)


def format_date_without_time(date):
    return date.strftime('%Y-%m-%d')  # Format as 'YYYY-MM-DD'

@app.route('/promotions', methods=['GET'])
def promotions():
    try:
        return salesAnalysis.get_promotions()

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/daily', methods=['GET'])
def daily():
    try:
        data = salesAnalysis.get_daily_data()
        data['date'] = data['date'].apply(format_date_without_time)
        return data.to_json(orient='records')

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/weekly', methods=['GET'])
def weekly():
    try:
        data = salesAnalysis.get_weekly_sum()
        return data     

    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/payment', methods=['GET'])
def payment():
    try:
        data = paymentAnalysis.get_payment_analysis()
        return data     

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/reviews', methods=['GET'])
def reviews():
    try:
        sentiment_value,filtered_words = reviewAnalysis.get_review_analysis()
        return {'sentiment_value': sentiment_value ,'filtered_words':filtered_words}

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/patterns', methods=['GET'])
def patterns():
    try:
        table = marketBasket.get_patterns()
        print(table)
        return table.to_json(orient='records')

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/airecommend', methods=['GET'])
def airecommend():
    try:
        return AiRecommender.ai_prod()

    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/whatsapp', methods=['POST'])
def whatsapp():
    try:
        data = request.json
        text = data.get('text') 
        return whatsapp.send_msg(text)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
