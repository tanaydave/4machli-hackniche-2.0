import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import math,random
import salesAnalysis,reviewAnalysis
app = Flask(__name__)
CORS(app)

@app.route('/promotions', methods=['GET'])
def promotions():
    try:
        return salesAnalysis.get_promotions()

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/reviews', methods=['GET'])
def reviews():
    try:
        sentiment_value,filtered_words = reviewAnalysis.get_review_analysis()
        return {'sentiment_value': sentiment_value ,'filtered_words':filtered_words}

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
