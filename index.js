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
_.reduceRight = function (arr, fn, memo) {
    var l = arr.length
    while (l--) {
        memo = fn(memo, arr[l], arr.length - l, arr)

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
            result.push(arr[i])
        }
    }
    return result
}
_.where = function (arr, obj) {
    var result = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        var objLength = 0;
        var matchCount = 0
        for (var p in obj) {
            objLength++
            if (arr[i][p] != undefined && arr[i][p] === obj[p]) {
                matchCount++
            }
        }
        if (objLength == matchCount) {
            result.push[arr[i]]
        }
    }
    return result
}
_.reject = function (arr, fn) {
    var result = []
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = fn(arr[i], i, arr)
        if (!a) {
            result.push(arr[i])
        }
    }
    return result
}
_.partition = function (arr, fn) {
    var result = [[], []]
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = fn(arr[i], i, arr)
        result[a ? 0 : 1].push(arr[i])
    }
    return result
}

_.contains = function (arr, value) {
    return arr.indexOf(value) > -1
}
_.range = function (start, stop) {
    if (stop === undefined) {
        stop = start
        start = 0
    }
    var results = []
    while (true) {
        if (start > stop) break
        results.push(start)
        start++
    }
    return results
}
_.chunk = function (arr, size) {
    var index = 0
    var newArr = []
    for (var i = 0, l = arr.length; i < l; i++) {
        if (i != 0 && (i % size == 0 || i == l)) {
            index++
        }
        newArr[index] = newArr[index] || []
        newArr[index].push(arr[i])
    }
    return newArr
}
_.pluck = function (arr, property) {
    var newArr = []
    for (var i = 0, l = arr.length; i < l; i++) {
        for (var p in arr[i]) {
            if (p == property) {
                newArr.push(arr[i][p])
                break
            }
        }
    }
    return newArr
}
_.each(['Array', 'Object', 'String', 'Number', 'Boolean'], function (s) {
    _['is' + s] = function (o) {
        return Object.prototype.toString.call(o) === '[object ' + s + ']'
    }
})
module.exports = _