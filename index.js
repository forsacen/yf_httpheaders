const fs=require('fs')
//agents.txt中的数据来自https://techblog.willshouse.com/2012/01/03/most-common-user-agents/
let txt=fs.readFileSync(__dirname+'/agents.txt').toString()
let agents=txt.split('\n')

function httpHeaders(){}

httpHeaders.prototype.getOne=function(){
    return {
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'User-Agent':agents[Math.floor(Math.random()*agents.length)],
        'Connection':'keep-alive',
        'CacheControl':'no-cache',
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'Accept-Encoding':'gzip, deflate, br'
    }
}

module.exports=new httpHeaders()