from twilio.rest import Client

account_sid = 'AC4dcd1edf88629c2134c676d2f3248722'
auth_token = 'f17d398bc0c4dab83af82c4dd3e0619c'
client = Client(account_sid, auth_token)

message = client.messages.create(
  from_='whatsapp:+14155238886',
  body='dvbhasgdhvcsaij',
  to='whatsapp:+917977006350'
)

print(message.sid)

