# CSS

This is a demo repository for learning CSS

## Grammar

selector:

{atrr1:value ;

attr2:value;

attr3:value

}

## size

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



