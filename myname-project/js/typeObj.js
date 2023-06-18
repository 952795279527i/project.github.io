(function () {
  let list = [
    {
      title: "Centos",
      year: "2019",
      count: "[1]",
      desc: "linux centos如何安装docker",
      date: "06-14",
    },
  ];
  let list1 = [
    {
      title: "Charles",
      year: "2022",
      count: "[1]",
      desc: "安利一个Mac下好用的抓包工具-Charles",
      date: "08-14",
    },
  ];
  let list2 = [
    {
      title: "ChatGPT",
      year: "2023",
      count: "[2]",
      desc: "ChatGPT太太太太太香了",
      desc1: "这年头，谁的好友列表还没有躺一个ChatGPT啊？",
      date: "03-28",
      date1: "03-18",
    },
  ];
  let list3 = [
    {
      title: "dev",
      year: "2023",
      count: "[2]",
      desc: "开发随记",
      desc1: "关于谷歌浏览器占用的端口号",
      date: "02-23",
      date1: "02-09",
    },
  ];
  let list4 = [
    {
      year: "2023",
      count: "[5]",
      desc: "RocketMQ分布式事务原理",
      desc1: "RocketMQ消息丢失场景及解决办法",
      desc2: "Mysql：用覆盖索引解决回表查询",
      desc3: "Spring容器创建流程",
      desc4: "Java Spring Bean的生命周期",
      date: "05-30",
      date1: "05-30",
      date2: "05-29",
      date3: "05-23",
    },
    {
      year: "2020",
      count: "[5]",
      desc: "记一次因使用Date引起的线上BUG处理",
      desc1: "Java中的try，如何开启新姿势？",
      desc2: "「规范」如何优雅地代码分层？",
      desc3: "我是如何用IDEA调试BUG的？",
      desc4: "通过shell脚本一键安装JDK8",
      date: "04-20",
      date1: "04-13",
      date2: "04-12",
      date3: "03-30",
      date4: "03-19",
    },
    {
      year: "2019",
      count: "[5]",
      desc: "ThreadLocal解决了什么问题？",
      desc1: "JDK8日常开发系列：Consumer详解",
      desc2: "快速优雅的在linux服务器上安装jdk8",
      desc3: "jdk8 Optional 的正确使用姿势",
      desc4: "JDK 1.8 处理时间常用举例",
      date: "12-15",
      date1: "07-13",
      date2: "06-13",
      date3: "06-04",
      date4: "05-16",
    },
  ];
  let str = "";
  list.forEach((item) => {
    str += `<div class="tag-container">
            <div class="tag-name">${item.title}
            </div>
            <div class="tag-post-list">
          
            <div class="archive-list-container">
          
            <div class="archive-item">
                <div class="archive-item-header">
                    <span class="archive-year">${item.year}</span>
                    <span class="archive-year-post-count">${item.count}</span>
                </div>
                <ul class="article-list">
          
                        <li class="article-item">
                            <a class="article-title" href="../article/docker.html">${item.desc}</a>
                            <span class="article-date">${item.date}</span>
                        </li>
          
                </ul>
            </div>
            </div>
            </div>
            </div>`;
  });
  $("#con").html(str);

  let str1 = "";
  list1.forEach((item) => {
    str1 += `<div class="tag-container">
            <div class="tag-name">${item.title}
            </div>
            <div class="tag-post-list">
          
            <div class="archive-list-container">
          
            <div class="archive-item">
                <div class="archive-item-header">
                    <span class="archive-year">${item.year}</span>
                    <span class="archive-year-post-count">${item.count}</span>
                </div>
                <ul class="article-list">
          
                        <li class="article-item">
                            <a class="article-title" href="../article/docker.html">${item.desc}</a>
                            <span class="article-date">${item.date}</span>
                        </li>
          
                </ul>
            </div>
            </div>
            </div>
            </div>`;
  });
  $("#con1").html(str1);

  let str2 = "";
  list2.forEach((item) => {
    str2 += `<div class="tag-container">
            <div class="tag-name">${item.title}
            </div>
            <div class="tag-post-list">
          
            <div class="archive-list-container">
          
            <div class="archive-item">
                <div class="archive-item-header">
                    <span class="archive-year">${item.year}</span>
                    <span class="archive-year-post-count">${item.count}</span>
                </div>
                <ul class="article-list">
          
                        <li class="article-item">
                            <a class="article-title" href="../article/docker.html">${item.desc}</a>
                            <span class="article-date">${item.date}</span>
                            
                        </li>
                        <li class="article-item">
                        <a class="article-title" href="../article/docker.html">${item.desc1}</a>
                        <span class="article-date">${item.date1}</span>
                </ul>
            </div>
            </div>
            </div>
            </div>`;
  });
  $("#con2").html(str2);

  let str3 = "";
  list3.forEach((item) => {
    str3 += `<div class="tag-container">
            <div class="tag-name">${item.title}
            </div>
            <div class="tag-post-list">
            <div class="archive-list-container">
            <div class="archive-item">
                <div class="archive-item-header">
                    <span class="archive-year">${item.year}</span>
                    <span class="archive-year-post-count">${item.count}</span>
                </div>
                <ul class="article-list">
                        <li class="article-item">
                            <a class="article-title" href="../article/docker.html">${item.desc}</a>
                            <span class="article-date">${item.date}</span>
                        </li>
                        <li class="article-item">
                        <a class="article-title" href="../article/docker.html">${item.desc1}</a>
                        <span class="article-date">${item.date1}</span>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            </div>`;
  });
  $("#con3").html(str3);

  let str4 = "";
  list4.forEach((item) => {
    str4 += `
            <div class="tag-name">Java</div>
            <div class="tag-post-list">
            <div class="archive-list-container">
            <div class="archive-item">
                <div class="archive-item-header">
                    <span class="archive-year">${item.year}</span>
                    <span class="archive-year-post-count">${item.count}</span>
                </div>
                <ul class="article-list">
                        <li class="article-item">
                            <a class="article-title" href="../article/docker.html">${item.desc}</a>
                            <span class="article-date">${item.date}</span>
                        </li>
                        <li class="article-item">
                        <a class="article-title" href="../article/docker.html">${item.desc1}</a>
                        <span class="article-date">${item.date1}</span>
                    </li>
                    </li>
                    <li class="article-item">
                    <a class="article-title" href="../article/docker.html">${item.desc2}</a>
                    <span class="article-date">${item.date2}</span>
                </li>
                <li class="article-item">
                <a class="article-title" href="../article/docker.html">${item.desc3}</a>
                <span class="article-date">${item.date3}</span>
            </li>
            <li class="article-item">
                <a class="article-title" href="../article/docker.html">${item.desc4}</a>
                <span class="article-date">${item.date4}</span>
            </li>
                </ul>
            </div>
            </div>`;
  });
  $("#con4").html(str4);

  let list5 = [
    {
      title: "RocketMq",
      year: "2023",
      count: "[1]",
      desc: "RocketMQ分布式事务原理",
      date: "05-30",
    },
  ];
  let str5 = "";
  list5.forEach((item) => {
    str5 += `<div class="tag-container">
            <div class="tag-name">${item.title}
            </div>
            <div class="tag-post-list">
            <div class="archive-list-container">
            <div class="archive-item">
                <div class="archive-item-header">
                    <span class="archive-year">${item.year}</span>
                    <span class="archive-year-post-count">${item.count}</span>
                </div>
                <ul class="article-list">
                        <li class="article-item">
                            <a class="article-title" href="../article/docker.html">${item.desc}</a>
                            <span class="article-date">${item.date}</span>
                </ul>
            </div>
            </div>
            </div>
            </div>`;
  });
  $("#con5").html(str5);

  let list6 = [
    {
      title: "RocketMQ",
      year: "2023",
      count: "[1]",
      desc: "RocketMQ消息丢失场景及解决办法",
      date: "05-30",
    },
  ];
  let str6 = "";
  list6.forEach((item) => {
    str6 += `<div class="tag-container">
            <div class="tag-name">${item.title}
            </div>
            <div class="tag-post-list">
            <div class="archive-list-container">
            <div class="archive-item">
                <div class="archive-item-header">
                    <span class="archive-year">${item.year}</span>
                    <span class="archive-year-post-count">${item.count}</span>
                </div>
                <ul class="article-list">
                        <li class="article-item">
                            <a class="article-title" href="../article/docker.html">${item.desc}</a>
                            <span class="article-date">${item.date}</span>
                </ul>
            </div>
            </div>
            </div>
            </div>`;
  });
  $("#con6").html(str6);
})();
