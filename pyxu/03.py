import requests
import json



while True:
    shu = input("请输入")

    post_url = "http://fanyi.baidu.com/basetrans"
    headers = {"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"}
    tdata = {
        "query":shu,
        "from": "zh",
        "to": "en"
        }

    r = requests.post(post_url,headers=headers,data=tdata)


    json_str = r.content.decode()
    dict = json.loads(json_str)
    ress = dict["trans"][0]["dst"]
    print("输入的翻译是{}".format(ress))