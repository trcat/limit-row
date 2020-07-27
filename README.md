# limit-row
因为工作原因，自己写了一个用来限制文本行数，超过部分用省略号补充的 js lib。目前只针对简单文本，后续有机会再完善

## 现状
1. 当前版本只针对普通文本，如果文本中有`\n`等特殊符号，lib 并不能正常工作😂
2. 使用时，必须要 reset css，特别是 `padding` 和 `margin`，不然会计算错误
3. 父元素必须要是 `div` 这样的块级元素，不然JavaScript呼叫得到的 height 始终是一直的
4. 当前是通过计算高度来判断有没有超过限制的行数的。

## 示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>limit text row</title>
    <script src="./limit-row.js"></script>
    <style>
        /* 这一步的 reset 很重要 */
        html {
            margin: 0;
            padding: 0;
        }
        .container {
            width: 300px;
            box-sizing: border-box;
            border: 1px solid #333333;
            font-size: 14px;
            line-height: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="limit-row" id="test" limit-row="10">
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
    </div>
    <script>
        // 使用方式
        const arr = document.querySelectorAll('.limit-row')
        arr.forEach(v => handlerLimitRow(v.innerText, v, parseInt(v.getAttribute('limit-row'))))
    </script>
</body>
</html>
```

## 参数
1. `text`：string，需要限制的文本内容
2. `target`: Element， 包含文本的直系父元素
3. `limit`: number，限制文本行数

## 思路
目前实作的思路，主要是用目标元素的 `font-size` 或 `line-height` css 属性来确定一行的高度，然后将目标元素的 text 清空，通过 javascript 把原本的内容一个字符一个字符的往目标元素里加。当内容超过一行，则进行换行的操作（每一行都是一个数组的一个成员）。\n
最后一行用 `text-overflow` 来实现 `...`
