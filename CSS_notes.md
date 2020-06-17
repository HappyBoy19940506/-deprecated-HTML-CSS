#  CSS

This is a demo repository for learning CSS

## 基本语法Grammar

selector:

{atrr1:value ;

attr2:value;

attr3:value

}

## 单位大小size

size : px / %

%----- 相当于父类的像素大小的百分比



## CSS的引入方式

1. 内联样式

   style属性

2. 内部样式

   style标签

***  如果同时存在， 属性style优先级更高，会显示style属性的样式

3. 外部样式

   引入单独的css文件 name.css

   如何在html文件中引用？

   link标签：***一般写在meta和title之间！！！！***

   ref属性： 资源跟页面的关系 这里填“stylesheet”

   href属性：资源的地址

----

## CSS 颜色表示



22·css中的颜色表示法？
1·单词表示法：redbluegreenyellow·
十六进制表示法：#90#ffffff
0123456789
0123456789abCdef
3·rgb过原色表示法：rgb（255，255口55）；
取值范围0～255
获取颜色的工具：
提取颜色的下载地址：colorzilla on google chrome
photoshop工具

> 别忘了有个颜色： transparent



## CSS background

+ background-color :

+ background-image:    url()  默认水平垂直都铺满

  > img标签一般有更多的语义化，background-image更多时候就是装饰作用，没有alt属性之类的

+ background-repeat：repeat-x / repeat-y/repeat/no -repeat

+ background-position: 

  以左上角为起点，为坐标轴0,0

  ***但是不同于普通坐标轴，这里是往右是正，往下是正。往左是负，往上是负。

  50% 50%

  100px 100px

  ---

  或者你可以采用 更简单的 left right top bottom 和 center来控制位置

  left/center/right  top/center/bottom

  左侧是左右变动， 右侧是上下变动

+ background-attachment :  scroll （默认）/ fixed

  *** 背景图片随着滚动条的变化是否跟着移动，如果是scroll就跟着容器一起走，父级是该div，如果是fixed，就跟着浏览器走，把浏览器或者是body当做他的父级，所以你在设置不同的background-position的时候，同样的参数就会根据你的父级的不同而发生不同的位置变化，前者是相当于div的位置，后者是相当于body的位置。但是从显示上来看，永远是透过div当做一个窗户来观察的***

  >**所以你需要注意的是，你就算改了fixed，你在设置background-position的时候虽然是对应的body而变动的，但是如果你所在div容器大小不够的话，它会显示不出来，因为如上面所言，你始终是从该div这个窗口去观察的，无论你是以哪个为父级**
  >
  >
  >
  >**举个例子，你image所在的div大小是100px x 100px，此时如果你设置了position如果是center center，以及no repeat的话，然后如果此时你设置了attachment是scroll，那么这个图片会一直钉在此div的正中间，你的窗户也永远是该div。但是同样的参数，· 如果你设置的是fixed，那么 你是看不见该背景图片的，因为你背景图片所在位置已经超出了该容器能展示的范围，但是它还是实际存在的。**
  >
  >
  >
  >**· 再者，如果你设置的位置是 fixed+永远处于左上方，那么你滚动滑轮的时候，这个图片会永远保持在页面body的左上角，但是 最最重要的来了，但是这并不代表你的div也是永远保持在左上角的，这发生了有趣的现象：当你滑轮划过div，把他滑完了之后，图片也会消失，究其原因，你所观察的永远是从div窗口在看的，因为该图片在是此div的背景图片**
  >
  >



##  选择器自定义和绑定 <div id=>

css里 #ID{}

对应

html里 \<div id="ID">



## CSS边框样式

border-style : solid /dashed/dotted

border-width: px

border-color: #00000  rgb(0,0,0)

一般三个都要写。一起写。

 单独一条边：border-right-style: solid/dashed/dotted



## CSS  文字样式

font-family: 字体类型

1. 最好把font-family多写几个，这样不会导致客户电脑第一个字体不存在的时候，会显示默认不舒服。
2. 如果是带空格在中间的字体，要加上引号。

font-size: 字体大小

默认是16px 像素，是默认大小。 或者用 xx-small/x-small/small/medium(16px)/large/x-large/xx-large

*** 推荐一般 设置成 偶数***

3.  font-weight: 字体粗细

   normal/bold

   或者

   数值：100-900 . 100-500=normal / 500-900=bold

4. font-style:

   normal / italic

   1. color: 直接在div里面加，作用的是 字体颜色，也不用说什么font-color  :thumbsdown:

## CSS段落样式

***把a标签下面的下划线效果去掉***：*** text-decoration:none***

4·css段落样式？
**text-decoration：文本装饰**
下划线：underline
删除线：line-through
上划线：overline
不添加任何装饰：none
注：添加多个文本修饰：line-throughunderlineoverline
**text-transform:文本大小写（针对英文段落）**
小写；lowercase
大写：uppercase
只针对首字母大写：capitalize

****** 识别结果 1******

**text-indent：文本缩进、首行缩进**
em单位：相对单位，1em永远都是跟字体大小相同
**text-align：文本对齐方式**
对齐方式：left、right、center、justify（两端点对齐）

**这就是为什么字体大小都要用even number** **不然在处理text align或者text indent涉及段落处理的时候不好弄**



**line-height：定义行高**
什么是行高，一行文字的高度，上边距和下边距的等价关系。
默认行高；不是固定值，而是变化的。根据当前字体的大小再不断的变化。
取值：

1.数值(px）

2.scale（比例值，跟文字大小成比例）

3.em



****** 识别结果 1******

letter-spacing：字之间的间距
word-spacing：词之间的间距〈针对英文段落的）
英文和数字不自动折行的问题．
1·word-break：break-all；（非常强烈的折行，如果最后边塞不下直接折断该单词）
2·word-wrap：break-word (不是那么强烈的折行，如果单词放不下，会写在下面一行开头，上一行的末尾会产生一些空白区域)



## CSS 复合样式

 **复合的写法，是通过空格的方式实现的。复合写法有的 是不需要关心顺序的，例如background/border**

**但是font需要有顺序的->（最少要有两个值:size + family,而且顺序也要遵循weight+style+size+family）**

> ​	weight+style+size+family 
>
> ​	style+weight+size+ family 
>
>  反正永远size+family都是在最后面
>
> 别忘了写color -字体颜色

1. background: red url( ) repeat 0,0

2. font: 20px Times

3. border: 1px red solid

   > ​	不要混写，要么全部单一样式，要么直接复合样式，如果一定混混在里面写，
   >
   >  ** 一定要先写复合，再写单一！！！！！**
   >
   >  ** 一定要先写复合，再写单一！！！！！**
   >
   >  ** 一定要先写复合，再写单一！！！！！**
   >
   > 因为后面写的会覆盖掉前面写的



## CSS  id选择题

1. id选择器

   >html--- \<div id=#XX>
   >
   >css- #XX{}
   >
   >快捷键快速创建： div#NAME---Tab---然后会自动生成带id的div标签

   ****** 识别结果 1******

   **注：**
   **1．在一个页面中，ID值是唯一的。**一定要有语义！如果你要重复利用，用class选择器。
   **2，命名规范，字母+数字（命名的第一位不能是数字）。**
   **3，命名方式，！！驼峰式！！！（不要用在css里，用在js里）、下划线式、短线式。**

   > searchSmallButton 用在js
   >
   > search-small-button 用在css
   >
   > search_small_button 用在css



## Div 命名规则

> ​	**头：header**
> 　　**内容：content/container**
> 　　**尾：footer**
> 　　**导航：nav**
> 　　**侧栏：sidebar**
> 　　**栏目：column**
> 　　**页面外围控制整体佈局宽度：wrapper**
> 　　**左右中：left right center**
> 　　**登录条：loginbar**
> 　　**标志：logo**
> 　　**广告：banner**
> 　　**页面主体：main**
> 　　**热点：hot**
> 　　**新闻：news**
> 　　**下载：download**
> 　　**子导航：subnav**
> 　　**菜单：menu**
> 　　**子菜单：submenu**
> 　　**搜索：search**
> 　　**友情链接：friendlink**
> 　　**页脚：footer**
> 　　**版权：copyright**
> 　　**滚动：scroll**
> 　　**内容：content**
> 　　**标签：tags**
> 　　**文章列表：list**
> 　　**提示信息：msg**
> 　　**小技巧：tips**
> 　　**栏目标题：title**
> 　　**加入：joinus**
> 　　**指南：guide**
> 　　**服务：service**
> 　　**注册：regsiter**
> 　　**状态：status**
> 　　**投票：vote**
> 　　**合作伙伴：partner**
> **注释的写法:**
> 　　**/* Header */
> 　　内容区
> 　　/* End Header */**
> **Id的命名:**
> 　　**1)页面结构**
> 　　**容器: container**
> 　　**页头：header**
> 　　**内容：content/container**
> 　　**页面主体：main**
> 　　**页尾：footer**
> 　　**导航：nav**
> 　　**侧栏：sidebar**
> 　　**栏目：column**
> 　　**页面外围控制整体佈局宽度：wrapper**
> 　　**左右中：left right center**
> **(2)导航**
> 　　**导航：nav**
> 　　**主导航：mainnav**
> 　　**子导航：subnav**
> 　　**顶导航：topnav**
> 　　**边导航：sidebar**
> 　　**左导航：leftsidebar**
> 　　**右导航：rightsidebar**
> 　　**菜单：menu**
> 　　**子菜单：submenu**
> 　　**标题: title**
> 　　**摘要: summary**
> **(3)功能**
> 　　**标志：logo**
> 　　**广告：banner**
> 　　**登陆：login**
> 　　**登录条：loginbar**
> 　　**注册：register**
> 　　**搜索：search**
> 　　**功能区：shop**
> 　　**标题：title**
> 　　**加入：joinus**
> 　　**状态：status**
> 　　**按钮：btn**
> 　　**滚动：scroll**
> 　　**标籤页：tab**
> 　　**文章列表：list**
> 　　**提示信息：msg**
> 　　**当前的: current**
> 　　**小技巧：tips**
> 　　**图标: icon**
> 　　**注释：note**
> 　　**指南：guild**
> 　　**服务：service**
> 　　**热点：hot**
> 　　**新闻：news**
> 　　**下载：download**
> 　　**投票：vote**
> 　　**合作伙伴：partner**
> 　　**友情链接：link**
> 　　**版权：copyright**
> **注意事项::**
> 　　**1.一律小写;**
> 　　**2.尽量用英文;**
> 　　**3.不加中槓和下划线;**
> 　　**4.尽量不缩写，除非一看就明白的单词。**
> **CSS样式表文件命名**
> 　　**主要的 master.css**
> 　　**模块 module.css**
> 　　**基本共用 base.css**
> 　　**布局、版面 layout.css**
> 　　**主题 themes.css**
> 　　**专栏 columns.css**
> 　　**文字 font.css**
> 　　**表单 forms.css**
> 　　**补丁 mend.css**
> 　　**打印 print.css**



## BEM 命名规范

[BEM 命名规范2](https://juejin.im/post/5a6c5881518825733201daf7#heading-2)



[BEM 命名规范2](https://juejin.im/post/5b925e616fb9a05cdd2ce70d)



> .block{}
>
> .block__element{}
>
> .block_element-modifer{}
>
> nav__menu--modifier
>
> banner__btn--modifier



## Class 选择器

> ​	html里  div class=XX
>
> ​	css里  .class{}



****** 识别结果 1******

注：
1·class选擇器是可以复用的·
2·可以添加多个class样式。 class="A B"
3．多个样式的时候，样式的优先级根据css决定，而不是 class="A B"中的 AB前后顺序决定。
4· \<标签>.Class名字， 可以在css里面精准定位一个单独的标签使其生效：

> p.box --- class名为box的所有p标签



## 标签tag 选择器

>HTML :\<Div>
>
>CSS:  div{}
>
>1. 一般很少用到，因为会渲染所以标签，但是有些时候可以用来消除统一格式，比如a标签的下换线。
>2. 主要用在 ul li{}  form input{  }  table tr/th/td {} ol li{}  dl dt/dd{} 等层次选择器

 

## 群组group选择器

> CSS: div , #style1, box 1{}
>
> HTML : 
>
> div> <
>
> h2 id=style1
>
> p class=box1

```css
div,#style1, .box1 {}
```



```html
<div>sss</div>
<h2 id="style"></h2>
<p class="box1"></p>
```

> ​	用逗号，可以把所有不同类型的选择器同时选择起来

## 通配*选择器

> ​	CSS :  *{			}

> ​	注意，之前理解错了，这个不是说，把整个页面都渲染在*{}的样式，而是说，整个页面所有的标签 都会执行这个属性。
>
> 比如， 你写 *{border:1px red solid} 他不是整个页面画一个边框，而是这个页面里面任何的标签都会上一个边框，会有好多好多边框，观念要试着改变。



----



## 层次选择器

****** 识别结果 1******

层次选择器

M N 可以是 标签 也可以是id 比如写成： ul #box

后代：M N  	M标签下面若干层所有的N标签，包括儿子 和孙子，都会被渲染
父子：M>N 	M标签下面一层的所有的N标签，只包括儿子，但是是所有的N标签儿子，不包括孙子
兄弟：M~N 	M标签**下面**的**所有**叫N的标签。**下面**就是肉眼去看html文件标签的上下关系
相邻 ：M+N	M 标签***下面***的**一个**叫N的标签，如果不是下面紧挨着就不会生效。对比M+N





## 属性选择器

```html
<div class="search">              
<div class="my_search_box">
<div class="search_btn">
<div class="btn_search">
```



```css
div[class=search]{background:red}  ---匹配class值为search的

div[class*=search]{background:red}	---匹配class值当中出现了search的

div[class^=search]{background:red} ------匹配class值为首字母为search的

div[class$=search]{background:red} ------匹配class值为末尾是search的

div[class]{background:red}  -------匹配出现了写了class属性的div标签
```



## 伪类选择器

```css
a:link{}  访问前的样式
a:vistited{} 访问后的样式
tag:hover{} 鼠标移入时的样式
tag:active{} 鼠标按下时候的样式
tag:before{content:" "} 在tag后面添加文字或者效果
tag:after{content:" "} 在tag前面添加文字或者效果
input (只适用于type=checkbox/radio disabled):disabled{} 当某个表单属性值是disabled的时候，该标签显示什么
input (只适用于type=checkbox/radio):checked{ } 当用户选择刚选项时，或者本身就是checked的时候，该标签显示什么
input (只适用于type=text):focus{} 当用户光标点击了这个输入框之后会发生什么效果
```

>1. 一般的网站对于a标签 只设置 a{},和 a：hover 来做效果
>2. 同一个标签的写伪类，顺序是 Linked, Visited, Hover,Active



----

## 结构伪类选择器

>li:nth-of-type(2n)    给偶数行上色
>
>li:nth-of-type(2n+1) 给奇数行上色

有些表格我们会遇到那种一行间隔一行的表格上色问题。

>****** 识别结果 1******
>
>结构性伪类选择器
>nth-of-type()
>nth-child()
>角标是从1开始的，1表示第一项，2表示第二项|n值表示从9到无穷大
>first-of-type
>last-of-type
>only-of-type
>nth-of-type()和nth-child()之间的区别
>type：类型
>child：孩子
>
>

具体区别看这个：说的很详细

> ​	[区别](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)



## CSS的继承特性

> ```html
> ****** 识别结果 1******
> 文字相关的样式可以被继承
> 布局相关的样式不能被继承（默认是不能继承的，但是可以设置继承属性inherit的值）
> 比如 你想让 现在此tag继承什么的边框布局样式，那么你直接在该层的css里的border里填inherit，就会自动继承上一层的样式，
> 
> <div style="border: 1px red solid">
>   <P style="border:inherit">
>     This is a demo
>   </P>
> </div>
> ```
>
> 

---

## CSS 各层样式的优先级

****** 识别结果 1******

**1·相同样式优先级**
当设置相同样式时，后面的优先级较高，但不建议出现重复设置样式的情况。同一次里面写两遍，跟后面来算。

**2·内部样式与外部样式**

内部样式与外部样式优先趿相同，如果都设置了相同样式，那么后写的引入方式优先级高。

引入了css，又在head 里面写了style，谁在后面谁说了算。

**3·单一样式优先级**
style行间	>  id	>	class	>	tag	>	*	>	继承
注：style行间权重1000
id  100
class 10
tag 1

\*  0.1

inherit 0.01

**4. !important 提升优先级**

​	注意： 一般不用， 而且要用的话要加载单个属性的后面：

```css
#elemt{
  color:red !important;
}
```

而且important提升的权重大概 在一万左右，如果是 inherit+important，权重还是没style大，所以--

> 不能针对继承的属性来提升优先级



**5.标签+类  VS  类**

```css
div.box{
color:red;
}

.box{
  color:blue
}

//div.box的优先级更高，会覆盖掉.box的样式
```



**6.群组选择器  VS 单个选择器**

```css
p,div{
  color:red;
}

div{
  color:blue;
}

//谁写在后面谁说了算，这里是blue
```





**7.两个层次选择器的优先级比较**

```css
	1.通过权重比较
	.box 	P 	input{}	
	．hello	span	#elem{}```
```

如果上述两个层次选择器全都作用于一个元素，优先级比较应该是：

```
10 + 1+ +1

10 + 1 +100
```

所以下面说了算，但是要注意：

> ​	这里的数字其实是， n^1 n^100 n^10的意思，不能直接10进制相加减

```css
2·约分比较
	.box 	P 	input{}	
	．hello	span	#elem{} 
这里的意思肯定是 #elem和input是指代同一个东西
实战中体现更多
```

