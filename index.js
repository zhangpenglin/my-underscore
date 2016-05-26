var _ = {}

_.each = _.forEach = function (arr, fn) {
    for (var i = 0, l = arr.length; i < l; i++) {
        fn(arr[i], i, arr)
    }
}

_.map = function (arr, fn) {
    var result = []
    for (var i = 0, l = arr.length; i < l; i++) {
        result.push(fn(arr[i], i, arr))
    }
    return result
}

_.some = function (arr, fn) {
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = fn(arr[i], i, arr)
        if (a) {
            return true
        }
    }
    return false
}
_.every = function (arr, fn) {
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = fn(arr[i], i, arr)
        if (!a) {
            return false
        }
    }
    return true
}
_.reduce = function (arr, fn, memo) {
    for (var i = 0, l = arr.length; i < l; i++) {
        memo = fn(memo, arr[i], i, arr)
    }
    return memo
}
_.find = function (arr, fn) {
    for (var i = 0, l = arr.length; i < l; i++) {
        if (fn(arr[i], i, arr)) {
            return arr[i]
        }
    }
    return undefined
}
_.findIndex = function (arr, fn) {
    for (var i = 0, l = arr.length; i < l; i++) {
        if (fn(arr[i], i, arr)) {
            return i
        }
    }
    return -1
}
_.filter = function (arr, fn) {
    var result = []
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = fn(arr[i], i, arr)
        if (a) {
            result.push(a)
        }
    }
    return result
}
_.reject = function (arr, fn) {
    var result = []
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = fn(arr[i], i, arr)
        if (!a) {
            result.push(a)
        }
    }
    return result
}
_.contains = function (arr, value) {
    return arr.indexOf(value) > -1
}
_.range=function(start,stop){
    if(stop===undefined){
        stop=start
        start=0
    }
    var results=[]
    while(true){
        if(stop==start) return results
        results.push(start)
        start++
    }

}

_.each(['Array', 'Object', 'String', 'Number', 'Boolean'], function (s) {
    _['is' + s] = function (o) {
        Object.prototype.toString.call(o) === '[object ' + s + ']'
    }
})
console.log(_.range(10))