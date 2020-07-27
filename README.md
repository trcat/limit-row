# limit-row
因为工作原因，自己写了一个用来限制文本行数，超过部分用省略号补充的 js lib。目前只针对简单文本，后续有机会再完善

## 现状
1. 当前版本只针对普通文本，如果文本中有`\n`等特殊符号，lib 并不能正常工作😂

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
        .container {
            width: 300px;
            box-sizing: border-box;
            border: 1px solid #333333;
        }
        .content {
            font-size: 14px;
            line-height: 28px;
        }
    </style>
</head>
<body>
    <div class="container">
        <span class="content limit-row" limit-row="5">
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </span>
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