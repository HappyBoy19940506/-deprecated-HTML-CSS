#  CSS Stage 1

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

> ​	如果属性值写的是百分比%，那么他<***只会继承他的父元素的尺寸***>，和他的爷爷是没有任何关系的，如果他的父元素没有任何对应的对应尺寸，那么就会显示不出来！！！



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
  >
  > 注意：url可以写多个： 当写两个的时候，前一个在上层，后一个在上层。

+ background-repeat：repeat-x / repeat-y/repeat/no -repeat

+ background-position: 

  以左上角为起点，为坐标轴0,0

  ***但是不同于普通坐标轴，这里是往右是负，往下是负。往上是正，往左是正。

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
```



## CSS盒子模型

盒子模型的组成：  content --- padding --- border --margin

类比:   快递盒子 _   快递物品- 填充的塞的报纸 --包装盒--包装盒之间的填充物

> 	****** 识别结果 1******
>
> content: 内容区域 -  width和height组成的
> padding: ：内访距（内填充）
>
> 只写一个值；30px（上下左右）
> 写两个值：30px 40px（上下、左右）
> 写四个值：30px 40px 30px 40px（上、右、下、左）
> 单一样式只能写一个值：
> padding-left
> padding-right
> padding-top
> padding-bottom

margin: 外边距 (外填充)

> 只写一个值；30px（上下左右）
> 写两个值：30px 40px（上下、左右）
> 写四个值：30px 40px 30px 40px（上、右、下、左）
> 单一样式只能写一个值：
> margin-left
> margin-right
> margin-top
> margin-bottom

注意：

>   1.background-color会填充除了margin以外的所有区域，包括padding和border。
>
> 	2. 文字只会出现在content区域。
>  	3. padding不能为负数，但是margin可以。



## box-sizing属性

盒尺寸。 可以改变盒子模型的展示形态：

默认值为 content-box ，意思就是 height 和width 作用于content的大小

可选值为border-box， 意思就是 height 和width 就会作用到 content+padding+border

```css
div{
box-sizing: border-box;
}
```

可以使用的场景：

> 1. 直接固定整个box的大小，不用再另算border 和padding后content的大小
>
>   2.可以解决一些百分比大小的问题，比如宽度和高度是百分比自适应的，那么如果再加padding就会超出边界，如果直接把padding加载自适应里面就OK。 width:100% ; padding:30px;box-sizing: border-box;



## margin的叠加问题

> ​	box1有一个 margin-bottom:30px
>
> ​	box2有一个 margin-top:30px
>
>    他们两个一上一下的时候，中间的margin并不是60px，而是30px，机制是， 哪个大按哪个算。
>
> ​    但是，如果他们是一正一负的话，是可以相加减的，比如 一个bottom50px， 一个top -30px，结构显示起来 和bottom：20px一个样子



---

## margin的传递问题

在嵌套的结构中，子元素如果用margin-top 会使得父元素跟着子元素一起移动。

解决办法：

> 	```css
> 	1. BFC rules ---给父元素加上溢出隐藏： ul{ overflow:hidden;}
> 	2. 给父元素加个边框
> 	```

----

## margin 的 auto自适应

margin-left:auto 靠在最右

margin-right:auto 靠在最左

两个都有。那就回居中显示。 所以一般： margin：0 auto。

而且自适应屏幕大小，永远居中。

注意，上下top 、 bottom没有这个属性。如果要上下自适应，需要用flex弹性结构来做。



---

## 盒子模型不写width和height

> ​	嵌套div中的子元素不写width或者height会自动继承父元素的width和height
>
> ```html
> <div style=width:100px;height:100px>
>   <div style=width:100px>
>    这里我不写height的话，子div的高度会自动填满整个父类div，并且附带box-sizing:border-box属性，也就是说，不论怎么改变padding，border，margin都不会出父类div。 
>   </div>
> </div>
> 
> ```



## 标签的分类-按类型来分

> 1. block:  div , p, ul,li ,h1-h5...
>
>    > - 独占一行。2个div在一块，就会一上一下。
>    > - 支持所有属性，比如width height margin background等等等等
>    > - 不写width的时候，width的值为父元素的宽度。（就是默认body的宽度）
>    > - 所占区域是一个矩形。
>
>  2. inline:  span,a,em,strong,img...
>
>     > + 默认左右并列的
>     > + 有些样式不支持，比如  width， height，padding，margin等等
>     > + 不写width时候，width的值取决于里面文字内容的长度
>     > + 所占的区域不一定就是矩形。（如果浏览器宽度变窄，span可能会延伸到下面一行。
>     > + inline标签之间会有空隙，原因：换行产生的。i.e. 2个\<span>写在代码里一上一下就会有间隙，一左一右就不会。
>     > + 但是要注意:布局一般用block标签，span只用在修饰文本里面。
>
>  3. inline-block:  input, select..
>
>     > + 默认左右并列显示，挨在一起，但是却支持block元素的一些属性值。比如input可以设置



----

##  标签的分类-按内容划分

按内容
Flow：流内容
Metadata：元数据
Sectioning：分区
Heading：标题
Phrasing:措辞
Embedded：嵌入的
lnteractive：互动的

[go check this for more info](https://www.w3.org/TR/html52/dom.html#the-nothing-content-model)

----

## 标签的分类-按显示划分

> ​	替换元素 img / input 可以通过更换属性和属性值来达到不同效果，input-text/ input-checkbox
>
> ​	非替换元素 h1-h5



----

## Display属性

1. block

2. inline

3. inline-block

4. none   注意： display:none  与  visibility:hidden的区别

   > ​	display:none是不占空间的，设置了之后该标签所占位置会collapse。
   >
   > ​	visibility：hidden是占空间的，设置了之后位置空间还在，显示空白。



---

## 标签的嵌套规范

1. ul li

2. dl dt dd

3. table tr td

   > 这些标签之前不允许有别的标签

4. 块元素可以嵌套 层级元素：

   > ```html
   > <div>
   >   <a></a>
   >   <span></span>
   > </div>
   > ```

   1. 特殊： p标签是块元素，但是p标签不能嵌套div标签：

      > ​	\<p>  \<div>   content \</div> \</p> :x:

5. 内联标签是不能嵌套块标签的, 除了a标签：

   ```html
   <a> 
     <div> 可以给一个区域加a标签链接  </div>	
   </a>
   ```

   

---

## overflow属性

overflow:  \<div>里的内容如果长度超出div本身大小，会怎么显示

> ​	visible (默认)：超过部分直接溢出整个div边框
>
> ​	hidden：超过部分直接隐藏
>
> ​    scroll：超过部分出现滚动条
>
> ​	auto：自适应，这个比较好，自动的，多的时候出现滚动条
>
> ​	overflow-x  /  overflow-y : 只针对x轴或者y轴来设置overflow属性



## 透明度和手势cursor

- Opacity: 0-1 (透明------不透明）

  - 0的时候虽然是透明，但是占空间

  - **所有的子元素也会跟着透明**

  - 如果你不想这么做，你可以在background中设置透明度，这样就不会影响文字或者子元素: 

    ```css
    #div{
      background-color: rgba(255,255,0,0.5)
      //如此一来，你可以设置任意一个嵌套结构里的元素而不会影响他的子元素
    }
    ```

- Cursor: 自定义鼠标样式

  - 默认值为：default 就是普通的箭头

  - 值：pointer

  - 值：help

  - 值：move

  - 值：自定义鼠标样式：

    > 1. 准备.ico 或者.cur后缀的特殊文件
    >
    >  2. ```css
    >     #div{
    >     cursor:url(../icon/xxx.ico),auto;
    >     }
    >     ```

---

## Min-height /Max-width

```css
#div{
  min-height:100px; 
  //最小高度是100px，即使文本不足100px，框体也依然保持100px的大小,超过100px，无论多少，框体自适应，都能包含进去
  max-height:100px; 
  //最大高度是100px，如果文本小于100px，框体大小会根据文体自适应，超过100px，overflow发生，采用overflow属性调整
  min-width:100px;
  max-width:100px;
}
```





## 容器自适应整个屏幕高度

> 页面有多长，整个container就有多长
>
>  ```css
> html,body{height:100%}
> //一定要写！规范！
> //写这个就是为了 1.配合 %的子元素父级元素一定要有height值
> //2.如果该值是%，那么向上索引也不怕。可以一路追到顶级html和body以及浏览器的高度。
>  ```
>
> 原因参考： https://blog.csdn.net/javaloveiphone/article/details/51098972
>
> 只要设置了html和body，就不怕 任何子元素设置%的时候，丢失父元素目标，反正最终往上索引会找到html和body元素。 但是 规范写法：**如果出现%，那么一定要在父元素有height，是定值px还是百分比%无所谓，否则没有效果。**
>
> 我知道一个事实：一个div块级元素没有主动为其设置宽度和高度，浏览器会为其分配可使用的最大宽度(比如全屏宽度)，但是不负责分配高度，块级元素的高度是由子元素堆砌撑起来的。那么，html和body标签的高度也都是由子级元素堆砌撑起来的。
>
> 还有，**元素高度百分比需要向上遍历父标签要找到一个定值高度才能起作用，如果中途有个height为auto或是没有设置height属性，则高度百分比不起作用**，此时的情况是父元素高度依赖子元素堆砌撑高，而子元素依赖父元素的定高起作用，互相依赖，却都无法依赖，死循环了。
>
> > ​	说白了，你可以一路下不设置任何 定值的height，但是一定要设置 height，你可以一路都是%，无所谓，因为你最顶级的html body已经取得了浏览器的高度。



----

## CSS默认样式

> ​	有些标签是有默认样式的：h1-h5， **body**
>
> 1. body--> margin :8px
>
> 2. h1---> margin: 上下 21.440px   / font-weight：bold
>
> 3. p---->margin: 上下16px
>
> 4. ul---->margin：上下16px /  padding（左）40px / 默认点：list-style:disc
>
> 5. a--> text-decoration:underline
>
>    
>
> ​	有些标签没有默认样式的：div    ,     span
>
>  :question: :如何通过Chrome控制台看
>
>  

 :star: 正是因为body是自带默认样式的。 

> body ---自带 margin-8px 所以这就是为什么你看到很多css文件上来就会：
>
> *{
>   margin:0;
>   padding:0;
> }

---

## 重置CSS默认样式

**最常见的reset方案：**

```css
*{
  margin:0;
  padding:0;
}

html,body{
  height:100%;
}
//为什么？ https://blog.csdn.net/javaloveiphone/article/details/51098972

ul{
  list-style:none;
}

a{
  text-decoration:none;
  color:#666;
}
a:hover{
  color:red;
}

img{
  vertical-align:bottom;
  或者写
  display:block;
}
//为什么要这么做？因为原本的inline会导致图片跟容器底部有一定的空隙（因为他内联元素的对齐方式是根据text的基线的空间大小，而不是底线。
table{
  border-collapse: collapse;
}
```

 

> ​	原则： 写具体页面的时候或者实现一个布局效果的时候，要遵循步骤：
>
> 1. 先写结构
> 2. css重置样式 ( 写reset.css)
> 3. https://blog.csdn.net/brain_bo/article/details/81560444 常用reset格式代码
> 4. 具体实现样式

----

## PhotoShop CC 技巧

1. 图片的类型
   + Jpg  一般用作背景图片，色彩丰富
   + Png 一般用在item展示，没有背景，背景色继承div
   + Gif 动图，一般用在小地方
   + psd Photoshop专用格式，方便看出图层
2. 若拿不到psd文件图片，那么需要 png jpg的切图：
   - 找到需要的区域
   - 拉标尺，然后矩形选框，alt+scroll放大，框死。
   - alt+鼠标 减少边框  shift+鼠标增加边框
   - ctrl+C /ctrl+N /ctrl+V三连
   - 导出--存储为web所用的格式

**或者更加方便的方法： 用slice工具：**

+ **用slice工具全部切片**
+ **然后直接导出-储存为web所用格式**
+ **会自动生成一个文件夹，里面保存了你所有的slice切片 （包括辅助线rules）**



## 企业级中的切图以及和UI 沟通

+ Sketch 

  > ​	https://juejin.im/post/5bc91e625188255f8d0ff4e2
  >
  > ​	Sketch一般在查看UI给的设计稿的时候会用到，有时候UI设计师给我们开发的就是sketch文件，我们需要自己导出设计稿，这样才能方便看到具体的设计信息，从而进行开发。这个时候我们就需要用到`Sketch Measure插件`了。



---

## Sketch

https://www.jianshu.com/p/35c2cf8bed1f

---





## div中文字各种垂直居中的方法

	>如何让一行文字默认在div中上下居中，很简单，让line-height= div的height 相同，那么肯定可以上下居中。
	>
	>再加上 text-align：center, 实现左右居中。

具体参考: 

> ​	https://www.jianshu.com/p/3e849e521cae



----

## CSS样式之float浮动

文档流： 文档中的排列的位置和顺序。简单来说，该元素所占的空间和位置。

float：添加之后，会脱离文档流，然后沿着父容器靠左或者靠右排列，如果之前有浮动元素，就会挨着浮动的元素进行排列。

 值： 

> float:left
>
> float:right
>
> float:none

注意事项：

> 1. 当前元素变成float之后，会影响后面的元素，float元素会脱离文档流，该位置腾出来，后面的顶进去。
> 2. 当前元素变成float之后，后面影响的元素如果带有内容，比如文字，那么该文字当做一个独立的文档流，会围绕该float的元素排列在 后元素里:  图文结合内容，文字围绕图片效果。
> 3. 当前元素变成float之后，如果你没有写 宽度，该元素的宽度根据内容的长度决定。
> 4. 另外：如果一个子元素没有写宽度，那么他的宽度将继承父元素。
> 5. 当前一群元素变成float之后，会脱离文档流，然后沿着父容器靠左或者靠右排列，如果排满了就会到下面一排，而不是超出父容器。但是要注意的是，排列的时候，如果高度不一样，不一定会排在下面一排的第一个。
> 6. **float主要添加给块元素，比如要让一堆div左右排列， 要么inline-block，要么float一次排列，一般不要用在inline元素里面**

----

## CSS清除浮动

>  1. 上面说过，“当前元素变成float之后，会影响后面的元素，脱离文档流，该位置腾出来，后面的顶进去。并且父元素容器因为丢失了一部分元素，会导致塌陷，其样式和背景可能会出现bug”**如果不像让后面的元素收到影响，那么我们可以把后面的元素加上clear属性来规避这样的影响：**
>
>     ```css
>     after_box{
>     	clear:both;
>     }
>     ```
>
> 	2. 在嵌套结构下：我们不像让父元素受到被float的子元素的影响，我们可以这么做：
>
>     用after伪类操作：
>
>     ```css
>     //在父元素的css下写一个after伪类，本意为在此元素的后面添加一段话。其实就是在父元素下面再写一个标签
>     clear_float:after{
>       content:'';  //内容为空，我只需要一个占位的地方
>       clear:both; //清除上下的float影响
>       display:block; //但是after的作用于inline元素，我们要改成块元素。
>       // 综上，把一个空白内容的内联元素改为块元素，再去掉float后续影响
>     }
>     
>     ```



---

## CSS position属性

> ​	一般float做左右布局，而position一般用来做叠加布局。

1. position属性的取值+ left/right/top/bottom配合使用

   - static （默认）

   - relative

     - 如果只写relative，但是不设置偏移量，不会发生任何事情。
     - 不会使元素脱离文档流
     - 不会影响其他任何元素的布局
     - left/right/top/bottom相对于当前元素的左上角（0，0）的自身的位置发生偏移

   - absolute

     - 使其脱离文档流-所占空间会消失，下面的会顶上去。

     - 使内联元素支持宽和高

       > :question: : 所以， 内联元素支持宽高吗？答：默认不支持，那是block元素的特性。
       >
       > 怎么让他支持呢？ 让内联元素，加上 position：absolute就行了。或者 用display：inline-block

     - 如果有内容，默认宽度由内容宽度决定。所以你又没内容 又没设置宽度就会啥也看不到。

     - left/right/top/bottom相对于当前元素的左上角（0，0）的自身的位置发生偏移

       > 	1. absolute的上面的父元素必有 relative/absolute/fixed中的一种，否则无法定位。
       >  	2. left/right/top/bottom相对于当前元素的左上角（0，0）的自身的位置发生偏移。
       >  	3. 如果全部没有，那就会按照这个html来当做父元素，一般不会发生，除非你是傻逼。

   - fixed

     - 使其脱离文档流-所占空间会消失，下面的会顶上去。
     - 如果有内容，默认宽度由内容宽度决定。所以你又没内容 又没设置宽度就会啥也看不到
     - 使内联元素支持宽和高
     - 相当于整个浏览器窗口进行偏移，并且不受鼠标滚动条的影响。

   - sticky

     - 设置的时候不能单独设置position：sticky，没有意义，要伴随着偏移量设置。
     - 偏移量相当于 该元素和当前窗口的位置关系，比如top:100px,代表该元素和当前该窗口的上部相距离100px

   - index

     - 默认情况下，后写的在下面，后写的如果脱离文档流，会浮到前者上面

     - z-index默认值为0，越大层级越高

     - 需要注意的是：如果出现这种情况： 

       ```html
       <div style="z-index:-1">
         <div style="z-index:0">
           1
         </div>
         <div style="z-index:-2">
           2	
         </div>
       </div>
       //如果父元素和子元素同时被安排了z-index，那么父元素说了算，如果父元素比下去了，子元素index再大也不起作用
       //如果父元素不设置任何z-index，那么谁的index大谁就在上面
       //说白了，z-index要一定要设置在 最最最孙子的元素上，免得出错，或者直接-9999，保证在最底层。
       ```





---

## CSS 利用float实现若干功能

左右布局 demo 

1.每层div 用float：left 左右排列， 2.清除每层的float对下层的影响 （给父元素一套after伪类空标签三连），3.用ul 和li

---



## CSS利用position实现若干功能

1. 下拉菜单demo 思路：1.div + ul li 2.div为父类， ul为子类，父子absolute定位3. 给div加上hover伪类 4.ul默认甚至为display:none, 4,当hover发生时，display：block

   ```css
   #menu ul{
     display:none;
   }
   #menu :hover ul{
     display:block;
   }
   ***//这里一定要注意: 这种hover后面再跟别的类的写法，这种写法后面的类一定要是hover前面的类的子类！！***
   ***//这里一定要注意: 这种hover后面再跟别的类的写法，这种写法后面的类一定要是hover前面的类的子类！！***
   ***//这里一定要注意: 这种hover后面再跟别的类的写法，这种写法后面的类一定要是hover前面的类的子类！！***
   ***//这里一定要注意: 这种hover后面再跟别的类的写法，这种写法后面的类一定要是hover前面的类的子类！！***
   ***//这里一定要注意: 这种hover后面再跟别的类的写法，这种写法后面的类一定要是hover前面的类的子类！！***
   ```

   

2. 实现元素在父元素内居中 demo：父类relative，子类absolute，然后top50%，left50%，再加上margin调整

3. 实现列表项前面的装饰点demo , 大致思路： 给item加before伪类，**并给li写relative定位（而不是给ul写）**，给before伪类写absolute定位。把before添加的定位 基于后面的item内容而定位。

4. 番剧的图像上面 右上角的红字：独播，或者右下角的：更新至30集。

----

## 如何实现[单行]溢出部分“省略号”

>  1. **必须只能是一行文字**，多行的要用js做。
>
>  2. **虽然是一行，但是必须设置宽度值**
>
>  3. 再加上如下css样式：
>
>     ```css
>     div{
>       width:200px;
>       white-space:nowrap;
>       overflow:hidden;
>       text-overflow:ellipsis; 
>     }
>     ```

---

## CSS Sprite

****** 识别结果 1******

CSS雪碧也叫做CSS精灵，是一种网页图片应用处理方式。它允许亻一个页
面涉及到的所有零星图片都包含到一张大图中去加载。

****** 识别结果 1******

可以减少图片的质量，网页的图片加载速度快
减少图片的请求的次数，加快网页的打开

如何生成一个 sprite图片：

> ​	https://css-tricks.com/css-sprites/
>
> ​	http://www.spritecow.com/

如何调用：

> ```css
> .sprite_img{
>   background:url() no-repeat -200px -30px; //先水平方向，再竖直方向定位，定位到图标的左上角
>   background-size:467px 361px;//先压缩背景图片，再截图，可以显示retina效果更清楚
>   width:33px; //选取图片的长度
>   height:33px; //选取图片的宽度
> }
> ```
>
> 

## CSS给div添加圆角

```css
#box{
  width:200px;
  height:200px;
  background:red;
  border-radius:10px; //相当于设置一个半径为10px的圆形与其宽度相切，所以如果设置的值正好是width的一般，那么就会把整个div变成圆形。或者直接写成50%
  // 如果想设置椭圆相切， 可以写成border-radius:20px/30px; 意思是x轴20px y为30px的椭圆
}
```

----

## 布局之 通栏和版心

> ​	首先，拿到一个页面，要了解什么是通栏，什么是版心。
>
> ​	通栏： 自适应浏览器的宽度。 container-fluid
>
> ​	版心： 固定一个宽度，并且让容器居中。 container
>
>   很多时候，是 版心 嵌套在 通栏里面。

---

## 布局之 导航菜单栏

> 1. reset css.
>
> 	2. nav-logo, left float
>  	3.  nav-menu right float

---

## 布局之banner

> 	1. banner是否占据整个通栏
>  	2. banner中的 滑动图片用ul li， 下面的切换btn用ol li
>  	3. **为什么滑动的图片一定要用background来设置而不用img标签？ 因为图片不方便居中**
>  	4. **设置完background如何点击图片，可以跳转，造成 a+img标签的效果？把a元素改为block元素，并设置宽高**
>  	5. **下面的btn按键如何实现？  border+radius+cursor+伪类active+inline并排。**
>  	6. **如何实现百叶穿的图片堆叠效果？所有图片直接absolute脱离文档流，定位到一起，然后其中第一张opacity设为1，别的设为0，并把第一张的zindex设为最高**

