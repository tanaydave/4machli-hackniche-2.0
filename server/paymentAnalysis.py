import pandas as pd

df = pd.read_csv('server\dataset\Ettara_payment.csv')

df = df[['Payment Type', 'Final Total']][0:6075]

def get_payment_analysis():
    total_card = len(df[df['Payment Type'] == 'CARD'])
    sum_card = df[df['Payment Type'] == 'CARD']['Final Total'].sum()


    total_cash = int(len(df[df['Payment Type'] == 'Cash']))
    sum_cash = df[df['Payment Type'] == 'Cash']['Final Total'].sum()
    cost_card = df[df['Payment Type'] == 'CARD']['Final Total'].sum()*0.02
    total_online = int(len(df[df['Payment Type'] == 'Online']))
    sum_online = df[df['Payment Type'] == 'Online']['Final Total'].sum()

    total_partpayment = int(len(df[df['Payment Type'] == 'Part Payment']))
    sum_partpayment = df[df['Payment Type'] == 'Part Payment']['Final Total'].sum()

    total_transactions= total_card + total_cash + total_online + total_partpayment
    sum_total = sum_card + sum_cash + sum_online + sum_partpayment
    
    data = {
        'card_t':total_card,
        'card_amount' : sum_card.round(2),
        'cash_t':total_cash,
        'cash_amount':sum_cash.round(2),
        'online_t':total_online,
        'online_amount' : sum_online.round(2),
        'part payment t':total_partpayment,
        'part payment amount':sum_partpayment.round(2),
        'total_transactions' : total_transactions,
        'sum_total' : sum_total.round(2),
        'amount_charged_on_card' : cost_card.round(2)
    }
    return data