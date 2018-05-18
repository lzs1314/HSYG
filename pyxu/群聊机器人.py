import itchat,time,re,requests
from threading  import Timer
from itchat.content import *

def get_tl_res(msg):
    url = "http://www.tuling123.com/openapi/api"
    data = {
        "key": "*************",# 自己注册图灵，获取key
        "info": msg,
        "userid": "pth-robot"
    }
    res = requests.post(url, data=data).json()
    return res.get("text")
@itchat.msg_register([TEXT])
def text_reply(msg):
    for i in range(2):
        res = get_tl_res(msg["Text"])
        itchat.send((res), msg["FromUserName"])

@itchat.msg_register([PICTURE,RECORDING,VIDEO,SHARING])
def other_reply(msg):
    for i in range(3):
        itchat.send(("重要的事情说三遍，欢迎邀请好友进群跟本小仙女聊天，么么哒"),msg["FromUserName"])

@itchat.msg_register([TEXT],isGroupChat=True)
def text_reply(msg):
    for i in range(2):
        try:
            if msg['isAt']:
                res = get_tl_res(msg["Text"])
                itchat.send((res), msg["FromUserName"])
        except:
            res = get_tl_res(msg["Text"])
            itchat.send((res), msg["FromUserName"])
# # 收到好友邀请自动添加好友
# @itchat.msg_register(FRIENDS)
# def add_friend(msg):
#     itchat.add_friend(**msg['Text']) # 该操作会自动将新好友的消息录入，不需要重载通讯录
#     itchat.send_msg('欢迎大佬!', msg['RecommendInfo']['UserName'])
itchat.login()

# itchat.auto_login(hotReload=True)
# match3 = re.search("资料", msg["Text"]).span()
# 对于群聊信息，定义获取想要针对某个群进行机器人回复的群ID函数
# def group_id(name):
#     df = itchat.search_chatrooms(name=name)
#     print(df)
#     return df[0]['UserName']

# name = "Python技术交流②群"
# res = group_id(name)
# print("第一个群",res)
# if msg['ToUserName'] == item:
#     itchat.send(u'%s' % tuling(msg['Text']), item)

itchat.run()