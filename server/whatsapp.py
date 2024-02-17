from twilio.rest import Client
import random
account_sid = 'AC4dcd1edf88629c2134c676d2f3248722'
auth_token = '7af4f6b9f99b64f0834b242dd67cf723'
client = Client(account_sid, auth_token)



text = "Hello! Greetings from Ettara Coffee! Happy Hours from 12pm to 3pm on Mondays and Wednesdays :)"
numbers = ['whatsapp:+917666471119','whatsapp:+918104765729','whatsapp:+917678071024','whatsapp:+917977006350']

def send_msg(text):
    for number in numbers:
        lp= random.randint(1,1000)*5
        message = client.messages.create(
        from_='whatsapp:+14155238886',
        body= f'{text} Your loyalty points are {lp}',
        to=number
        )

