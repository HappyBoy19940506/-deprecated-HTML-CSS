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
   >    或者 做好换算，不要同时出现top 和bottom，只出现一个就行。
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
   > 
   >     transition: .5s;
   > }
   > ul li:hover{
   >     background: red;
   >     width:360px;
   >    	transfrom:rotate(45deg);
   > }
   > ```
   >
   > 如果需要 父div ：hover ： 子div这种情况的话：
   >
   > transition请加在 子div上：
   >
   > ```css
   > .box3{
   > 
   > }
   > 
   > .box4{
   > 
   >     transition: 2s;
   >  
   > }
   > 
   > .box3:hover .box4{
   >     width: 200px;
   >   transfrom:rotate(45deg);
   > }
   > ```
   >
   > **总之就是一句话， transition这个属性要加在hover后面的那个div上，而不是鼠标悬停的那个div（父div）上**,**也不是 直接写在DIV:HOVER里面。**

---

## transform 效果

> :star:一般来说 如何实现：
>
> * hover + transition+ transform
>
> * hover有2种情况，一种是直接【div:hover】,一种是 【父div:hover:子div】
>
> * 简单型的话： transition写在div里，transform写在hover里。
>
> * 复杂型的话：【父div:hover:子div】里写transform，【div子】里写transistion。
>
> * 总结一句话，1带hover的地方一定不写transition,2 transition写在子div里，3transform一定写在带hover的里面。
>
>   ```css
>   .box1 :hover .box2{
>   
>       transform:translate(100px,100px);
>   }
>   
>   .box2{
>     transition:1s;
>   }
>   
>   //////////////////////////////要么是下面一种//////////////////////////////////
>   .box{
>   
>       transition: 2s;
>   }
>   
>   .box:hover{
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

   no study today

   ---

   ## animation css

   1. 单一样式:

      animation-name·设置动画的名字（自定义的）
      animation-duration：动画的持续时间
      animation-delay：动画的延迟时间
      animation-iteration-count：动画的重复次数，默认值就是1
      infinite无限次数
      animation-timing-function·动画的运动形式，比如ease ease in out之类的

   2. 注意事项：

      1. 默认情况下，播放完动画会停留在起始位置，注意是回到原点，不是往回再走一遍
      2. 可以写from to 也可以写 0%和100%

   3. 复合样式：

      animation: name 4s 2s infinite;

   4. ```css
      .class_name{
      -webkit-animation:move 1s -0.1s;
      }
      @keyframs move{
      0%{transform:translate(199px,0);opacity:0;}
      100%{transform:translate(199px,0);opacity:0;}
      }
      ```

   5. animation-fill-mode属性：

      animation-fill-mode：规定动画播放之前或之后，其动画效果是否可见。

      > ​	区别在于 要看是否存在animation-delay延迟播放。

      none〈默认值）：**在运动结束之后回到初始位置**，在延迟的情况下，让0％在延迟后生效.

      > ​	0%时候的关键帧的样式，在 delay执行后才生效。

      backwards：在延迟的情况下，让在延迟前生效

      > ​		0%时候的关键帧的样式，在 delay执行前就生效。

      forwards：在运动结束的之后，停到结束位置

      > ​	在运动结束的之后，停到结束位置

      both:backwards和forwards同时生效

      > ​	 在运动结束的之后，停到结束位置. 而且 0%时候的关键帧的样式，在 delay执行前就生效。

   6. animation-direction：属性定义是否应该轮流反向播放动画。
      alternate: 一次正向（0%~100%),一次反向(100%~0%).
      reverse：永远都是反向，从100%~0%.
      norma1〈默认值）：永远都是正向，从0%-100%.

----

## animate.css库

1. 现成的动画样式，不需要自己写了。

2. 先引用 animate.css

3. 再写class

   ```css
   <img class="animate tada infinite">
   ```

   

---

## transform之 3D transform

1. 典型的属性就是 rotateX rotateY ，但是rotateZ就是相当于普通的旋转了。

2. 如果效果不明显，请在父容器div上添加【景深】，perspective属性。值越小，效果越明显。但不能为负。

3. translate属性中， translateZ属于 3D位移效果,有点像 scale效果,注意和景深属性的大小.

4. scale属性中,scaleZ属于3d效果

5. transform-origin：center center -50px；  z轴上只能写数值，不能写单词。

6. perspective-origin: left --- 把照相机放到左侧的视角来观察浏览器

   perspective-origin: top right --- 把照相机放到  右上方的视角来观察浏览器

7.  3D写法:

   transfrom: scale3d(2,2,1.5)

   transform: translate3d(200px,300px,100px)

   transform:rotate3d(0，0，1，30deg) 四个值： x轴不变，y轴不变，z轴旋转30度。

8. backface-visibility： visible默认/hidden。 如果选择opacity的话能不能看到后面。和transition一样，不要和hover同时出现，而要写在子div里

9. transform-style：flat（默认值), 如果有3d效果的transform要选择 preserve-3d，产生一个三维空间

10. 总结：

    > 1. 要写transform3d的写法，或者 rotateX rotateY translateZ位置的属性值等等.
    > 2. 要设置 transform-style：preserve-3d 不然立体的话没有厚度。 此 加给本身。
    > 3. 有时候要设置 transform-origin：center center -50px；  z轴上只能写数值，不能写单词。此 加给本身。
    > 4. 要设置景深perspective：100px。不然没有3d效果，此加给 父容器。

---

##  3d翻转效果

技巧： 

+ 所有ul中的li用position：absolute定位的话，最后一个会出现在最上面，注意顺序层次。

+ 父类里面写： perspective， 

+ 子类里面写：transition和transform的初始状态，另外还要写背面隐藏backface

+ hover里面写： transform-style：3d 和 transform的终止形态

+ 效果构造： 第一张图是rotateY 0 --->rotateY 180， 外加背面隐藏

  ​					第二张图是从rotateY  负180 ----> rotate0， 外加背面隐藏

----

## CSS中background属性的扩展

1. background-size：背景图的尺寸大小
   * cover：覆盖。 就是等比放大，一定会填完填满整个div，多出来的部分自动隐藏
   * contain： 包含。也是等比放大，但是到边界就停止了，背景图会完整显示，至于能不能填满就不知道了
   * 或者直接设置数值，比如在设计loading bar的时候background-size：30px 30px
2. background-origin：背景图的填充位置
   * padding-box（默认）：背景图会出现在padding区域开始填充
   * border-box：背景图会出现在border区域开始填充
   * content-box：背景图会出现在content区域开始填充
   * 从外到内--- margin--border---padding---content
3. background-clip：背景图的裁切方式
   - padding-box：如果不选择 no-repeat，他会从padding区域开始repeat复制
   - border-box（默认）：如果不选择 no-repeat，他会从border区域开始repeat复制
   - content-box：如果不选择 no-repeat，他会从content区域开始repeat复制



---

## background-image中的css渐变

1. 就像rgb那种光谱效果一样

2. ```css
   background-image:linear-gradient(red,blue,yellow,green); //默认从上到下
   background-image:linear-gradient(to top red,blue,yellow,green); //设置从下到上
   background-image:linear-gradient(to right red,blue,yellow,green); //设置从左到右
   background-image:linear-gradient(0deg,red,blue,yellow,green); //0度是从下往上，和默认相反
   background-image:linear-gradient(45deg,red,blue,yellow,green); //从底开始顺时针
   background-image:linear-gradient(-45deg,red,blue,yellow,green); //从底开始逆时针
   background-image:linear-gradient(red 25%,blue 75%); //设置百分比的话就没有渐变效果了，适合用来做条纹。比如
    background-image: linear-gradient(to right bottom,yellow 0%,yellow 25%,black 25%,black 50%,yellow 50%,yellow 75%,black 75%,black 100%);
   的意是就是 yellow是从0-25%， black从25%-50%，这段内只存在yellow，或只存在black
   ```

3. 还有一种不常用，叫 radial-gradient(red,blue) 就是从中心点开始的光谱



---

## Loading 加载条 的实现。

1. <prgress> 标签可以直接实现进度条，但不是动态的

2. 动态的那种 斜杠形的 加载条不停的 向右传递带的实现方法。

   ```html
       <div class="loading_bar2">
       </div>
   ```

   ```css
   .loading_bar2{
       width: 400px;
       height: 40px;
       border:1px solid black;
       margin: 200px auto;
       background-image: linear-gradient(to right bottom,yellow 0%,yellow 25%,black 25%,black 50%,yellow 50%,yellow 75%,black 75%,black 100%);
       background-size: 40px;
       background-repeat: repeat;
       animation: moveLoadingBar 3s infinite linear;
   }
   
   @keyframes moveLoadingBar{
       0%{background-position: 0 0;}
       100%{background-position:400px 0 ;}
   }
   ```

3. 还有自制的更加炫酷的动态光条效果loading bar：

   ```css
   .loading_bar{
       width: 400px;
       height: 40px;
       border: 1px solid black;
       margin : 200px auto;
       animation: moves 3s infinite linear;
       background-image: linear-gradient(to right, blue,red,blue);
       background-size:400px 40px;
       background-repeat: repeat;
   
   }
   
   @keyframes moves{
       0%{background-position: 0 0;}
       100%{background-position:400px 0 ;}
   }
   
   ```


4.  总之原理就是：

   > * 在div里设置
   >   * background-image：linear-gradinet(设置方向，设置渐变形式，条形用%，渐变直接写，注意收尾颜色呼应)
   >   * background-size：\*px \*px ，\* 就是bar的高度
   >   * bacground-repeat ：no-repeat
   >   * 设置animation： name 3s infinite **linear**
   > * @keyframes设置动画
   >   - 注意格式 0%{} 这个后面没有；分号，写了的话会动画失效
   >   - 然后设置 0%{} 以及100%{}，分别设置background-position属性
   >   - 值分别为0 0， 和 bar的宽度和0
   >   - 这样就可以连贯动起来了

   



   

   

## 小图标进阶---@font-face 直接用icon-font

   1. 首先了解下 通过class来调用 icon-font的底层原理

      > ​	其实就是自己命名了一个class名字，然后该class有一个after伪元素，content内容就是字体的内容，然后通过@font-face定义 font-family里面的字体库，相当于调用了一个字体。

   2. 步骤：

      + 下载css文件，用 阿里的那个项目保管更方便
      + 然后放到项目列表里面
      + 然后link标签引用
      + 然后调用的时候，直接class就可以了
      + 可以当做字体一样修改大小和颜色，很方便。
      + 如果是彩色的，是svg图，引入方式不同，具体看demo.html
      + 和如何使用 animate.css很像

   

------

## CSS3 文字阴影

   ```css
   div{
     text-shadow:10px 10px 30px blue  ;
    //阴影的默认颜色跟文字的颜色相同
    //10px 10px就是 想x轴偏移10px，想y轴偏移10px
    // 第三个值是模糊值，越大越模糊
    //可以设置多原因，用逗号分隔
   }
   ```

   

## CSS 盒子阴影

```css
div{
  box-shadow:10px 10px;
  //x轴和y轴的偏移量，默认是黑色背景。
  box-shadow:10px 10px 10px;
  //第三个10px就是 模糊值。
  box-shadow:10px 10px 10px 10px；
  //第四个10px就是 阴影的范围，越大会越大。
  box-shadow:10px 10px 10px 10px blue;
  //背景颜色改成蓝色。
  box-shadow:10px 10px 10px 10px blue inset;
  //改成inset就是内阴影，默认是外阴影。但是如果设置outset，反而会什么效果都没有。
  
  ////可以设置多阴影，用逗号分隔
  ///可以设置多阴影，用逗号分隔
}
```



```css
实现   商品列表 悬停hover后 浮起来的效果：
技术要点：
1.  通过hover +transition来实现动态效果
2.   通过定位，原div设置top 0 ，hover后设置top -3px来实现 向上移动的效果
3.   通过box-shadow：0px 10px 10px 3px #ccc来设置一个 下边和两边的灰色阴影
.mb{
    border: 1px solid black;
    width: 398px;
    margin: 100px 100px;
    transition: 1s;
    position: relative;
    top: 0;
}

img{
    display: block;
}

.mb:hover{
    top:-3px;
    box-shadow: 0px 10px 10px 3px  #ccc ;
}
```





## mask遮罩

```css
1. mask目前还没有标准化，需要添加浏览器前缀：-webkit-mask:
2. mask肯定都是没有背景的图片，所以图片格式一定是png;
3.有哪些属性呢？
div{
    background:url('./img.jpg');
  	-webkit-mask:url('mask/png') no-repeat center center /200px 200px;
  //设置no-repeat， center center是位置， 用/分隔， 后面200px 200px为size大小
}
///可以设置多遮罩，用逗号分隔，后面的遮罩在下面
```

---

## CSS3倒影

```css
box-reflect操作
1. 目前还没有标准化，需要添加浏览器前缀：-webkit-box-reflect:
2.有那些属性？
.box{-webkit-box-reflect:below 20px;}
//设置倒影在below下方， 并且距离20px
.box{-webkit-box-reflect:below 20px url('mask.png');}
//设置倒影在below下方， 并且距离20px，并且设置遮罩mask.png
.box{-webkit-box-reflect:below 20px linear-gradient(rgba(255,255,255,0) 50% ,rgba(255,255,255,1) 100%);}
//设置倒影在below下方， 并且距离20px，并且设置颜色渐变，从黑慢慢变白。
3.补充：
因为box-reflect还没有标准化，所以如果单纯想要图片翻转的话可以：
div{ transform:scaleX(-1)} 左右翻转
div{ transform:scaleY(-1)} 上下翻转
div{ transform:scale(-1)} 全部翻转
```



----



## CSS3中的blur模糊

```css
img{
  filter:blur(10px);
}

10px值越大，模糊越大
```





---

## CSS中的 calc就算

用途： 当同时出现100%和 100px这种单位不同的时候，可以用calc自动换算。

比如我要在一个div中始终不管父div长度多少，我要求始终右边有一个100px的子div。此时可以：

```css
.box1{
  width:calc(100%-100px;)
}
那么不管 父容器长度是多少，反正100%换算成***px后，box1的长度是一个变量，然后box2永远是100px；
```

---

## CSS3报纸分栏布局属性

```css
.box{
 width:600px;
 height:400px;
 colum-count:4;
  //分成四栏
 colum-width:100px;
  // 每栏100px，分成几个自动
 ** **  ** 特别注意** ** ** ** ，  
 ** ** colum-count:4;** ** 
 ** ** 和** ** ** 
** **  colum-width:100px;** ** ** 
** ** 只能二选一，两个是冲突的，只能选择一个生效。
  ** ** ** ** ** ** ** ** ** ** ** ** ** ** 
 colum-gap:40px;
  //每个column之间的间隔。
 
 colum-rule:1px red dashed;
  //每个column之间的 边界线
}


.box h2{
  colum-span:all; 
  text-algin:center
    //将某一段设置成版头，并居中。
}
```

----

## 伪元素和伪类

**pseudo class VS pseudo element**

1. 如何判断? 

   > ​	到底有没有创建这个虚拟容器？
   >
   >  pseudo class是不创建虚拟容器的，直接改变class本身的样式，比如hover，直接改变hover里所有内容的样式。
   >
   > 但是 pseduo element是额外创建了一个虚拟容器的，比如：：after 或者  ::selection， 是直接后面创建了一个虚拟的类似span的标签，然后更改的是里面虚拟容器的样式
   >
   > 所以，after 和before 一定要写成 ::after 和  ：：before

2. 所以，after 和before 一定要写成 ::after 和  ：：before，是双冒号。

----

## CSS Hack and Compatibility

1. 针对老旧浏览器做兼容性处理。HTML结构方面大家都一样，但是CSS每家都不一样，所以各自渲染的方式都不同。

2. 如何使用？

   - CSS属性前缀法
   - 选择器前缀法
   - IE条件注释法

3. CSS属性前缀法（只对IE有用），写一些前缀，只有特定的浏览器才能读的懂这些前缀，也就是才能显示前缀后面的对应的样式。

   > ​	前缀标识			只能兼容的浏览器（只能对IE生效，用Chrome什么前缀都没用）
   >
   > ​    _						 IE6 
   >
   > ​	\+  	\*				IE6 IE7 
   >
   > ===写法：
   >
   > _background:red;
   >
   > *background:blue;
   >
   > =======
   >
   > ​	\9						IE6 IE7 IE8 IE9
   >
   > ​	\0						IE8 IE9 IE10 IE11
   >
   > ===写法：
   >
   > background:red\9;
   >
   > background:blue\0;
   >
   > =======
   >
   > 注意区分。

4. 选择器前缀法。（只对IE有用)

   > ​	前缀标识			只能兼容的浏览器（只能对IE生效，用Chrome什么前缀都没用）
   >
   > ​    \*html						 IE6 
   >
   > ​	\*+html					 IE7
   >
   > ​    :root                       IE9以上以及现代高级浏览器
   >
   > ===写法：
   >
   > *html .box{background:red;}
   >
   > :root .box{background:red;}
   >
   > ======= 
   
5.  IE条件注释法。

   > ​	这也是一种只有IE浏览器生效的前缀法，微软官方推荐的Hack方式。
   >
   > 前缀标识			只能兼容的浏览器（只能对IE生效，用Chrome什么前缀都没用）
   >
   > ​    <!--[if IE]>	...<![endif]-->						 IE7 IE8 IE9 IE10 （但是再以上就不支持注释法了）
   >
   > ​	<!--[if IE7]>...<![endif]-->							 IE7
   >
   > ​	<!--[if lte(小于等于) IE7]>	...<![endif]-->					 IE7 以下
   >
   > ​	<!--[if ! IE7]>	...<![endif]-->					 非IE7
   >
   >  里面的... 是html代码，这是写在html里面的，上面2个是写在css里面的。

6. ** **IE浏览器常见低版本IE浏览器BUG****

   + 透明度BUG

     > ​	IE6 IE7 IE8 的浏览器不支持 opactiy:0.5这种属性
     >
     >  解决方案: 写成 filter:alpha(opacity=50);

   + IE6下面的双边距BUG

     > ​	IE6 下如果是 .box{float:left  ; width:100px ; height:100px; margin-left:100px;}
     >
     >  浮动+margin-left 就会出现诡异的两倍左margin效果，左边会变成2倍margin-left，即200px
     >
     >  解决方案： 在后面加一条  \_display:inline;  注意下划线 \_  ，其目的是只对 IE6生效。

   + IE6下的最小高度BUG

     > ​	在IE6下，一个div的最小高度为19px。
     >
     >   所以在IE6下，如果你设置height小于19的话，还是以19px算。
     >
     > 解决方案：加上 overflow:hidden

   + 图片的边框BUG

     > ​	在IE6 IE7 IE8 IE9里面，
     >
     >  如果写\<a>  \<img>    \</a>
     >
     >  引入图片做链接的时候，图片会出现一圈边框。
     >
     > 解决方案：在img标签的css里加上 border:none;

7.  渐进增强 和 优雅降级

   > ​	渐进增强 这个pte里面有考到。
   >
   >  就是说 先针对 低版本进行架构，保证最基本的功能，然后再针对高级浏览器进行效果的实现
   >
   > 优雅降级 相反。
   >
   > 一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。





## CSS高级布局

1. 之前学过简单的布局： 通栏+ 版心

2. 现在学一点高级的布局：

   - 等高布局

     > ​	用途：如何让多列div的高度 取决于最高的一个div。 宽度是任意的，无所谓。
     >
     > ​    技巧： 首先 肯定每列都是float的，其次父容器设置overflow:hidden;
     >
     > ​				然后每列如何实现 不管内容如何，永远等高呢？永远和最多内容的那一行等高呢？
     >
     > ​				方法就是把每个div 都设置 一个 margin-bottom：\***px 和 padding-bottom：\***px,  里面*值相等。
     >
     >    **特别注意： 子div里面不能设置高度，要让他自适应内容的高度。**你设置了高度，还用得着自适应吗？？

   - 双飞翼布局

     > ​	用途：一般用在 三列布局，左右两列固定宽和高，中间高度固定，宽度自适应的时候，即 **中间的div，高度固定，宽度无论如何变化，左右两列的div不会有任何宽高改变**。比如：后台管理系统。
     >
     >  1. BFC方法
     >
     >  2. 定位，左边定位，右边定位，中间margin：0 auto；
     >
     >  3. 浮动（双飞翼布局、圣杯布局）
     >
     >  4. flex弹性布局
     >
     >     :star:这里重点说下 第三种，利用**浮动实现双飞翼布局**。
     >
     >     - 首先，三个div要注意顺序，必须先写center，所以是 div.center   / div.left / div.right
     >
     >     - 其次，让三个div都要float：left浮动
     >
     >     - 然后 让 div.left和div.right通过margin负值，移动到制定的位置
     >
     >     - 最后，把center里面的内容用margin的办法固定在中间。
     >
     >       ```css
     >       .left {
     >        float:left;
     >        width:100px;
     >        height:200px;
     >        margin-left:-100%;
     >         //直接移动到最左边去了
     >       }
     >       .right {
     >        float:left;
     >        width:100px;
     >        height:200px;
     >        margin-left:-150px;
     >         //直接移动到最右边， -150怎么来的？ 相当于负的 div宽度。
     >       }
     >       
     >               .center{
     >                   height: 800px;
     >                   width: 100%;
     >                   /* **特别注意： 中间div以及他的内容div里面不能设置宽度，要设置称100%。**如果你设置了宽度，还用得着自适应吗？？ */
     >                   
     >                   float: left;
     >               }
     >               .neirong{
     >                   width: 100%;
     >                   height: 200px;
     >                   
     >                   margin:0 150px 0 100px;这个数值其实就是 左div 和 右 div的宽度。
     >               }
     >       ```
     >
     >          **特别注意： 中间div以及他的内容div里面不能设置宽度，要设置称100%。**如果你设置了宽度，还用得着自适应吗？？

   - 圣杯布局  基本上双飞翼一样

   - 其实现在，都用flex布局了，请看下面一节

     ## 







##  牛逼的来了， Flex布局

1. display：flex； 把该元素变成flex元素，此时该容器变成flex容器，float浮动和vertical-align通通失效。

2. flex-direction：row/ column; 规定主轴方向， 主轴方向为row，水平排列；主轴方向为column，垂直排列；

3. justify-content: 

   - flex-start  从头部对齐 （默认）

   - flex-end 尾部对齐

   - center 中心对齐

   - space-between  两端对齐

   - space-around 自动分配间隔，使得每个div间隔相同px

     

4. flex-wrap: 沿着主轴方向排列，如果排满了怎么处理

   - nowrap 默认：不移到下一行或下一列，直接溢出父div
   - wrap：移到下一行或下一列
   - warp-reverse：移到下一行或下一列，溢出的那个移反而在第一行或第一列

5. align-items: 和主轴对应的那个交叉轴上的定位，而且可以用在任何元素上

   - stretch

   - center  默认

   - flex-start

   - flex-end

   - baseline

     > ​	这个align-items是用在父容器上的，如果想用在子元素上单独修改，请用**align-self**来分别定制修改。

   ---

   牛逼的来了：

   ----

   

6. **flex-grow:父容器剩余空间的瓜分比例**--> 在父容器规定尺寸的情况下，部分子容器已经固定尺寸(没有也无所谓），（比如主轴是row，就指的是width，主轴是column，就指的是height）。剩余部分的子容器并未设置相应尺寸的时候，用该属性写在他们的css上可以自动填充剩余空间。 

   如果有2个不确定的子容器，那一个设置flex-grow：1，另一个设置flex-grow：2的意思就是剩余部分按1：2的比例划分给他们。

7. flex-shrink:元素的多余的剩余空间剩余比例

8. 所以，之前的双飞翼布局，我们可以直接：

   ```css
   html,body{height: 100%;}		        
   *{margin:0; padding:0;}
           .header{ height: 300px; background: red;}
           .container{
               display: flex;
               flex-direction: row;
               justify-content:space-around;
             //相当于做了个浮动，把所有子元素全部row排列
               width: 100%;
   						//注意，要固定父容器宽度
           }
           .left{
               width: 300px;
               height: 500px;
               background: black;
         	//固定尺寸
       
           }
   
           .center{
               height: 800px;
               flex-grow: 1;
               background: grey;
           //不设置宽度，要让他自适应，瓜分剩余的宽度 
           }
         
   
   			 .right{
               width: 300px;
               height: 500px;
               background: yellow;
           //固定尺寸
           }
   ```



----

## 用Flex布局完成 手机页面布局

- 要点1： body设置 display: flex; **height：100%**
              flex-direction: column;

- html 和 body设置 **height：100%**

- 要点2: 主体部分直接设置: flex-grow:1

- 要点3：设置footer： 比如60px；

- 其实还有解决方案，比如设置main的padding-top：60px来填充一下。然后position：fixed

  

----

## 后台管理界面技巧知识点

1. 如果想把iconfont旋转，可以用 tranform:rotate,但是 注意必须添加 display：inline-block，因为transform不能对行内元素使用。
2. **当css样式只应用于一个元素时，使用id来定义**， 比如header，main，footer请用id。
3. 做后台管理系统，不用写container-fluid和container，直接写 header然后接class=main就行。就算要写，一定要注意 height：100%传递。**相邻的父类必须要是100%或者px, 不可以不写**。
4. 注意要写 html, height：100%，而且**百分比的话 必须相邻最近的父类就要有100%或者px，否则会失效。** 看2.
5. 注意header下面的div高度要设置为 calc(100%  -  header的高度）。 **注意， 负号两边要留点距离否则会失效**，这么做的目的是让整个页面不出现滚动条。header+div.main完美正好是 100%的浏览器高度。但是，相反地，你写：：after，：hover这些的时候，冒号要紧贴着，不然也不起效。
6. 用flex做，左边固定宽度，右边用 flex-grow:1 来自适应宽度。
7. 中心区域，设置高度为 calc(100% -  上高度  - 下高度)。并且设置 overflow:auto 这样内容过多时，可以出现滚动条。
8. h5标签如果写错，就不要乱改了，写完css之后再去改tag很有可能出现问题，比如想把div改成section，如果你css里面直接写了 section的 tag选择器的话，就很容易出问题。
9. 从易于维护的角度出发，写css的时候，想好结构再写，把一大类的css写在一块，不要东一块西一块，不是按照总分写法写，而是 一个div里面写出所有class。
10. ul li的flex布局中，因为ul不经常写height和width值，所以很多时候会造成align-items：center失效，因为align-items是交叉轴上的定位，如果你不设置height或者width值，你在设置row或者column的direction的时候，就没有交叉轴。
11. 注意，很多时候 写li.active的时候要注意 选择器 "li.active" 贴在一起写才有用，你分开写，意思是li下面的叫 active类的另一个div，就选不到了。别粗心搞错了。
12. 在设置搜索历史记录的时候， 如果不满一排四个，只有三个，这三应该是 等间距排列，但是不可以太稀释，怎么做？ 在后面添加一个伪类，然后 看不见，并且自适应 剩余宽度就行。但是具体怎么做，我还不清楚。
13. 在做 三个按钮 每点击一个劲就会跳出相应界面的功能里面， 我们会使用 display none 把几个遮起来，再把一个直接display：block显示，其中我们要注意， 设置display：none，会写到： .className>div 这样来遮柱 classname这个div下所有的相邻div，为什么一定要写”>“呢？ 如果不写，你后面孙子div只要出现了div这个名字就会被遮住，就惨了！或者你直接 classname下面每个div都给一个class 名字，然后分别在他们的css里面写 display none也可以。
14.  如何把一段字，比如input里面的placehoder里面的字，稍微往右移动一点，可以用text-indent：19px
15. 如何选中一个框体 取消默认样式的那种蓝色边框： outline：none
16. button标签的默认样式，鼠标移动上去是箭头，所以一般搜索框，要变成pointer
17. label标签的使用，如果你想用label标签直接包住input标签来达到效果的话，请不要写 label里面的 for属性，写了的话 值为空，会失效。
18. 对于 cusior：pointer的设置要注意，普通div设置无所谓，但是当出现 层叠结构，比如有div被display：none之后的话，必须在最表层，也就是能看到的那个div上加cursor：pointer否则是不生效的。

----

## 吃大亏 绝对路径 相对路径

学的不扎实：绝对路径，相对路径

> ​	 在Linux里面, cd .. 是回到根目录。 但是不存在 什么 cd .   这个命令。
>
> ​    在url（）里面，要注意 ./imgs 和imgs直接写没区别， ./ 意思就是当前这一层。
>
> ​    比如你在css里面写background，如果css在css文件夹里，img在imgs文件夹里的话，注意很多时候是 ../imgs/a.png ，是两个点！！！！