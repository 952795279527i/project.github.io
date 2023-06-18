let mainContentList = [
    {
        title:'开发日记',
        display:'📒 记录每日开发过程中的一些碎片，持续更新',
        time:'🕣3个月前',
        label:['🖿日常开发','🔖dev','',''],
        year:'2021',
        date:'07-09',
    },
    {
        title:'RocketMQ分布式事务原理',
        display:`分布式事务常见的方案有TCC（Try-Confirm-Cancel），
        XA两阶段提交方案，可靠消息最终一致性方案，最大努力通知方案等等。
        其中可靠消息最终一致性方案主要就可以依靠RocketMQ来做，因为
        RocketMQ支持消息事务。先上一张图：Roc...`,
        time:'🕣 2 周前',
        label:['🔖JAVA','RocketMq','',''],
        year:'2019',
        date:'02-18'
    },
    {
        title:'RocketMQ消息丢失场景及解决办法',
        display:`既然在项目中使用了MQ，那么就不可避免的需要考虑消息丢失问题。`,
        time:'🕣 2 周前',
        label:['🔖JAVA','RocketMQ','Python',''],
        year:'2019',
        date:'04-23'
    },
    {
        title:'Mysql：用覆盖索引解决回表查询',
        display:`先要从 InnoDB 的索引实现说起，InnoDB 有两大类索引：<br>
        •聚集索引 (clustered index)<br>
        •普通索引 (secondary index)
        `,
        time:'🕣 2 周前',
        label:['🔖JAVA','Mysql','',''],
        year:'2020',
        date:'01-03'
    },
    {
        title:'Spring容器创建流程',
        display:`参考地址：https://blog.csdn.net/weixin_37607613/article/details/126217559 关注微信公众号，获取更多资源`,
        time:'🕣 3 周前',
        label:['🔖JAVA','Spring','',''],
        year:'2021',
        date:'10-28'
    },
    {
        title:'Java Spring Bean的生命周期',
        display:`Java Spring Bean的生命周期包括以下阶段： 实例化：当Spring容器接收到创建Bean的请求时，
        它会使用Java反射机制创建一个Bean实例。 属性赋值：在实例化Bean之后，Spring容器会将Bean的属性值注入到Bean实例中...`,
        time:'🕣 3 周前',
        label:['🔖JAVA','Spring','',''],
        year:'2022',
        date:'07-18'
    },
    {
        title:'自己感觉好用的工具列表',
        display:`🔧 一句老话，工欲善其事，必先利其器`,
        time:'🕣  1 个月前',
        label:['🔖工具','','',''],
        year:'2023',
        date:'05-14'
    },
    {
        title:'Docx文档如何实现的自动编号？',
        display:`📃 不得不佩服优秀软件的规范`,
        time:'🕣  2 个月前',
        label:['🖿SpringBoot','🔖SpringBoot','Freemarker','Docx'],
        year:'2023',
        date:'05-14'
    },
    {
        title:'ChatGPT太太太太太香了',
        display:`💡 我感觉以后再也不用某度了`,
        time:'🕣 2 个月前',
        label:['🔖ChatGPT','','',''],
        year:'2023',
        date:'04-20'
    },
    {
        title:'这年头，谁的好友列表还没有躺一个ChatGPT啊？',
        display:`🔥 你要是说这个，我可不困了`,
        time:'🕣 2 个月前',
        label:['🔖ChatGPT','','',''],
        year:'2023',
        date:'04-10'
    },
]

const daily = document.getElementById('daily')
const dev = document.getElementById('dev')
const rocketMq = document.getElementById('RocketMq')
const rocketMQ = document.getElementById('RocketMQ')
const mysql = document.getElementById('Mysql')
const spring = document.getElementById('Spring')
const tool = document.getElementById('tool')
const springBoot = document.getElementById('SpringBoot')
const freemarker = document.getElementById('Freemarker')
const docx = document.getElementById('Docx')
const chatGPT = document.getElementById('ChatGPT')
const python = document.getElementById('Python')
const java = document.getElementById('Java')
let main = document.getElementById('main')

function dailyfun(){
    let html = ''
    mainContentList = mainContentList.forEach((item,index) => {
        if(item.label.includes('🖿日常开发')){
            html += `
                <div class='list'>
                   <h1>🔖日常</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function devfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('🔖dev')){
            html += `
                <div class='list'>
                   <h1>🔖dev</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function rocketMqfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('RocketMq')){
            html += `
                <div class='list'>
                   <h1>🔖RocketMq</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function rocketMQfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('RocketMQ')){
            html += `
                <div class='list'>
                   <h1>🔖RocketMQ</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function mysqlfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('Mysql')){
            html += `
                <div class='list'>
                   <h1>🔖Mysql</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function springfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('Spring')){
            html += `
                <div class='list'>
                   <h1>🔖Spring</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}


function toolfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('🔖工具')){
            html += `
                <div class='list'>
                   <h1>🔖工具</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function springBootfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('🔖SpringBoot')){
            html += `
                <div class='list'>
                   <h1>🔖SpringBoot</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
        
    })
    main.innerHTML = html
}

function freemarkerfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('Freemarker')){
            html += `
                <div class='list'>
                   <h1>🔖Freemarker</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}


function docxfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('Docx')){
            html += `
                <div class='list'>
                   <h1>🔖Docx</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function chatGPTfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('🔖ChatGPT')){
            html += `
                <div class='list'>
                   <h1>🔖ChatGPT</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function pythonfun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('Python')){
            html += `
                <div class='list'>
                   <h1>🔖Python</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}

function javafun(){
    let html = ''
    mainContentList.forEach((item,index) => {
        if(item.label.includes('🔖JAVA')){
            html += `
                <div class='list'>
                   <h1>🔖JAVA</h1>
                   <h2>${item.year}</h2>
                   <p>${item.display}<span>${item.date}</span></p>
                </div>
            `
        }
    })
    main.innerHTML = html
}





window.onload = function(){
    daily.addEventListener('click',dailyfun)
    dev.addEventListener('click',devfun)
    rocketMq.addEventListener('click',rocketMqfun)
    rocketMQ.addEventListener('click',rocketMQfun)
    mysql.addEventListener('click',mysqlfun)
    spring.addEventListener('click',springfun)
    tool.addEventListener('click',toolfun)
    springBoot.addEventListener('click',springBootfun)
    freemarker.addEventListener('click',freemarkerfun)
    docx.addEventListener('click',docxfun)
    chatGPT.addEventListener('click',chatGPTfun)
    python.addEventListener('click',pythonfun)
    java.addEventListener('click',javafun)
}