import requests


post_url = "http://www.baidu.com/img/bd_logo1.png?where=super"
headers = {"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"}
r=requests.get(post_url)

f = open("baidu.png","wb")
f.write(r.content)
f.close()


