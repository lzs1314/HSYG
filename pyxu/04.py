import requests
import json



while  True:
    sentence = input("请输入要翻译的：")
    if sentence[0].encode('utf-8').isalpha():
        # 分别赋值的意思
        from_, to_ = 'en', 'zh'
    else:
        from_, to_ = 'zh', 'en'
    post_url = "http://fanyi.baidu.com/basetrans"
    headers = {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"}
    tdata = {
        "query":sentence,
        "from": from_,
        "to": to_
    }

    r = requests.post(post_url, headers=headers, data=tdata)
    json_str = r.content.decode()
    dict = json.loads(json_str)
    res = dict["trans"][0]["dst"]
    print("输入的翻译是:>>>   {}".format(res))