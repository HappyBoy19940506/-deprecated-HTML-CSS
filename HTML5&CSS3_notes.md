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

