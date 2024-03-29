#                         HTML5&CSS3_learning notes

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
     <col span="2">	//对后两列进行统一操作,因为前面有个span2了，所以这个span2相当于span3-4
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

   - **flex-start**  从头部对齐 （默认） **特别注意，要写flex，直接写start没用，和下面grid区分开来**

   - **flex-end** 尾部对齐**特别注意，要写flex，直接写start没用，和下面grid区分开来**

   - center 中心对齐

   - space-between  两端对齐

   - space-around 自动分配间隔，使得每个div间隔相同px

     

4. flex-wrap: 沿着主轴方向排列，如果排满了怎么处理

   - nowrap 默认：不移到下一行或下一列，直接溢出父div
   - wrap：移到下一行或下一列
   - warp-reverse：移到下一行或下一列，溢出的那个移反而在第一行或第一列

5. align-items: 和主轴对应的那个交叉轴上的定位，

   - stretch
   - center  默认
   - **flex-start* ***特别注意，要写flex，直接写start没用，和下面grid区分开来**
   - **flex-end** **特别注意，要写flex，直接写start没用，和下面grid区分开来**
   - **发现了吗？ align-items是没有space-between这些值的，不过也好理解**

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
19. 放大--》 ctrl+ 加号，相当于 模拟分辨率小的屏幕，小到极限（比如限定的宽度），就错乱了，触发响应式
20. 缩放—》 ctrl+ 减号。相当于模拟分辨率大的屏幕，字儿变小了，相当于换到了更大的屏幕，可以用来检测是否自适应。
21. table简单的自适应，不需要flex布局，不需要计算百分比，不需要写css，直接在table标签下面的 第一个tr也就是 th里面直接 像写style一样，写width就行。可以直接写width=12px的。
22. 有个需求：看起来很唬人，感觉很复杂，其实特别傻逼： 说一个div要根据里面字体的大小和长度作相应变换，比如 一排div，有的div里面有2个字，有的有三个字，比如 ”首页，下一页，第一页，第二页，第三页，最后一页“的那种表格浏览。如果根据里面不同的字 让div呈现出不同大小，其实他妈的本来就是根据div里面不同的字呈现不同大小的，只要你不设置固定宽高，然后我们只需要加点padding上下左右就可以任意改变字在div里面的位置了。通过padding来变相的改变其位置。

----

## 再谈-绝对路径 相对路径

学的不扎实：绝对路径，相对路径

> ​	 在Linux里面, cd .. 是回到根目录。 但是不存在 什么 cd .   这个命令。
>
> ​    在url（）里面，要注意 ./imgs 和imgs直接写没区别， ./ 意思就是当前这一层。
>
> ​    比如你在css里面写background，如果css在css文件夹里，img在imgs文件夹里的话，注意很多时候是 ../imgs/a.png ，是两个点！！！！
>
> 





-------

## grid 网格布局

1. flex布局只能做一维布局，比如说 有两排列表，你就只能一排一排的设置，但是grid网格布局，就可以同时设置两排。或者有 左边2个div，右边一个div的就比较麻烦。

2. 我个人的经验是: 大的布局，大块的div，分布很不等分，而且数量也比较少的话， 一般放在大的一维上，比如移动端整体架构，所以用flex。 小的部分 比如 items列表的话，用grid来细分。

3. grid布局就是一个二维布局，他的横纵轴同时存在。

4. 属性：

   - display:grid  

     > ​	不多说

   - grid-template-columns

     > 在列上设置几列，可以写 像素， 也可以写百分比，或者自适应写auto
     >
     > grid-template-columns： 100px auto 25% ; 这就是分三列的意思。	

   - grid-template-rows

     > ​	更多时候，我们会用一种 叫fr的单位来写， 1fr就相当于 一个div flex-grow的意思
     >
     >  叫网格剩余空间百分比。
     >
     > 
     >
     >  所以，比如你要四等分，你当然可以写 grid-template-columns:25% 25% 25% 25%;
     >
     > 但是，你三等分的时候百分比除不尽了啊，写什么呢，你可以写 ：
     >
     > grid-template-columns : 1fr 1fr 1fr;

   - 有时候 比如要分成一个 6*3的大grid，你总不能写 6个 1fr 在 row上吧，

     > ​	所以，我们可以用 repeat()来简写， 写6个1fr，可以简写成
     >
     >   grid-template-columns: repeat (6,1fr);

   - grid-template-areas: 不划分9等分，比如是 上面一个长方形，下面2个长方形这种怎么做呢

     > ​	1.	首先，父类 不多说display:grid肯定要。
     >
     > ​	2.	然后，不用写grid-template-rows/columns了， 而是用grid-template-ares:
     >
     >    **然后注意加 每行的引号：**
     >
     >  "a1  a1 a1 a1"
     >
     >  "a2 a3 a3 a5"
     >
     > "a2  a4  a4 a5"
     >
     > 3. 然后你可以看得出来这个里面 有5个子div，这时候去父类下面造5个小的div
     >
     > 4. 每个子div需要用 grid-area: name来绑定你之前上面写的a1 a2 a5绑定起来，我一般就和div 名字一样了，**需要特别注意的是，这里的grid-area：后面不可以加引号，否则会失效！**
     >
     > 5. 完整代码：
     >
     >    ```css
     >    //    <div class="grid_demo">
     >          <div class="nav">nav</div>
     >          <div class="side1">side1</div>
     >          <div class="mid1">mid1</div>
     >          <div class="mid2">mid2</div>
     >          <div class="side2">side2</div>
     >        </div>
     >    //
     >    
     >    .grid_demo{
     >        width: 500px;
     >        height: 500px;
     >        border:1px solid red;
     >        /* 如何显示 不是九等分的那种布局呢 */
     >        display: grid;
     >        grid-template-areas: 
     >        'nav nav nav nav'
     >        'side1 mid1 mid1 side2'
     >        'side1 mid2 mid2 side2'
     >        ;
     >    }
     >    
     >    .grid_demo .nav{
     >        grid-area: nav;
     >        background: red;
     >    }
     >    
     >    .grid_demo .side1{
     >        grid-area: side1;
     >        background: rgb(72, 160, 38);
     >    }
     >    
     >    
     >    .grid_demo .side2{
     >        grid-area: side2;
     >        background: rgb(74, 190, 89);
     >    }
     >    
     >    
     >    .grid_demo .mid1{
     >        grid-area: mid1;
     >        background: rgb(112, 68, 170);
     >    }
     >     
     >    .grid_demo .mid2{
     >        grid-area: mid2;
     >        background: rgb(92, 57, 57);
     >    }
     >    ```
     >
     > 6. 注意区分什么时候用 普通的grid-tempalte-row 什么时候用复杂的grid-template-ares
     >
     >    说白了很好区分，就是看实际需求，如果是9个格子，你用areas的话你就要写a1-a9，肯定很麻烦，最好的办法就是rows repeat（9，1fr）/coloumns repeat（9，1fr）这样写。

   - 暂时gird无法实现不规则，非矩形的div处理

   - 不推荐用复合写法

   - grid-row-gap  和 grid-column-gap

     > ​	就是设置整个网格里面每行或者每列的gap大小
     >
     > ​    写在 父div里面，设置的是整个网格。

   - justify-items /////   align-items////// place-items复合写法  -**-写在父div里的**，网格里面的内容在网格里面怎么分布

     > ​	在grid中，justify-items指的是每个网格里边儿, 的**内容**，在**水平**方向的分布
     >
     > ​    而align-items指的是，在每个网格里边的 **内容**，在**垂直**方向的分布
     >
     > **特别注意，写center无所谓，start和end是 不带flex的，和flex区分开**

   - justify-content/////   align-content////// place-contents复合写法---**写在父div里的**，网格怎么分布

     > ​	在grid中，justify-contents指的是每个网格 在所在 那一行，也就是水平方向的分布。
     >
     >   而align-contents指的是每个网格所在列，垂直方向的分布。
     >
     >  也就是说， 网格一定要比父容器小，产生空隙才可以有效果。
     >
     > **特别注意，写center无所谓，start和end是 不带flex的，和flex区分开**

   - 切记，flex布局里只有 justify content-和 align-items，却没有justify items和align-content.

     **而且语义是不同的。** **一个写的是flex-start，一个写的是start，**而且同样的属性名，意思是不一样的。

     flex里面 justify-content意思就是默认方向的位置调整

     align-items是网格在交叉轴上的调整

     都是都指的是  网格本身的位置，和里面的内容没有任何关系，这点和grid中是完全不一样的。

     **但是 在grid里面，这些属性是另外的意思：**

     ​	在二维里，也就是在grid里。

     1. 首先要明确什么是justify： 水平方向的调整叫justify

     2. 其次要明确什么是align：垂直方向的调整叫align

        ---再次强调，这里面的值 写start /end/space 而不是 flex-start和flex-end

        而且 justify-content 和align-content在这里的意思是： 水平和垂直方向上 网格本身的排版，言下之意就是 这些网格在父容器中一定要有剩余空间才会看出效果，比如你用了 1fr，这种剩余空间单位，他就直接占满了，你写这个是没有任何效果的。而且要明确一点的是，网格划分的区域和div没有直接关系，在网格划分区域里的div并不一定是占满整个网格子区域的，所以才会有下面的items系列的属性。

        **而 justify-items和align-items在grid里指的是网格容器内部的 内容的 位置定位。这种功能和flex里是完全不同的。flex里的align-itmes值得是 网格本身而不是网格内部的内容。**

        

   - 一些值： space-around space-evenly space-between的区别

     - **space-around 中间之间的空隙是 左右两边的2倍**
     - **space-between 两端对齐**
     - **space-evenly 所有空白都平均分配**

   - 单独网格内的元素在网格内的位置；

     可以用

     > ​	justify-self 和align-self来调整，记住，这个是写在 子div元素上哦。

---

## 关于meta标签里的viewport

1. ```html
   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   
   ```

2. 一开始对于这款meta标签里的viewport的作用真很模糊，感觉和 自适应布局之间的关系 傻傻分不清楚，感觉貌似都是对移动端的尺寸和显示方面的优化，比如在缩小尺寸的时候如何表现的更好，但是就是说不清楚区别，也不知道有什么具体的联系和差异。

3. 搞了2天查了很多资料说的都很繁琐，只有[这里](https://www.w3schools.com/css/css_rwd_viewport.asp) ，说的还算 简单明了，我再说一点题外话，就是:

   > ​	你和别人讲一个东西，如何让他听得懂，而不是越听越糊涂？那就是你不能用更高级的知识 或者 他更加不知道的知识 去讲解一个 更低维的知识， 你为了讲一个知识，引出了更多他不懂的知识，他就会越听越乱。这就是网上搜一些技巧时候经常遇到的通病，不够言简意赅，屁话一大堆，显摆技术成分大于真正想表达的。

4. 说会正题，我说说这两者在我眼中的区别。

   * 首先， `自适应布局` `响应式布局` 主要``说``的是 页面显示尺寸和大小比例，他是 显示层面的块结构以及各种元素的大小概念，但是meta viewport说的是实际在物理层面上，像素点大小 规避一些显示问题的解决办法，是不一样的。

   * 其次，什么是meta viewport，干什么的？ 但是 meta viewport是最早出现在 移动端浏览器的，他就是为移动端浏览器量身定做的， 因为有些时候 移动端屏幕很小，分辨率却比显示器还大，你不写这句话，你可以想象把windows的桌面放到retina屏幕上的效果,桌面图标什么的就特别特别小,那是因为显示器分辨率本身很高,像素点够多,支持小到人眼看不见的像素. 

   * 所以这句话唯一的作用，就是设置一个虚假的电子分辨率，让他和实际分辨率成一定的比例，来让实际网页上的1px的点，在手机屏幕上其实现实的是 dpr倍数的像素，比如 其实显示出来的是5px，这样他就不嫌小了，但是因为他分辨率高，其实你看不出来他变大或者变粗了，写meta viewport就是在物理层面自适应缩放像素比例，让他在移动端现实 虚拟像素大小。

   * 因为你测试的显示器像素是物理像素是顶死的，所以你写不写这句话 ，测也测不出来有什么改变。你要发在真正的手机才能看得出效果。

   * 没有这句话，自适应啥的无从谈起，因为分辨率太高，我手机屏幕上直接半个手指那么长的高度，加完整的宽度就可以显示完整的网页，我干嘛还要搞什么自适应呢，但是那个字小到你看不清楚，要用户需要使用 手指缩小放大才行。

   * **一句话概括**

     > -  **网页（原生状态下本来就只有上下滑动，没有左右滑动，内容宽度固定，高度一路往下添加。这是网页设计中用户体验的基本概念）---> meta viewport（不出现高分辨率下超小桌面的情况，并产生双滑动）----自适应（消除左右滑动，继续只保留上下滑动）**
     > - **meta vieport标签是让 高分辨率的移动端设备 使用虚拟像素 来 调节屏幕 以显示内容，使得屏幕里的内容看的大一点。**
     >
     > - **meta viewport的出发点是 手机屏幕的分辨率**
     >
     > - **自适应的出发点是 手机屏幕的 尺寸**
     > - **-meta viewport使得移动端网页显示 出现 上下 +左右的滚动条**
     > - **-自适应布局 使得 左右滚动条消失（因为 宽度自适应）**



----

## 自适应布局 vs 响应式布局

1. 我的理解是，  专注的重点是不一样的，并不是一种一左一右的关系。

2. 响应式在 某些尺寸范围内一定是自适应。

3. 自适应某种角度也能算作响应式。

4. 自适应是针对的是 尺寸的按比例缩放相关的，比如说 宽度在1080上100，那到750的上面变成多少

5. 而响应式思考的角度是 布局方面，如典型的，在750尺寸下面，导航栏会缩掉，自己点出来。

6. 正常情况下，应该是 到一个尺寸阈值，阈值下面，触发响应式的移动端布局，阈值上面，各种显示器尺寸，用自适应。

   > ​	永远记住移动端开发的要领： 除了上下的滑动以外，不要出现别的任何方向的滑动和缩放，比如左右方向的滑动，或者字体图标的放大缩小，这才叫好的移动端设备！

---

## 布局等比缩放的若干方法

1. 用百分比

   > ​	稍微用用可以，但是字体什么的 不可能全部都用，不可行

2. 利用媒介查询 

   > ​	 稍微用用可以，但是市面上那么多尺寸的手机，不可能每一个型号都做一个网页，不可行

3. 用 html下面的font-size 加上 rem单位

   > ​	动态变化，只需要改变font-size就可以了，但是每次要改根元素的字体大小，麻烦

4. 结合3， font-size也不写px了， 写vw, 用vw和rem动态配合来实现网页布局

   > vw :就是相对视口宽度(Viewport Width)。1vw = 1% * 视口宽度。也就是说，一个视口就是100vw。说白了他是一个百分比。分母是当前浏览器的宽度。
   >
   > 淘汰了flexible.js用js来动态监测浏览器宽度，现在vw已经可以直接获取了。以前的flexible.js相当于用js写的一个库，里面塞满了所有手机尺寸的宽度数据，然后用的时候自动监测实际的当前宽度，然后**现成做除法**， 稿子里的宽度/稿子里的字体大小=现在浏览器的宽度/现在浏览器需要算出来font的大小，然后加载到html的font-size上。但是现在vw已经可以直接现场获取了，然后你只需要直接知道这个比率就可以了，根本不用在乎原稿上到底是多少尺寸的问题，因为你只想要知道 浏览器尺寸/字体大小的比率就行，。
   >
   > 比如我们拿到的稿子 宽度是750px，
   >
   > 那我们就换算 100vw=750px，那1vw=7.5px
   >
   > 然后看下稿子里面font-size是多少，比如是20px，那算出vw是多少
   >
   > 1vw=7.5px 那20px就等于 2.66666vw
   >
   > 而在html根元素里面 一个 rem= 默认font-size大小
   >
   > 也就是1rem=20px=2.6666vw
   >
   > 这个时候再看下稿子你font-size是多少px。是20px
   >
   > 所以你就在html- font-size里面写
   >
   > html{
   >
   > font-size:  2.6666vw;
   >
   > // 其实就是写font-size：20px；
   >
   > //后面还是照常用rem就行
   >
   > **//这样不管浏览器尺寸是多少，你的font-size一定是原因是2.666%的浏览器宽度。**
   >
   > }

---

## 响应式布局之媒介查询

1. 分水岭：1024      1023 

2. 响应式触发的媒体类型： @media all/print/screen/speech

3. ```css
   @media screen and (min-width:576px) {
   
   }
   @media screen and (min-width:768px) {
   
   }
   @media screen and (min-width:992px) {
   
   }
   @media screen and (min-width:1200px) {
   
   }
   @media all and (oritentaion:portrait) {
   
   }
   @media all and (oritentaion:landscape) {
   
   }
   ```

4. 常见的修改的 响应样式：

   - display- 导航栏
   - flex 方向-pc上横着排列，mobile上需要上下排列
   - width- 改宽度

5. 两种操作模式：

   ```css
   .nav { wwww};
   @media screen and (min-width:768px) {
   	.nav { wwww};
   }
   @media screen and (min-width:992px) {
   	.nav { wwww};
   }
   @media screen and (min-width:1200px) {
   	.nav { wwww};
   }
   //这种写法下， 只需要写一个nav就可以适应所有情况，在html直接调用
   //  <nav class='nav'>
   		
   //   </nav>
   ```

   ```css
   .nav { wwww};
   @media screen and (min-width:768px) {
   	.nav-xs { wwww};
   }
   @media screen and (min-width:992px) {
   	.nav-md { wwww};
   }
   @media screen and (min-width:1200px) {
   	.nav-lg { wwww};
   }
   //这种写法下， 只需要写不同的nav就可以适应不同情况，在html需要调用全部：
   //  <nav class='nav nav-xs nav-md nav-lg'>
   		
   //   </nav>
   ```

   

6. **注意：响应式的css要写在 正常css的后面！！！后面才写媒体查询**

7. **注意：响应式的css要写在 正常css的后面！！！后面才写媒体查询**

8. **注意：响应式的css要写在 正常css的后面！！！后面才写媒体查询**

9. 以免被 前面的默认css样式覆盖，出现bug

-------

## 移动端布局-概览

1.  网页 分成

   - pc端和移动端一起开发一套代码 这叫做 响应式（自适应）----流式 or rem等比缩放式（并利用媒体查询来做一些分水岭的样式变化）
   - pc端和移动端分开开发两套代码---用重定向检测分水岭750px 然后引到不同网址-----pc端 自己的一套代码（自适应流式 or rem等比缩放式）		--移动端自己一套代码（流式 or rem等比缩放式）

2. 切换平台尺寸之后，一定要记得刷新。

3. 一些自适应工具 比如 lamdatest 或者 responsive app这些，测的时候要多关注url，多测几次。特别有些时候如果遇到 自动改变地址，反应会不灵敏，有时候有效，有时候又没有效果。

4. 大部分公司都会pc段和移动端各一套代码，在用户访问的时候检测下浏览器尺寸，如果是pc端就显示普通的，如果是移动端，就重定向到另一个网页去。（后端去做，http请求中的重定向）最简单的区分方法，就是看 切换到移动端尺寸后，会不会跳转网页。

5. 大项目---- pc端 移动端 两套完全不同的代码。不仅仅导航栏，什么都变了

   小项目---多端适配的响应式布局  自适应缩放，缩放一定比例 只有个导航栏变下什么的

6. viewport里还可以 设置 viewport-fit：cover来处理 iphonex 下面功能键覆盖

7. 目前市场上大多数移动端设计稿原型机都是iphone6plus，宽度414px

8. 移动端图片等比缩放-- img的话，请设置为block+max-width:100%,height:auto; div背景图片的话 【我不知道咋做】。并且请选择高清大图。http://www.jeepxie.net/article/385408.html

9. 市面上目前流行的两种响应式移动端布局方案。fluid布局 和 adaptive布局

   fluid布局就是 尺寸变小时， div的大小不变，改变的是 div之间的距离，

   adpative布局就是利用rem来布局，尺寸变小时，所有内容都跟着等比变小，如果pc端不太复杂，可以用这种布局，相当于等比缩放pc端网页。

   

---

##  移动端布局--流式布局 

（可以和rem自适应混合使用）

1. width是100% ，也就是永远自适应浏览设备的宽度的，height写固定px
2. 然后用flex布局， 要么是 把div 设置space-between这样，就可以随着浏览器宽度变化，增加div之间的gap
3. 要么是 flex-grow:1 这种div自适应宽度，
4. **rem/vw适配方案适合视觉组件种类比较多，视觉设计对元素位置的相对关系依赖较强的移动端页面，基本上大部分页面都可以用着这种方案进行适配。**
5. **但是，rem布局 不适用在 原稿是pc稿的情况下，这样的话，当你缩放到移动端，会特别小。只有750px中等大小的设计稿才可以较好的适配rem布局**。
6. **但对于文本内容较多，我们希望引导用户沉浸在更多的内容而不是更大的内容的时候，这种等比例缩放的方案并不能满足要求，我推荐直接使用px结合flex等布局方式进行适配**



---

## 移动端布局---rem自适应布局

（可以和 fluid布局混合使用）

1. 利用js来动态获取rem，不管哪种，都要设置html里的font-size。

   ```js
   fontsize=document.getdoucmentElement.xx
   fontsIZE=XXXX/ 100
   ```

   首先，利用js获取当前浏览器宽度，然后利用 原稿子里 宽度和font-size的比值换算出当前html的font-size。

   很多开发者喜欢把iphone6的375px宽度下的font-size设置成100px，这样的话直接小数点

   朝前移动2位就行，或者用 px-rem，然后alt+z就行。

2. 利用vw来获取rem

   把屏幕平均分成100分，1vw等于1%个当前浏览器宽度

   不用js，也可以获得 font-size的相同值。

   怎么做呢?  首先你要量取 设计稿里面font-size是多少px，已经宽度是多少px，设为a和b。

   那么此时 在设计稿里面 1vw= b/100 

   那 此时font-size=a px， a等于多少个vw呢？  a 除以b/100就求到了。

   有了 font-size= x个 vw。 就可以设置了，这样无论到哪个浏览器。

   font-size一定是x%个当前浏览器的宽度。

3. **设置完html font-size后，请在 body标签下重置一下 font-size=16px**

   **设置完html font-size后，请在 body标签下重置一下 font-size=16px**

   **设置完html font-size后，请在 body标签下重置一下 font-size=16px**

   **设置完html font-size后，请在 body标签下重置一下 font-size=16px**

4. 正常开发流程： 

   1. 1.拿到设计稿，完全不管别的，只设计原稿件的大小就行
   2. 然后换算vw设置html- fontsize
   3. 然后重置body-font-size
   4. 完事儿

   

----

## Bootstrap

sss-b.

---

## Mobile First 原则 with渐进增强

https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00

https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00

https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00

https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00

https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00

https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00

https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00

---

## web开发流程及注意点

这里讨论的是响应式开发，也就是一套代码，适配所有尺寸，不包括那种不同网址的那种分布式开发。

1. 首先，设计稿必须要从中等尺寸开始，不然的话，就算实现了自适应，在小屏幕上的显示效果也不好。字会特别小。

2. 一个网页 不是说永远只有一种做法（弹性、rem、定位%）任选一个，而是分段处理的， 相当于 小尺寸上一个布局，中尺寸上一个，大尺寸上一个，每个尺寸下都有各自的方法，也就是说 比如 同一个导航栏，在大尺寸范围内可能是 什么也不做，只用定位+固定px，但是中尺寸范围下就变成了 rem自适应，小尺寸范围下又变成了弹性布局。这都是很有可能的。

3.  每一个分段下，其实也不是说 不是说永远只有一种做法（弹性、rem、定位%）任选一个，而是混杂在一起的。比如 有三个div，一个导航栏，一个main，一个footer，很有可能他们在同一个尺寸段内是用了不同的处理方式，比如 在nav，他用固定px定位%，在mainn他用rem，在footer或者article他用flex。
4. 也就意味着，很有可能 一个web响应式项目，在三个尺寸下，每个尺寸有各自用不同布局（此为响应式）。而且每个尺寸下的同一个部位，会有不同的技术。同一个尺寸下，每个部分 也用了不同于别的部分的技术。是错综复杂的。



---



## Sass与Less

1. 前言：

   > ​	Sass 与Less 大同小异，都是css预处理器

2. 注释：

   > 	1.   //  这种单行注释，是在sass里自己看的，不会自动编译出去。
   >  	2.   /*  */这种多行注释，会自动编译到生成的css里面去。

3. 变量(不同）:

   > 	1. 在less里面，可以用 @定义变量,定义后你可以直接使用，比如 width:@number
   >  	2. 在sass里面，可以用 $定义变量,定义后你可以直接使用，比如 width:$number

4. 插值（不同）:

   > ​	1, 在less里，把属性设为变量.或者是class选择器，可以用@{number}
   >
   > ​	2, 在scss里，把属性设为变量,或者是class选择器，可以用#{$key}

5. 作用域

   > 1. 首先，在less里, 选择器内部优先级肯定大于外部。但是在选择器内部时：
   >
   >    变量越在下面的，越生效，也就是说就像css覆盖规则一样，下面的会覆盖上面的。
   >
   >    > ​	内部优先级大于外部，   下面优先级大于上面  ,和使用该变量的属性的位置无关。
   >
   > 2. **分情况，如果在选择器内使用$number时，选择器内的上方没有规定新的$number时，它就以全局变量的$number算，也就是选择器外部的值算。但是 如果在选择器内部规定了新的$number就以新的算，但是这个新的必须在使用者的上方，下方是无效的**。
   >
   >    > ​	使用变量时，若选择器内 该变量上方没有定义，则按外部算。
   >    >
   >    > ​	使用变量时，若选择器内 该变量上方有定义，则按上方定义的算。
   >    >
   >    > ​	使用变量时，选择器内 该变量下方的定义，没有效果。
   >    >
   >    >    **也就是说，写sass时， 选择器内请首先写 变量，再写属性。**

6. 嵌套选择器

   > ​	1.在less里，可以用 ul{   li{    div{    }   }},来自动在css中生成选择器。
   >
   > ​	2.在sass里，也可以用 ul{   li{    div{    }   }},来自动在css中生成选择器
   >
   >  	**3. 但是注意， 末尾的 最小的 叶子标签里面 必须要写值，不然会报错。**

7. 带伪类的嵌套选择器

   > 1. 在less的嵌套选择器里，若要添加伪类，使用 &:hover添加，但是必须注意，这个 &：hover相当于一个独立的div，请写在你想要hover的标签的{}里，也就是把他当做其子元素来写。
   >
   >    **比如你要 在 ul li*3 这样的结构里把第一个li加上hover。请在 第一个li的{}里再写一个 &:hover{}. 而不是想当然的再li后面直接添加&:hover**
   >
   > 2. 在sass的嵌套选择器里，相同。

8. 属性嵌套 **(sass才有)**

   > ​	1.在less里没有这种操作
   >
   > ​	2..在sass的选择器里，比如font，可以写成 font{size:19px;  weight:bold; family:ss; }来简写
   >
   > ```scss
   > .bbox {
   >     font : {
   >         size: 11px;
   >         family:red;
   >         weight: normal;
   >     }
   > }
   > ```

9. 运算

   > 	1. 小知识点： :hover伪类在css里面是要紧贴着的，不然不生效，但是 **运算符** 反而要空格开来，不然不生效。
   >  	2. 在less中：
   >  	- 相同单位，可以直接运算，注意 符号中间空格就行。
   >  	- 不同单位，以运算符前面的一个数的 单位为准。
   >  	- 遇到除法，默认会把 / 当做 除法符号，如果想把它当做分隔，用 ~" xx / x" 转义
   > 	3. 在scss中：
   >     - 相同单位，可以直接运算，注意 符号中间空格就行。
   >     - 不同单位，会报错。
   >     - 遇到除法，默认会把 / 当做 分隔符，如果想把它当做除法，用 （ x/ xxx） 转义

10. 函数：

    > 1.less和scss中有很多内置函数可以使用，比如: round()  percentage()
    >
    > 2.也有一些只有less中有，比如squrt()
    >
    > 3.也有一些只有scss中有，比如random()
    >
    > 4.scss支持自定义函数:
    >
    > ```scss
    > @function func_name_jia_fa($n,$m)
    >   
    >   @return($n + $m)
    > ```

11. 混入

    > - **在less中**， 可以直接写成 div{     .show;  } 来吧show的样式 混入到div中去。
    >
    > ```less
    > @number:100px;
    > .c{
    >     height: @number + 10em;
    >     width: 3em + @number;
    > }
    > 
    > .show{
    >     .c;
    > }
    > // 引入了.c 的样式。
    > ```
    >
    > - 如果想混入，但是不想 把混入之前的 样式，自动生成到css里面，可以加个（ ）。
    >
    >   ```less
    >   .hide( ){
    >       display: block;
    >   }
    >   //这里hide加了括号， hide这个样式就不会生成到css里面了。
    >   .show{
    >       .c;
    >       .hide( );
    >   }
    >   ```
    >
    > - 还可以利用 ()传递参数：
    >
    >   ```less
    >   .hide(@dd){
    >       display: block;
    >       color:@dd;
    >   }
    >   
    >   .show{
    >       .c;
    >       .hide(red);
    >   }
    >   //这里把red的值 传给hide，hide中 @dd 对应red，传到color，从而生成color：red；
    >   ```
    >
    > - -----
    >
    > - **在sass中，混入是用 @mixin +@include来实现，**
    >
    > - 注意 @minxin后面的 classname 不加· 点。而且 不同于less，它一定不会渲染在css里。
    >
    >   ```scss
    >   @mixin name{
    >       display: inline;
    >   }
    >   //它一定不会生成在css里，放心，
    >   .what{
    >       @include name;
    >   }
    >   ```
    >
    > - 在scss中传递参数：
    >
    >   ```scss
    >   @mixin name{
    >       display: inline;
    >   }
    >   
    >   @mixin chuacan($number) {
    >       color:$number;
    >   }
    >   .what{
    >       @include name;
    >       @include chuacan(red);
    >   }
    >   ```
    >
    >   

    

12. less命名空间

    > - less中有一种操作 可以 给定固定的命名空间，然后再命名空间里面设置class。
    >
    > - ```scss
    >   #space(){
    >       .show{display: contents;}
    >   }
    >   //  这个space后面的（）不能省去，因为一省去就成了 嵌套结构下的div了，#space直接变成了 id=space的一个div
    >   .go{
    >       #space.show;
    >   }
    >   //如此，go就可以使用space下特定的show，而不是全局下的show。
    >   ```
    >
    > - 

13. 继承

    > - 首先，混入的写法，有一个问题，就是 会重复把一些样式写到很多 div里面去。很多时候我们想写成:  div1 , div2 , div3 { 样式} 这种样子。 这时候，我们可以用继承。
    >
    > - ```less
    >   .jicheng{
    >       display: inline;
    >   }
    >   //继承里面一定不写（），因为如果写了（）就会在css中消失了，这里要做的，不是混入样式，而是把.jicheng 与.use 用逗号的方法写在一块。
    >   .use{
    >       &:extend(.jicheng);
    >   }
    >   .use2{
    >       columns: red;
    >       &:extend(.jicheng);
    >   }
    >   // use2里的colums:red；会自己出来单独写一条。
    >   ```
    >
    > - 在sass中：
    >
    > - ```scss
    >   .line{
    >       display: inline;
    >   }
    >   
    >   .box8{
    >       @extend .line;
    >   }
    >   
    >   .box9{
    >       background-color: red;
    >       @extend .line;
    >   }
    >   ```
    >
    > - 继承 的class一定没有（），但是用作混入的class可以用（）。
    >
    > - 如果你@extend的class 不想出现在生成的css文件中，可以如下操作（但是less没这个功能）
    >
    > - ```scss
    >   %line1{
    >       display: inline;
    >   }
    >   
    >   .box8{
    >       @extend %line1;
    >   }
    >   
    >   .box9{
    >       background-color: red;
    >       @extend %line1;
    >     
    >   }
    >   ```

14. 媒体查询

    > ​	Less 和 Sass下面语法一样

    ```less
    .box{
      width:100px;
      @media all and (min-width : 768px ){
        width : 600px;
      }
      @media all  and (min-width : 1440px ){
        width : 900px;
      }
    }
    ```

    

15. 合并 

    > ​	比如background有多张图片

    1. 在less中用+号,或者+_ 来显示

       ```less
       .box{
         background+:url(2.png);
         background+: url(1.png);
       }
       //用逗号分开
       .box{
         background+_: red;
         background+_: no-repeat;
       }
       //用空格分开
       ```

    2. 在sass里面，用的是 类似于 键值对的方式存储的。

       ```sass
       $background : (
       			a  : url(1.png),
       			b  : url(2.png)
       );
       
       .box{
       	background: map-values($background);
       }
       ///map-values 显示所有键值对
       
       $tramsform : (
       	a : scale(2),
       	b : rotate(90deg)
       );
       
       .box{
       		transform:   zip(map-values($transform)...)
       }
       ```

16. if条件

    1. less下

       ```less
       @count : 3 ;
       
       .get(@number) when ( @number < 4){
       		width : 100px +  @number;
       
       }
       
       .get(@number) when ( @number > 4){
       		width : 100px +  @number;
       
       }
       
       .box11{
       		.get(@count);
       }
       ```

       

    2. sass下

    ```sass
    $count : 6 ;
    
    .box11{
    		@if($count > 4){
    				width: 100px + $count;
    		}
    		@else{
    			widdth:10px + $count;
    		}
    
    
    }
    ```

    

17. 循环操作

    

    ```less
    @count2 : 0;
    
    .get2(@cn)  when ( @cn<3) {
    		.get2((@cn+1));
    		.box-@{cn}{
    				width:100px + @cn;
    		}
    }
    
    
    .get2(@countt2);
    
    ```

    

    Sass

    ```sass
    @for $i from 0 through 3 {
    		.box-#{$i}{
    					widht:100px+ $i;
    		}
    
    }
    
    
    ```

    

18. 模块化导入

    1在less中

    ```less
    @import './reset.less'
    ```

    

    2 在sass中

    ```sass
    @import './reset.scss'
    ```

    
 ## PostCSS

please go check another file.

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

​    

