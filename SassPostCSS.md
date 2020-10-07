# Sass &  PostCSS

## Sass / less

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
