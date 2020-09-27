from flask import Flask, request, json
import random
from pymongo import MongoClient
import requests, json
import os
# from flask_pymongo import PyMongo




app = Flask(__name__, static_folder='static')


client = MongoClient('127.0.0.1',27017)
db = client.paymenttest

@app.route('/', methods = ['GET'])
def index():
    return app.send_static_file('index.html')


@app.route('/test', methods = ['GET', 'POST'])
def testtest():
    print('들어온다')
    return 'hello brotehr'

@app.route('/product', methods = ['GET'])
def getproductinfo():
    r_number = random.randrange(1,100000)
    price = random.randrange(10, 100)
    db.product.insert_one({
        'merchant_uid': 'test_test'+ str(r_number),
        'price': price
    })
    print(r_number)
    return {
        'merchant_uid': 'test_test'+str(r_number),
        'product_name': '노르웨이 회전의자', 
        'price': price

    }


@app.route('/webhook/test', methods = ['GET', 'POST'])
def webhook():
    print('hello')
    print(request.remote_addr)
    return {'hi': 'brother'}


@app.route('/payment/success', methods = ['POST'])
def paymentsuccess():
    print('성공 들어왔다')
    print(request.form)
    print(request.form.to_dict())
    
    
    
    # 시간에 따라서 로직 변경이 필요합니다.. 매번 굳이 받아올 필요는 없잖아요??
    body = {
            'imp_key': '9796388217438514',
            'imp_secret': 'UEWMr9fmU91fYSw6CYuuwEWoQXTvoaljPi5hrkDltFBsy8za63FDHB1yzV3Y6ohVHnd8HRubx6E5edfl'
        }
    get_token = requests.post(
        'https://api.iamport.kr/users/getToken',
        data = json.dumps(body),
        headers = {'Content-Type': 'application/json'}
    )
    print(get_token.encoding)
    print(get_token.status_code)
    print(get_token.json())
    print(get_token.json()['response'])
    print(get_token.json()['response']['access_token'])

    # url = 

    pay_auth = requests.get(
        f"https://api.iamport.kr/payments/{request.form['imp_uid']}",
        headers={'Authorization': f"Bearer {get_token.json()['response']['access_token']}",
        'Content-Type': 'application/json'}
    )


    find_price = db.product.find_one({'merchant_uid': request.form['merchant_uid']})
    print(find_price['price'])


    print(pay_auth.status_code)
    print(pay_auth.json())
    # print(pay_auth.response)
    if find_price['price'] == pay_auth.json()['response']['amount']:
        db.payment_history.insert_one({
            'uuid': 'user_id',
            'status': 'success',
            'imp_uid': request.form['imp_uid'],
            'merchant_uid': request.form['merchant_uid'],
            'paid_amount': request.form['paid_amount']
        })
        return 'success you bitch'
    else:
        db.payment_history.insert_one({
            'uuid': 'user_id',
            'status': 'failed',
            'imp_uid': request.form['imp_uid'],
            'merchant_uid': request.form['merchant_uid'],
            'paid_amount': request.form['paid_amount']
        })
        return 'something went wrong bitch'

    

    
    # db.payment_history.insert_one({
    #     ''
    # })
    return 'sucess you bitch'

@app.route('/payment/failure', methods = ['POST'])
def paymentfailure():
    print('실패 들어왔다')
    return 'fuck you bitch'


if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 9000, debug = True)