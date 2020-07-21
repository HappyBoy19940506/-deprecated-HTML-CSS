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
   >    > **但是特别需要注意的是，有一点细微差别，就是 img里面usemap属性的值要比map里面name的值多一个#** 
   >    >
   >    > **但是特别需要注意的是，有一点细微差别，就是 img里面usemap属性的值要比map里面name的值多一个#** 
   >    >
   >    > **但是特别需要注意的是，有一点细微差别，就是 img里面usemap属性的值要比map里面name的值多一个#** 





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

## embed 标签 与 object 标签

1. 没有差别，针对不同浏览器，两种写法都支持了。一般用embed，那个object还需要些什么param的子标签，很麻烦。
2. 用来 插入 flash动画。 但是现在越来越少了，因为移动端的流行，但是flash在移动端的支持不好。
3. swf文件，就是flash文件的后缀名



----

## video标签与 audio标签	

1. html5中新增的来代替flash功能

2. controls属性： 默认不可见，可以设置通过“controls”属性是否显示，直接写 controls就行，类似 input标签里面的disabled。

3. 类似的属性还要 loop 和 autoplay

   > ​	我们可以 把 video标签配合 loop和autoplay实现 **炫酷的背景动画的效果**。

4. 为了支持兼容多个设备，可以调用 source属性

   > ​	拥有两份源文件的音频播放器。浏览器应该选择它所支持的文件（如果有的话）：
   >
   > ```html
   > <audio controls>
   > <source src="horse.ogg" type="audio/ogg">
   > <source src="horse.mp3" type="audio/mpeg">
   > Your browser does not support the audio element.
   > </audio> 
   > ```

5. 如果要自定义播放器样式，那我们要用audio标签配合js来模拟播放器





--------

## ruby标签配合rt标签

1.一个 ruby 注释：

```html
<ruby>
漢 <rt>HAN</rt>
</ruby
```



2. bdo标签：  用bdo标签包裹的文本， dir属性里面 ltr为从左到右， dir属性为 rtl为从右到左，可是实现文本从右向左排列
3. 古诗排列 效果怎么错？其实不用bdo标签， 可以把每一div做成竖条状，然后向右浮动，然后宽度只能容纳下一个字。



----

## link标签扩展

1. 首先，link标签一般都在头部引用 css文件
2. rel属性常用的值为： 
   - stylesheet: css文件样式
   - icon :网页浏览器每个网页的那个小图标logo 另外，type也要制定为 x-icon, logo一般命名为favicon.icon
   - dns-prefetch: dns解析直接规定域名，不用解析，提升网速。

----

## meta标签扩展

 meta是一个辅助标签，是不会显示的，帮助优化页面的显示。

1. ```html
   <meta charset="utf-8">
   ```

   

2. ```html
   <meta name="description" content="World of Warcraft Classic is a faithful recreation of the original WoW—Blizzard Entertainment's lauded MMORPG.">
   ```

3. ```html
   <meta name="keywords" content="淘宝,淘寶,淘寶網,掏寶,掏保,網上購物,集運,淘宝全球,taobao">
   ```

4. ```html
   <meta name="renderer" content="webkit">
   
   
   <!--   针对一些双内核浏览器，比如360浏览器，选择更高级的渲染webkit  -->
   ```

5. ```html
   <meta property="66666" content="what waht waht">
   
   <!-- 可以自定义 meta标签   -->
   ```

6. ```html
   <meta http-equiv="X-UA-Compatible" content="IE=Edge">
   
   <!-- 针对不同版本的ie浏览器版本，渲染都从edge这个版本进行渲染   -->
   ```

7. ```html
   <meta http-equiv="refresh" content="3" url="">
   
   <!-- 三秒钟之后 跳转到 url里面的网址   -->
   ```

8. ```html
   <meta http-equiv="expires" content="Wed,20 Jun 2019 22:33:00 GMT" >
   
   <!-- 在预设的时间点进行网页缓存，如果时间过期了，重新去服务器获取 -->
   ```





---



## HTML5  新语义化标签，不要再用div了

1.  header  页眉

2.  footer  页脚

3. main  主体

4. hgroup 标题组合  比如一个大标题，后面还有个小标题，或者是小签名，那么可以用这个包裹起来，替换掉div

5. nav  导航

   > header , footer, main 和h1 标签类似，一个page里面只能出现一次
   >
   > 而且一般是 header + main+ footer这样的顺序， 然后
   >
   > header里面一般有 nav
   >
   > 然后再根据 header， main 以及 footer所占的宽度来决定，他是 通栏 还是 版心。
   >
   > 一般来说， header， main， footer这些 class肯定是 container-fluid了，然后里面的子类比如nav什么的，就是container！

   ```html
   
           <header class="container-fluid">
           	<nav class="container"> xxx </nav>
           	</header>
           <main class="container-fluid">>
             <h1 class="container">
               xxxx
             </h1>
           	</main>
           <footer class="container-fluid">
             <div class="container">
               xxxx
             </div>
           	</footer>
   ```

6. article  独立的内容

7. aside  辅助信息的内容

8. section 区域

9. figure 描述图像或视频

10. figcaption 描述图像或者视频的标题部分

    ```html
          <main>
            <article>
              <section>
                <figure>
                  <img src="" alt="">
                  <figcaption>sss</figcaption>
                </figure>
              </section>
              <section></section>
              <section></section>
              <section></section>
            </article>
            <aside></aside>
          </main>
    ```

    

