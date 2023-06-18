const mainContent = document.getElementById('mainContent');
let mainContentList = [
    {
        title:'开发日记',
        display:'📒 记录每日开发过程中的一些碎片，持续更新',
        time:'🕣3个月前',
        label:['🖿日常开发','🔖dev','',''],
        year:'2021',
        date:'07-09',
        link:'./开发日记.html'
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
        date:'02-18',
        link:'./RocketMQ分布式.html'
    },
    {
        title:'RocketMQ消息丢失场景及解决办法',
        display:`既然在项目中使用了MQ，那么就不可避免的需要考虑消息丢失问题。`,
        time:'🕣 2 周前',
        label:['🔖JAVA','RocketMQ','Python',''],
        year:'2019',
        date:'04-23',
        link:'./RocketMQ消息.html'
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
        date:'01-03',
        link:'./Mysql.html'
    },
    {
        title:'Spring容器创建流程',
        display:`参考地址：https://blog.csdn.net/weixin_37607613/article/details/126217559 关注微信公众号，获取更多资源`,
        time:'🕣 3 周前',
        label:['🔖JAVA','Spring','',''],
        year:'2021',
        date:'10-28',
        link:'./Spring容器.html'
    },
    {
        title:'Java Spring Bean的生命周期',
        display:`Java Spring Bean的生命周期包括以下阶段： 实例化：当Spring容器接收到创建Bean的请求时，
        它会使用Java反射机制创建一个Bean实例。 属性赋值：在实例化Bean之后，Spring容器会将Bean的属性值注入到Bean实例中...`,
        time:'🕣 3 周前',
        label:['🔖JAVA','Spring','',''],
        year:'2022',
        date:'07-18',
        link:'./Java生命周期.html'
    },
    {
        title:'自己感觉好用的工具列表',
        display:`🔧 一句老话，工欲善其事，必先利其器`,
        time:'🕣  1 个月前',
        label:['🔖工具','','',''],
        year:'2023',
        date:'05-14',
        link:'./好用的工具列表.html'
    },
    {
        title:'Docx文档如何实现的自动编号？',
        display:`📃 不得不佩服优秀软件的规范`,
        time:'🕣  2 个月前',
        label:['🖿SpringBoot','🔖SpringBoot','Freemarker','Docx'],
        year:'2023',
        date:'05-14',
        link:'./Docx文档.html'
    },
    {
        title:'ChatGPT太太太太太香了',
        display:`💡 我感觉以后再也不用某度了`,
        time:'🕣 2 个月前',
        label:['🔖ChatGPT','','',''],
        year:'2023',
        date:'04-20',
        link:'./ChatGPT太香了.html'
    },
    {
        title:'这年头，谁的好友列表还没有躺一个ChatGPT啊？',
        display:`🔥 你要是说这个，我可不困了`,
        time:'🕣 2 个月前',
        label:['🔖ChatGPT','','',''],
        year:'2023',
        date:'04-10',
        link:'./这年头。。。.html'
    },
]
function mainContentListFun(arr){
    let html = ``
    arr.forEach((item,index) => {
        html+= `
            <div class='list'>
                    <a href='${item.link}'><h2>${item.title}</h2></a>
                    <p>${item.display}</p>
                <div class='son'>
                    <span>${item.time}</span>
                    <span><a>${item.label[0]}</a></span>
                    <span><a>${item.label[1]}</a></span>
                    <span><a>${item.label[2]}</a></span>
                    <span><a>${item.label[3]}</a></span>
                    <a class='text' href='${item.link}'>阅读全文></a>
                </div>
                <div class='top'>
                    <a><i class="layui-icon layui-icon-top"></i></a>
                </div>
            </div>
        `
    });
    mainContent.innerHTML = html
}

 function pagination(){
    let one= []
    mainContentList.forEach((item,index) => {
        if(index < 5){
            one.push(item)
        }
    })
    mainContentListFun(one)
 }


 const prev = document.getElementById('prev')
 const next = document.getElementById('next')


 function prevfun(){
    let one = []
    mainContentList.forEach((item,index) => {
        if(index >= 0 && index <= 4){
            one.push(item)
        }
    })
    mainContentListFun(one)
 }

 function nextfun(){
    let two = []
    mainContentList.forEach((item,index) => {
        if(index > 4 && index <= 9){
            two.push(item)
        }
    })
    mainContentListFun(two)
 }
    


window.onload =function(){
    // 渲染页面
    pagination()
    prev.addEventListener('click',prevfun)
    next.addEventListener('click',nextfun)
}

