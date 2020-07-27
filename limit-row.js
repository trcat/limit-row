/**
 * 限制对应元素中的文本内容的行数
 * @param {string} text 文本内容，必填
 * @param {Element} target 对应元素，必填
 * @param {number} limit 限制行数， 选填
 */
function handlerLimitRow(text, target, limit) {
    let limitRow = limit || 1
    // text 和 target 必填
    if (text && target) {
        const textArr = text.split('')
        const targetWidth = target.offsetWidth
        const rows = []
        let count = ''
        function finishCycle(i) {
            // 剩余内容全部加到最后一行中去
            rows[limitRow - 1] += (textArr.slice(i + 2).join(''))
            target.innerText = ''
            rows.forEach((r, index) => {
                const span = target.appendChild(document.createElement('span'))
                span.innerText = r
                span.style.display = 'block'
                if (index === rows.length - 1) {
                    // 通过 text overflow css 属性来添加 ...
                    span.className = 'limit-row-last'
                    span.style.width = '100%'
                    span.style.overflow = 'hidden'
                    span.style.whiteSpace = 'nowrap'
                    span.style.textOverflow = 'ellipsis'
                }
            })
        }
        for (let i = 0; i < textArr.length; i++) {
            // 之所以要放到 target 中，是因为想在对应样式情况下计算 width，会更加准确
            target.innerText = count + textArr[i]
            // 用 target 来算当前内容是不是刚好够一行
            if (target.offsetWidth === targetWidth) {
                count += textArr[i]
                rows.push(count)
                count = ''
            } else if (target.offsetWidth > targetWidth) {
                rows.push(count)
                count = textArr[i]
            } else {
                count += textArr[i]
            }
            // 判断此时的行数是否已经到达上线
            if (rows.length === limitRow) {
                finishCycle(i)
                break
            } else if (i === textArr.length - 1) {
                limitRow = rows.length
                finishCycle(i)
            }
        }
    }
}