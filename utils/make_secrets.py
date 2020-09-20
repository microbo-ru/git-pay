import click
import hashlib
import base64
from datetime import datetime,timezone
import requests
import json
from urllib.parse import urlencode

@click.command()
def make_signature_v2():
    phoneNumber = "+79818925700"
    platformBeneficiaryId = "microbo2"
    platformId = "microbo"
    returnUrl = "http://microbo.ru/w1"

    # now_utc = datetime.now(timezone.utc).strftime('%Y-%m-%d-%H:%M:%S')
    now_utc = "2020-09-19T14:19:27"
    key = "TZvds4HWduo6unK9emOFzIuRHXMueUXUREk15tSDdJ2yY0x7TJuDUD"

    s = phoneNumber + platformBeneficiaryId + platformId + returnUrl + now_utc + key
    signature =  base64.b64encode(hashlib.sha256(s.encode('utf-8')).digest())
    print(signature)

@click.command()
def make_signature_v3():
    url = "https://api.dev.walletone.com/p2p/api/v3/deals"

    payload = {
        "PlatformDealId":111,
        "PlatformPayerId":"8659",
        "PayerPhoneNumber":"+79818925700",
        "PayerPaymentToolId":1,
        "PlatformBeneficiaryId":"8660",
        "BeneficiaryPaymentToolId":1,
        "Amount":10.00,
        "CurrencyId":643,
        "ShortDescription":"Test pay",
        "FullDescription":"Test pay",
        "DeferPayout": True
    }

    payload1 = json.dumps(payload)
    # print(payload1)
    # exit()

    now_utc = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%S')

    key = "TZvds4HWduo6unK9emOFzIuRHXMueUXUREk15tSDdJ2yY0x7TJuDUD"

    s = url + now_utc + payload1 + key
    signature =  base64.b64encode(hashlib.sha256(s.encode('utf-8')).digest())
    # print(signature)

    headers = {
        'Content-Type': 'application/json',
        'X-Wallet-PlatformId': 'microbo',
        'X-Wallet-Signature': signature,
        'X-Wallet-Timestamp': now_utc
    }
    print(headers)
    # exit()

    # Signature = Base64(SignatureMethod(UTF8(URL + Timestamp + RequestBody + SignatureKey)));
    r = requests.post(url, data=payload1, headers=headers)
    print(r.content)
    print(r.status_code, r.reason)


if __name__ == '__main__':
    # make_signature_v2()
    make_signature_v3()
