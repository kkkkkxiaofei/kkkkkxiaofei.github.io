---
layout: post_layout
title:  "Github Page构建静态博客"
date:   2015-05-27 22:29PM
categories: jekyll update
type: 2
---
####Github Page
当你需要构建一个webapp项目时，为了更好的管理项目，Yeoman是一个不错的选择。有一下工具你可能需要提前安装：

- `yo` - `Yeoman`用来自动初始化项目的工具.----create a new web app
- 你还需要一个包管理器，例如`bower`和`npm`.----handle dependencies 
- 当然，我们还需要build项目，如`Grunt`和`Gulp`.----preview,test and buid



####安装yo

{% highlight sh %}
$ npm install -g yo bower grunt-cli gulp
{% endhighlight %}


{% highlight sh %}
$ npm install -g yo bower grunt-cli gulp
{% endhighlight %}

为了生成web app，我们还需要一个web generator

{% highlight sh %}
$ npm install -g generator-webapp
{% endhighlight %}
这个generator将会包括`HTML5` , `jQuery`, `Modernizr`, and `Bootstrap`等重要依赖，同时它将使用`Grunt`来build项目. 

####接下来就会让我们新初始化一个项目吧
{% highlight sh %}
$ mkdir my-yo-project
$ cd my-yo-project
$ yo webapp
{% endhighlight %}

这样你一个新的web项目就建立成功了。

####启动项目
由于build时用到了Grunt，所以利用`Grunt`可以启动项目，若不加任何参数则默认会执行项目所有task，包括测试。若想启动项目，则

{% highlight sh %}
$ Grunt serve
{% endhighlight %}


