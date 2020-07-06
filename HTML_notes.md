

# HTML

This is a demo repository for learning HTML



## Useful Shortcuts

![Screen Shot 2020-05-31 at 11.34.42 pm](/Users/KevinJoestar/Library/Application Support/typora-user-images/Screen Shot 2020-05-31 at 11.34.42 pm.png)

学习编辑器基本使用？ VSCODE
设置；文件一>首选项-〉设置〈大小、是否换行wordwrap）
创建文件、创建文件夹、重命名和删除、搜索
ctrl十s：保存
ctrl+a：全选
ctrl+X、ctrl+C、ctrl+v：剪切、复制、粘贴
ctrl+Z、ctrl+y：撤销、前进
shift+end：从头选中一行
shift+home：从尾部选中一行

tab：向后缩进
tab+shift：向前缩进
多光标：alt+鼠标左键
ctrl+d：选则相同元素的下一个

全套初始代码：  ! + Tab

 注释： <!--  WHAT --> 快捷键： Ctrl + /



 ## Title标签 vs title属性

1. title标签是用在 head标签里面显示 网站名字的，最上面一栏。
2. title属性，是用在一般标签内部，属性的值，就是鼠标移上去显示的东西。



## \<h1> and \<p>

1. 一个html只准写一个h1标签，写2个虽然不报错，但是很傻逼。别的无所谓。
2. 你在p标签里面的，换行是没有用的，还是会在一行显示，所以你要换行，用重新用另一个p标签去写



## \<strong> vs \<em>



## \<sub> vs \<sup>

## \<del>vs\<ins>

## \<img> line element

图片标签
img一>单标签
src：引入图片的地址。
alt：当图片出现问题的时候，可以显示一段友好的提示文字。
title：提示信息
width、height：图片的大小

img是一个行元素， 你不主动换行，他就跟在前一个元素的后面了。

**为什么要把css写在开头，或者为什么最好图片不要用原始图片大小，哪怕大小不变也要设置一下相同的width和weight，因为你可以用 慢网速的模式下测试chrome network，slow下面测试，如果你没有css放开头，就会出现 加载过程中结构突然变化的情况。*****因为html的渲染加载顺序是从上到下的。****



## 相对路径和绝对路径

当前文件夹： ./

上层文件夹：../

 

## \<a>    line element

<a>是一个行元素， 你不主动换行，他就跟在前一个元素的后面了。
a一>双标签<a></a>
href属性：链接的地址
target属性：可以改变链接打开的方式，默认情况下\_blank；在当前页面打开\_self
base一>单标签：作用就是改变链接的默认行为的



## \<base>

这是一个单标签

这个 标签一般要写在 \<head>里面， 写 \<base  target="_blank"> 这样就可以把整个网页都变成默认点击弹出新网页，点击a标签的时候。



##  锚点跳转

还是用 a 标签，在 href里面改成 #id

并把要锚点去的地方，加上属性id+id值: \<a herf=#anchor> ---- \<X id=anchor>

方法二：

在要去的锚点的地方，不加id值，改成在 附近加一个 a标签，并有name属性，id是之前的id值。

相当于a标签互相跳-----   \<a herf=#anchor> ---- \<a name=anchor>



## 特殊符号 和空格

\&lt;

\&gt;

\&nbsp;

解决冲突啊左右尖括号、添加多个空格的实现


## un-ordered list

\<ul>  \<li>



## ordered list

\<ol> \<li>

##  defined list

\<dl>   \<dt> \<dd>

16·列表标签
1.无序列表0ulli符合嵌套的规范
2·有序列表．>olli一般用的比较少，可以用无序列表来实现
3·定义列表一>dldtdd列表项需要添加标題和对标题进行捲述的内容
注：列表之间可以互相嵌套，形成多层级的列表．



## table

\<table>

\<caption>

\<tr>

\<th>

\<td>

以及一些 语义化标签 

thead tbody tfood方便seo

---



表格的属性：

table boarder=1

table cellpadding：30px 单元格内字到边框的距离

table cellspacing：30px 单元格与单元格之间的距离

colspan =2   把该th或者td 列的左右距离，向右野蛮生长2格，如果不删除最右边的，会把最后的挤出表格

rowspan=2  把该th或者td 列的上下距离，向下野蛮生长2格，如果不删除最底边的，会把最后的挤出表格

align ： 把该标签内的内容left /right /centre 左右对齐方式

valign： 把该标签内的内容top/ middle/ bottom 上下对齐方式

---

## \<form and input>

最外层一定有 form标签，就像 ul和li一样， dl dd dt 一样， table tr th td一样

input是单标签

input是一个行内标签

input标签 type属性的 类型：

text    文本输入

password  密码输入

checkbox 复选

radio 单选

file  上传文件

submit 提交

reset 重置



## \<form> and\<other tags>



\<textarea>多行文本框

textarea是一个 行内元素

-----



\<select + option>



----

\<lable>

----



## \<div> and\<span>

div 划分区域

span文字内联



---

## Label+Input标签的使用。

```html
<form>
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" />
  <br />
  <label for="female">Female</label>
  <input type="radio" name="sex" id="female" />
</form>
```



* https://www.w3school.com.cn/tags/tag_label.asp





---

## text-align属性使用误区

text-align可以是文字在其所在行居中，但是这个属性必须用在 改文字的父元素容器的属性里面，而不是该文字的标签上。比如， div里面有个span里面有字，你想让这个span文字居中，你必须在div里面写text-align，而不是字span里面写text-align！！！