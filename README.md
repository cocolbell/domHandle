## introduction
a javaScript's tool aims to finish a lot of dom handle

> 其实纯粹是为了练习各种对原生DOM的各种操作

## API

### 1.1 dom深度遍历
```
/**
* @description 返回一个从node开始的深度遍历dom数组
* @param {HTMLElement} node 可选，默认值为document.body
*/
domHandle.dfsWalk(HTMLElement)
```

### 1.2 dom广度遍历
```
/**
* @description 返回一个从node开始的广度遍历dom数组
* @param {HTMLElement} node 可选，默认值为document.body
*/
domHandle.bfsWalk(HTMLElement)
```