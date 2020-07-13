#  HTML5&CSS3_learning notes

This is a demo repository for learning CSS3 HTML5	

----

## HTML与XHTML区别

****** 识别结果 1******

1·HTML与XHTML区别？
DOCTYPE文档及编码
元素大小写
属性布尔值
属性引号
图片的alt属性
单标签写法
双标签闭合



----

## strong和b标签， em和i标签

****** 识别结果 1******

strong和em都是表示强调的标签，表现形态为文本加粗和斜体。b和
i标签同样也表示文本加粗和斜体。
区别在于，strong和em是具备语义化的，而b和i是不具备语义化的。

那既然strong和em才是语义化的，而加粗和斜体又可以通过css中的font-style和font-weight来实现，那b和

i有什么意义和使用场景呢？

> ​	 英文strong em i 和 b和span标签一样，属于inline元素，所以我们在做一些 一行的小元素的时候可以用，比如若干个小图标，
>
> 那为什么不用多个span呢？ 因为你span一多，在选择器的时候如果多个span就会把class写的很复杂，比如要用nth-of-type，所以你如果用一下i，用一下em，再用一下span的话，选择器就很好写了！





## 文章里面的引用标签-语义化

---

****** 识别结果 1******

1. blockquote：**引用大段的段落解释 , 引用一大段的文字**

2. q：引用**小段的短语解释**,  比如一个成语的出处

3. abbr：缩写或首字母缩略词 ，比如 WHO

4. address：引用POX地址信息，邮箱地址

5. cite：引用著作的**标题**，比如 一本书的名字

   > ​	语义化，规范！ 专业！牛逼！



---

## iframe标签

1.简单来说，就是把在iframe标签下面再嵌入另一个页面儿。
2.属性和值
   + frameborder规定是否显示iframe的边框值：0或1
   + width定义iframe的宽度
   + height定义iframe的高度
      +滚动规定是否在iframe中显示滚动条值：是或否
   + src规定在iframe中约会的网址
   + ** srcdoc **规定在iframe中显示的页面内容，如果和src同时存在，则src会失效，只显示srcdoc
3.应用场景：
      -跨页面的数据传输，配合js，把iframe宽度= 0，高度= 0，显示：无；
      -共享代码共享，某些需要再另一个页面查看演示效果，那么演示效果直接iframe；
      -局部刷新，只刷新iframe内部。
      -第三方介入，第三方复杂的广告，直接嵌入进来，不需要考虑内部。

---

## br标签和wbr标签

1. wbr就是软换行。 br就是硬换行。
2. br就是随便用，用了就会换行。
3. 但是wbr一般用在一个长一点的单词内部， 比如 inter\<wbr>esting， 这样做的效果就是，如果interesting这个词出现在末尾，末尾的剩余长度又不够interesting的话，默认会把interesting整个字从下一行开始，但是如果写了这页的wbr标签，他会在第一行末尾写inter，第二行开始写esting，避免第一行空出太多，不好看。

----

## pre标签配合code标签

1. 这两个一般组合使用，来在页面上显示代码。
2. pre可以让其内的空格和换行不再是默认打n个和打1个一样，可以识别多个空格和换行
3. code标签用来往里面输入代码，但是要注意，输入的代码\<\>要转义。转义成&lt &gt
4. 但是一般情况下，code里面的内容我们一般用支持Markdown语法的富文本编辑器转义之后来显示，并不会直接往里面写，因为会遇到转义问题。
5. Markdown语法可以去看我写的关于 Markdown的上手笔记。



---

## map标签配合area标签

1. 一般我们如何给一个图片设置超链接?  答：a标签包裹一个img标签

2. 但是现在如果我只想给一张图片的特殊区域加链接怎么把？而且这块区域还不是长方形的。比如一张图片里面有一个电脑和一个圆盘子，我怎么把电脑区域连接成一个a标签，圆盘子也一个a标签。

   > 1. 目前必须用ps，我没找到sketch里如何获取鼠标坐标。
   >
   > 2. https://www.w3schools.com/tags/tag_map.asp
   >
   > 3. **特别需要注意的是**： 就像input和label一样，map和你要映射的图片img需要一些特定关系来绑定在一起，而且， input和label这两个标签是并列的，img和map也是，必须是并列关系。
   >
   >    另外，他们是如何绑定的呢？  正如input里的id属性，和label里面的for属性的值对应一样
   >
   >    > ​	img里的 usemap=“#name” 
   >    >
   >    > ​	与
   >    >
   >    > ​	map里的 name=“name”
   >    >
   >    > ​    对应，
   >    >
   >    >   **但是特别需要注意的是，有一点细微差别，就是 img里面usemap属性的值要比map里面name的值多一个#** 
   >    >
   >    >   **但是特别需要注意的是，有一点细微差别，就是 img里面usemap属性的值要比map里面name的值多一个#** 
   >    >
   >    >   **但是特别需要注意的是，有一点细微差别，就是 img里面usemap属性的值要比map里面name的值多一个#** 





---

## fieldset标签 配合 legend标签

一般可以这么写：

```html
<form action="  
  <fieldset>
    <legend ></legend>
    <label for="fname">First name:</label> //相当于input标签后面的字儿
    <input type="text" id="fname" name="fname">
  </fieldset>
</form>

```



1. fieldset会自动形成一个框
2. 配合legend，可以给这个框做一个炫酷的结构标题。

----

## input标签配合label标签

input的id ：用来捆绑label的for的，独一无二的标识

input的value 用来传输数据的

input的name: 是用来捆绑 选择题里面每个选项的

**label 的for  :对应的是input的id**

----

--



-----

---



