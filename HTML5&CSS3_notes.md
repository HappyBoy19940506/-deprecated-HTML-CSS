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

6. article  独立的内容    -- 一般用在main里面几块独立的article

7. aside  辅助信息的内容--- 一般和 article 配套使用， article为主题，aside为旁边一些辅助信息，比如登录信息啥的

8. section 区域 ---- 一般用在article里面再进行section的分区域，特别像div

9. figure 描述图像或视频 ----一般配合figcaption一起使用， figure里面配塞着figcapture

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

11. 我们发现，其实 新的H5语义化标签，其实就是把div标签根据结构的样式来重新命名，对规则并不发生变化。

12. datalist : 选项列表，以前都是用js来实现的，现在可以直接实现 下拉选项列表,比如你搜索框的搜索历史，或者常用关键字自动补全。

    ```html
     <input type="text" name="" id="" list="elems">
          <datalist id="elems">
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
            <option value="5">4</option>
            <option value="6">5</option>
          </datalist>
    <!--注意input 和 datalist的配合使用  -->
    ```

    

13. details 配合 summary

    ```html
          <details open>
            <summary>xxx</summary>
            <p>666666</p>
          </details>
    <!--注意details和 summary的配合使用  -->
    <!--可以实现一个 →标题， 然后点击标题，下来弹出p标签内的内容的效果，但是不能改变样式  -->
    ```

    

14. progress/meter

    ```html
          <progress min="0" max="100" value="60"></progress>
    <!--progress的含义是 表示进度，比如加载了多少百分比 -->
          <meter min="0" max="100" value="60" low="40" high="80"></meter>
    <!--meter的含义是 表示测量，比如测量的数字，多少人完成了该工作， -->
    ```

    

15. time- 把p标签里面的日期可以用time标签包裹起来

    ```html
    <time title="2-15"> Today</time>
    ```

16. mark -把内容高亮。

    ```html
    <mark title="2-15"> Today</mark>
    ```

    

    

---

## table标签 扩展

1.  回顾： 注意语义化的thead tbody和tfoot

   ```html
   <table>
     <thead>
       <tr>
         <th>Month</th>
         <th>Savings</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>January</td>
         <td>$100</td>
       </tr>
       <tr>
         <td>February</td>
         <td>$80</td>
       </tr>
     </tbody>
     <tfoot>
       <tr>
         <td>Sum</td>
         <td>$180</td>
       </tr>
     </tfoot>
   </table>
   ```

2. td属性之[rowspan](https://www.w3schools.com/tags/att_td_rowspan.asp)和 [colspan](https://www.w3schools.com/tags/att_td_colspan.asp)

   > rowspan=2 就说明 向下增生2个单位
   >
   > 同理，colspan就是向右增生x个单位

3. table css样式属性之 empty-cells：hide 隐藏空单元

   > ```css
   > table {
   >  empty-cells:hide;
   > }
   > //效果就是： 如果td里面没有内容，那就不显示该单元的边框。
   > ```

4. table css样式属性之border-collapse:collapse

   ```css
   table{
   	border-collapse:collapse;
   }
   //如果你的table、td、th设置了比如 border：solid 1px black这样的属性,那么他就会先多条边框线挤在一起，如果设置了 border-collapse:collapse,那么就会合并成一条线。
   ```

5. table css样式属性之   单元框内的斜线。

   ```css
   th{
   	border-top:1px solid red;
   }
   
   主要思路就是， 在 该单元格内 继续造一个div
   然后 把 div标签的 border-top 和 border-left设置出来，并且设置的150px，很大，形成
   一个div被2个三角形瓜分的形态，然后把 border设置成没有颜色，这样，线就出来了。
   然后把 划分的2块区域的描述文字，用em 或者i或者b标签包裹，然后用绝对定位定位出来即可。
   ```

6. table 操作之 运用colgroup和 col标签 完成整套列操作

   ```html
   <colgroup>
     <col span="2">  //对前两列进行统一操作
     <col span="2">	//对后两列进行统一操作
   </colgroup>
   ```

   

-----

## 表单form标签之扩展

1. 美化表单控件

   - 美化复选框

   - 美化上传按钮

     > 方法：首先你要用美化样式的雪碧图
     >
     > 1. 用label标签+checked伪类+隐藏input标签
     >
     >    ```html
     >    <label>
     >    	<input type="checkedbox">
     >      <div> 此处添加新样式</div>
     >    </label>
     >    ```
     >
     >    ```css
     >    label input{
     >      display:none;
     >    }
     >    
     >    label div{
     >      width:30px;
     >      height:30px;
     >      background:url() 0 -30px no-repeat;
     >    }
     >    
     >    label input:checked + div{
     >      background:url() -30px -30px no-repeat;
     >    }
     >    ```
     >
     >    
     >
     > 2. 用position配合opacity
     >
     >    ```html
     >    <div class="upload">
     >      <input type="file">
     >      <div>  背景图</div>
     >    </div>
     >    ```
     >
     >    ```css
     >    .upload{
     >      position:relative;
     >      width:80px;
     >      height:30px;
     >    }
     >    
     >    .upload input{
     >      opacity:0;
     >      position:absolute;
     >      left:0;
     >      top:0;
     >      width:100%;
     >      height:100%
     >    }
     >    .upload div{
     >      width:100%;
     >      height:100%;
     >      background:url() no-repeat 0 0;
     >    }
     >    ```
     >
     >    

2. HTML5新的input控件：

   - ```html
     <form action:"www.sss.com">
     	<input type="email">
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="url">
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="number">
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="range" min="0" max="10" value="5">
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="date">
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="month">
       //只能输入xx年的xx月
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="week">
         //只能输入xx年的第x周
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="search">
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="color">
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="tel">
       //PC端没有反应，在移动端点击之后自动调出数字键盘，而不是全键盘。
     	<input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.sss.com">
     	<input type="time">
     	<input type="submit">
     </form>
     ```

3. **新的form表单属性：**

   - ```html
     <form action:"www.baidu.com">
       <input type="text" name="username" autocomplete="off">
       //默认值为on， 当为on时，将开启在该input下面输入的历史记录列表，并且自动补全。
       <input type="submit">
     </form>
     ```
     
   - ```html
     <form action:"www.baidu.com">
       <input type="text" name="username" autofocus>
       //如果有这个属性，每次加载这个属性的时候，会自动把焦点钉在该input框内。
       <input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.baidu.com">
       <input type="text" name="username" required>
       //如果有这个属性，input提交的内容 不能为空。
       <input type="submit">
     </form>
     ```

   - ```html
     <form action:"www.baidu.com">
       <input type="text" name="username" pattern="\d+" pattern="[a-Z]+">
       //判断input里面的pattern正则表达式
       <input type="submit">
     </form>
     ```

4.  **form表单中的全后端的数据交互**

   - method属性

     ```html
     <form action:"www.baidu.com" method="GET" 或者 method="POST">
       <input type="text" name="username" >
       <input type="submit">
     </form>
     //action表示递交到的地址，一般是后台的php文件。
     //method里面有get和post两种方式，其中get的话会把 键值对 显示在 url中 "?"后面，所以不太安全，一般只用来做查询。
     //post是隐藏起来键值对的，也就是说隐藏 你的value和name值，所以比较安全。
     ```

   - enctypes属性

     ```html
     <form action:"1.php" method="GET" enctype="application/x-www-form-urlencoded"  或者 enctype="multipart/form-data">
       <input type="text" name="username" >
       <input type="submit">
     </form>
     //enctype="application/x-www-form-urlencoded"  是指提交的内容是 字符串
     //或者 enctype="multipart/form-data"> 是指提交的内容是文件格式，所以别忘了 input里type要变成 type="file"
     ```

   - name/value 数据的键值对

     ```html
     <input type="text" name="username">
     //在后台，传输数据是以 键值对的方式进行的，也就是 name+value， name就是包裹的名称，value是包裹里面的内容，所以在这里， input里，name的值为username， value的值就是我们input输入的值。
     ```

     5. 表单扩展 ---新标签

        -  fieldset 表单内的分组
        - legend 配合表单内的分组，给分组一个标题

        ```html
        一般可以这么写：
        
        <form action="  
          <fieldset>
            <legend ></legend>
            <label for="fname">First name:</label> //相当于input标签后面的字儿
            <input type="text" id="fname" name="fname">
          </fieldset>
        </form>
        
        
        1. fieldset会自动形成一个框
        2. 配合legend，可以给这个框做一个炫酷的结构标题。
        ```

        - optgroup

        ```html
        <label for="cars">Choose a car:</label>
        
        <select name="cars" id="cars">
          <optgroup label="Valuable Cars"></optgroup>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          // 在选项列表里面加入 optgroup标签，并配合其label属性，可以把你的下拉选择列表分类，更直观。
          <optgroup label="Prestige Cars"></optgroup>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        ```

     6. select标签 与   datalist标签的区别

        ```html
        Difference between <select> and <datalist> elements in HTML
        •<datalist> is a new element in HTML5. It is
        a text field that suggests the possible values
        from an available list. Users can also enter
        value that is not in the available list.
         <----------------------------!>
        <label for="browser">Choose your browser from the list:</label>
        <input list="browsers" name="browser" id="browser">
        
        <datalist id="browsers">
          <option value="Edge">
          <option value="Firefox">
          <option value="Chrome">
          <option value="Opera">
          <option value="Safari">
        </datalist>
         </-----------------------------!>
        • <select> provides a number of values from
        which user needs to select one. User
        cannot enter value that is not in the list.
          <----------------------------!>
        <label for="cars">Choose a car:</label>
        
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        </-----------------------------!>
        ```

        -----

        

        

        

## BFC 规范

1. 什么是bfc

   > ​	简单来说，就是拥有bfc机制的容器会看做一个独立的容器，内部不会出现一些诡异的块级渲染的bug, **内部**不受到外界元素的容器，**注意，是拥有bfc机制的容器的内部的子元素不受外部影响，而不是本身这个bfc元素不受外界影响**，非常重要这一点，我举个例子，比如margin叠加问题，也就是上下2个div一个margin-bottom一个margin-top如何触发bfc来规避他们的叠加bug，要么就全写在一个margin-top里面，要么的话，需要给2个div都套上父容器，把他们的父容器都做bfc化，比如overflow：hidden。这里有个误区：不是把这2个div bfc化，还是把他们的父容器bfc化，因为bfc化的本身父容器还是受外部影响的，并不能改变margin的叠加问题，**而是bfc容器内部的子容器不受外界影响，**可以理解为：脱离文档流的容器的内部的所有子元素都不受外部影响。
   >
   > :star:.**BFC容器内部的float元素不会导致BFC容器崩塌，也就是说BFC容器能计算float元素的宽高。**
   >
   > :star:**.BFC里面的子元素不会影响外面，外面也不影响里面。**

2. 如何触发bfc，会触发bfc的样式

   > ​	浮动元素，除了none以外的float
   >
   > ​    定位元素： 除了relative以外的position
   >
   > ​    display为 in'li'ne-block, table-cells, flex
   >
   > ​     溢出:  除了visible以外overflow,比如hidden，scroll，auto

3.  我们在什么样的场合下需要触发bfc机制来规避bug：

   > 1. margin叠加问题：一上一下，一个top一个bottom会取较大值算。
   >
   >    简单来说，凡是遇到要设置margin-top和margin-bottom的时候，必须**分别**（注意：是分别，不是在他们共同，如果没有，就现场造）在其父容器设置属性：
   >
   >    overflow:hidden,来避免出现 margin-topbottom的叠加问题。
   >
   > 2. margin传递问题：  嵌套结构下， 子元素 margin-top，父容器会跟着一起动。
   >
   >    解决方法：给父容器加overflow：hidden，让他变成bfc元素，那他的子元素就不受影响，随意变化。
   >
   > 3. 浮动问题：after伪类 ， 1，after 。2 content 3 display 4 clear：both
   >
   > 4. 左边固定+右边自适应效果（利用bfc实现）：
   >
   >    > 	1. 左边的div： float-left  +相同高度 +固定宽度
   >    >  	2. 右边的div：overflow：hidden +相同高度+ 不固定宽度
   >
   > 5. 利用4的原理，可以实现bootstrap的栅格系统。



----

## 浏览器前缀

1. 浏览器名称:  IE

   浏览器内核：Trident

   前缀：-ms-

2. 浏览器名称:Firefox

   浏览器内核：Gecko

   前缀：-moz-

3. 浏览器名称:Opera

   浏览器内核：Presto/Blink

   前缀：-o-

4. 浏览器名称: Chrome

   浏览器内核：Webkit/Blink

   前缀：-webkit-

5. 浏览器名称: Safari

   浏览器内核：Webkit

   前缀：-webkit-

6.  现在一般不用了，除非是旧的浏览器，没更新到最新版本的，比如：

   > ​	-webkit-animation:1s  name; 这样写在 css文件里面

7. 具体写法:

   > ```css
   > -webkit-transition: all 4s ease;
   > -moz-transition: all 4s ease;
   > -ms-transition: all 4s ease;
   > -o-transition: all 4s ease;
   > transition: all 4s ease;
   > 
   > //绝大多数时候都是写在 css3的里面的	
   > ```
   >

8.  **现阶段不用在乎这个知识点，在后面webpack使用中，可以自动工程化 解决兼容性问题。**

---

## transitions效果

1. transition-property: 规定设置过渡效果的**css**属性名称

2. transition-duration:规定完成过渡需要多少秒

3. transition-delay:定义过渡何时开始，可正可负

4. transition-timing-function:规定速度效果的速度曲线

   * 可选值：linear 匀速
   * ease（默认）逐渐慢下来
   * ease-in 越来越快
   * ease-out 越来越慢
   * ease-in-out 先快后慢
   * cubic-bezier

5. 一般来说，直接用复合写法。

   > ​	一般效果，如何实现？ --- hover+ transition

   ​	

   >  首先， 原本的div 先设置一下 transition：秒数
   >
   >  然后 要在该div上设置一个 hover，transition之后的样子就是这个hover的样子
   >
   > ```css
   > ul li{
   >     list-style-type: none;
   >     float: left;
   >     width: 60px;
   >     height: 60px;
   >     background: lightblue;
   >     text-align: center;
   >     line-height: 60px;
   >     transition: .5s;
   > }
   > ul li:hover{
   >     background: red;
   >     width:360px;
   > }
   > ```
   >
   > 如果需要 父div ：hover ： 子div这种情况的话：
   >
   > transition请加在 子div上：
   >
   > ```css
   > .box3{
   >     width: 130px;
   >     height: 120px;
   >     border: 1px solid black;
   >     margin: 100px auto;
   >   
   > 
   > 
   > }
   > 
   > .box4{
   >     width: 110px;
   >     height: 110px;
   >     background: red;
   >     transition: 2s;
   >  
   > }
   > 
   > .box3:hover .box4{
   >     width: 200px;
   > }
   > ```
   >
   > **总之就是一句话， transition这个属性要加在hover出来的那个div上，而不是鼠标悬停的那个div上**

---

## transform 效果

> :star:一般来说 如何实现：
>
> * hover + transition+ transform
>
> * hover 写法注意:  父类div ：hover 子类div
>
> * 在要transform的div上加上 transition来规定时间
>
> * 在要transform的div上加上 hover， 在hover里面写translate的位移量
>
>   ```css
>   .box1{
>       width: 300px;
>       height: 200px;
>       border: 1px solid black;
>       margin: 0 auto;
>   }
>   
>   .box2{
>       width: 100px;
>       height: 100px;
>       background: red;
>       transition: 2s;
>   }
>   
>   .box2:hover{
>       transform: translate(100px,100px);
>       background-color: black;
>   }
>   ```
>
>   

1. translate：位移

   > ​	 transform: translate(100px**,**100px);
   >
   > ​	 或者用 translateX 
   >
   > ​	translate Y
   >
   > ​	 translateZ (3d)
   >
   > ​	注意这个 x y 轴之间有个逗号

2. scale：缩放

   > ​	transfrom:scale(2,2);
   >
   > ​	scaleX
   >
   > ​	scaleY
   >
   > ​	scaleZ (3d)
   >
   >  	值1就是大小不变，2就是2倍，.5就是一半

3. rotate: 旋转

   > transform:rotate(-45deg)
   >
   > ​	rotateX(3d)
   >
   > ​	rotateY(3d)
   >
   > ​	rotateZ

4. skew: 斜切

   > ​	transform:skew(45deg , 0) 正值向左倾斜，负值向右倾斜
   >
   > ​	skewX
   >
   > ​	skewY

5. transform的注意事项：
   1·变形操作不会影响到其他元素。
   2·变形操作只能添加给块元素，但是不能添加给内联元素。
   3·复合写法，可以同时添加多个变形操作。
   执行是有顺序的，先执行后面的操作，再执行前面的操作。
   translate会受到rotate、scale、skew的影响

6. transform-origin:0 0;

   设置transform开始的基点，默认是center center，0  0就是左上角