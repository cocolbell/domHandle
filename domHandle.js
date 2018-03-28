;(function(global, factory, undefined) {
    typeof global.document !== "undefined" ? 
        factory(global) : console.warn(
            "Sorry! your enviroment dosen't support this plugin!"
        );
})(typeof window !== "undefined" ? window : this,function(global){
    
    function _domHandle () {
        
    }
    /**
     * @description 返回一个从node开始的深度遍历dom数组
     * @param {HTMLElement} node 
     */
    _domHandle.prototype.dfsWalk = function (node) {
        node = node || document.body;  
        if (!_isDom(node)) return false;        
        if(!node.children) return new Array(node); 
        
        return new Array(node).concat(_dfs(node));
    }

    /**
     * @description 返回一个从node开始的广度遍历dom数组
     * @param {HTMLElement} node 
     */
    _domHandle.prototype.bfsWalk = function (node) {
        node = node || document.body;  
        if (!_isDom(node)) return false;        
        if(!node.children) return new Array(node);

        return new Array(node).concat(_bfs(node));
    }
    
    /**
     * @description 遍历真实DOM，生成一个AST抽象语法树
     * @param {HTMLElement} node 
     */
    _domHandle.prototype.printAst = function (node) {
        node = node || document.body; 
        if (!_isDom(node)) return false; 
        if(!node.children) return new _aNode(node);

    }

    function _aNode (node) {
        this.tag = node.nodeName;
        this.ele = node;
        this.text = _getText(node);
        this.attr = new Array();
    }

    var _isDom = function (ele) {
        return typeof global.HTMLElement === 'function' ? 
        ele instanceof HTMLElement :
        ele && typeof ele === 'object' && ele.nodeType === 1 && typeof ele.nodeName === 'string';
    }

    var _dfs = function (node) {     
        if(!node.children) return new Array(node); 
             
        var childList = [].slice.call(node.children);
        var len = childList.length;
        var list = new Array();
        while (childList.length) {
            var ele = childList.shift();
            list.push(ele);
            if(ele.children) {
                list = list.concat(_dfs(ele));
            }
        }
        return list;
    }

    var _bfs = function (node) {
        if(!node.children) return new Array(node); 
             
        var childList = [].slice.call(node.children);
        var list = new Array();
        var queue = [].concat.call(childList);
        while (queue.length) {
            var ele = queue.shift();
            list.push(ele);
            if(ele.children) {
                queue = [].concat(queue, [].slice.call(ele.children));
            }
        }
        return list;
    }

    var _getText = function (node) {
        var child = node.childNodes;
        var l = child.length;
        var resText = null;
        for (var i=0; i<l; i++) {
            child[0].nodeType == 3 && (resText = nodeValue);
        }
        return resText;
    }

    !('domHandle' in global) && (global.domHandle = new _domHandle());
})