'use strict';

var assert = require('chai').assert;
var _ = require('../index');
describe('my-underscore', ()=> {
    describe('_.each', ()=> {
        var arr = [1, 2, 3];
        _.each(arr, (n, i, a)=> {
            a[i] = n + 1
        })
        it('should not be undefined', ()=> {
            assert.isDefined(_.each);
            assert.isDefined(_.forEach)
        });
        it('should equal [2,3,4]', ()=> {
            assert.deepEqual(arr, [2, 3, 4])
        });
    });
    describe('_.map', ()=> {
        var arr = [1, 2, 3];
        var actual = _.map(arr, (n)=> {
            return n + 1
        })
        it('should not be undefined', ()=> {
            assert.isDefined(_.map);
        });
        it('should equal [2,3,4]', ()=> {
            assert.deepEqual(actual, [2, 3, 4])
        });
    });
    describe('_.some', ()=> {
        var arr = [1, 2, 3];
        it('should not be undefined', ()=> {
            assert.isDefined(_.some);
        });
        it('should each n==2 be true', ()=> {
            var actual = _.some(arr, (n)=> {
                return n == 2
            })
            assert.isTrue(actual)
        });
        it('should each n==4 be false', ()=> {
            var actual = _.some(arr, (n)=> {
                return n == 4
            })
            assert.isFalse(actual)
        });
    });
    describe('_.every', ()=> {
        var arr = [1, 2, 3];
        it('should not be undefined', ()=> {
            assert.isDefined(_.every);
        });
        it('should each n>0 be true', ()=> {
            var actual = _.every(arr, (n)=> {
                return n > 0
            })
            assert.isTrue(actual)
        });
        it('should each n<0 be false', ()=> {
            var actual = _.every(arr, (n)=> {
                return n < 0
            })
            assert.isFalse(actual)
        });
    });
    describe('_.reduce', ()=> {
        var arr = [1, 2, 3];
        var actual = _.reduce(arr, (m, n)=> {
            return m + n
        }, 0)
        it('should not be undefined', ()=> {
            assert.isDefined(_.reduce);
        });
        it('should be 6', ()=> {
            assert.equal(actual, 6)
        });
    });
    describe('_.reduceRight', ()=> {
        var arr = [1, 2, 3];
        var actual = _.reduceRight(arr, (m, n)=> {
            return m + n
        }, 0)
        it('should not be undefined', ()=> {
            assert.isDefined(_.reduceRight);
        });
        it('should be 6', ()=> {
            assert.equal(actual, 6)
        });
    });
    describe('_.find', ()=> {
        var arr = [1, 2, 3];
        var actual = _.find(arr, (n)=>n == 2)
        it('should not be undefined', ()=> {
            assert.isDefined(_.find);
        });
        it('should be equal 2', ()=> {
            assert.equal(actual, 2)
        });
    });
    describe('_.findIndex', ()=> {
        var arr = [1, 2, 3];
        var actual = _.findIndex(arr, (n)=>n == 2)
        it('should not be undefined', ()=> {
            assert.isDefined(_.findIndex);
        });
        it('should be equal 1', ()=> {
            assert.equal(actual, 1)
        });
    });
    describe('_.filter', ()=> {
        var arr = [1, 2, 3];
        var actual = _.filter(arr, (n)=>n > 1)
        it('should not be undefined', ()=> {
            assert.isDefined(_.filter);
        });
        it('should be equal [2,3]', ()=> {
            assert.deepEqual(actual, [2, 3])
        });
    });
    describe('_.reject', ()=> {
        var arr = [1, 2, 3];
        var actual = _.reject(arr, (n)=>n > 1)
        it('should not be undefined', ()=> {
            assert.isDefined(_.reject);
        });
        it('should be equal [1]', ()=> {
            assert.deepEqual(actual, [1])
        });
    });
    describe('_.partition', ()=> {
        var arr = [1, 2, 3];
        var actual = _.partition(arr, (n)=>n > 1)
        it('should not be undefined', ()=> {
            assert.isDefined(_.partition);
        });
        it('should be equal [[2,3],[1]]', ()=> {
            assert.deepEqual(actual, [[2, 3], [1]])
        });
    });
    describe('_.contains', ()=> {
        var arr = [1, 2, 3];
        it('should not be undefined', ()=> {
            assert.isDefined(_.contains);
        });
        it('should be true', ()=> {
            var actual = _.contains(arr, 2)
            assert.isTrue(actual)
        });
        it('should be false', ()=> {
            var actual = _.contains(arr, 4)
            assert.isFalse(actual)
        });
    });
    describe('_.range', ()=> {
        var actual = _.range(0, 5)
        it('should not be undefined', ()=> {
            assert.isDefined(_.range);
        });
        it('should be equal [0,1,2,3,4,5]', ()=> {
            assert.deepEqual(actual, [0, 1, 2, 3, 4, 5])
        });
    });
    describe('_.chunk', ()=> {
        var arr = [1, 2, 3, 4, 5, 6, 7];
        var actual = _.chunk(arr, 2)

        it('should be equal [[1,2],[3,4],[5,6],[7]]', ()=> {
            assert.deepEqual(actual, [[1, 2], [3, 4], [5, 6], [7]])
        });
    });
    describe('_.pluck', ()=> {
        var arr = [{value: 1, name: 'first'}, {value: 2, name: 'second'}, {value: 3, name: 'third'}];
        it('should be equal [1,2,3]', ()=> {
            var actual = _.pluck(arr, 'value')
            assert.deepEqual(actual, [1, 2, 3]);
        });
        it('should be equal ["first","second","third"]', ()=> {
            var actual = _.pluck(arr, 'name')
            assert.deepEqual(actual, ["first", "second", "third"])
        });
    });
    describe('_.isArray', ()=> {
        it('should not be undefined', ()=> {
            assert.isDefined(_.isArray)
        });
        it('should be true',()=>{
            var result=_.isArray([1])
            assert.isTrue(result)
        })
        it('should be false',()=>{
            var result=_.isArray({})
            assert.isFalse(result)
        })
    });
    describe('_.isObject', ()=> {
        it('should not be undefined', ()=> {
            assert.isDefined(_.isObject)
        });
        it('should be true',()=>{
            var result=_.isObject({})
            assert.isTrue(result)
        })
        it('should be false',()=>{
            var result=_.isObject(1)
            assert.isFalse(result)
        })
    });
    describe('_.isString', ()=> {
        it('should not be undefined', ()=> {
            assert.isDefined(_.isString)
        });
        it('should be true',()=>{
            var result=_.isString("asd")
            assert.isTrue(result)
        })
        it('should be false',()=>{
            var result=_.isString({})
            assert.isFalse(result)
        })
    });
    describe('_.isNumber', ()=> {
        it('should not be undefined', ()=> {
            assert.isDefined(_.isNumber)
        });
        it('should be true',()=>{
            var result=_.isNumber(1)
            assert.isTrue(result)
        })
        it('should be false',()=>{
            var result=_.isNumber("1")
            assert.isFalse(result)
        })
    });
    describe('_.isBoolean', ()=> {
        it('should not be undefined', ()=> {
            assert.isDefined(_.isBoolean)
        });
        it('should be true',()=>{
            var result=_.isBoolean(true)
            assert.isTrue(result)
        })
        it('should be false',()=>{
            var result=_.isBoolean({})
            assert.isFalse(result)
        })
    });
    describe('_.where', ()=> {
        var arr=[{a:1,b:2},{a:1,b:3},{a:2,b:3}]
        it('should not be undefined', ()=> {
            assert.isDefined(_.where)
        });
        it('should be true',()=>{
            var result=_.where(arr,{a:1})
            assert.deepEqual(result,[{a:1,b:2},{a:1,b:3}])
        })

    });
    describe('_.findWhere', ()=> {
        var arr=[{a:1,b:2},{a:1,b:3},{a:2,b:3}]
        it('should not be undefined', ()=> {
            assert.isDefined(_.findWhere)
        });
        it('should be true',()=>{
            var result=_.findWhere(arr,{a:1})
            assert.deepEqual(result,{a:1,b:2})
        })

    });
    describe('_.keys', ()=> {
        function Animal(name){
            this.name=name
            this.width=10
        }
        Animal.prototype.height=20
        var o=new Animal('dog')
        it('should not be undefined', ()=> {
            assert.isDefined(_.keys)
        });
        it('should be true',()=>{
            var result=_.keys(o)
            assert.deepEqual(result,["name","width"])
        })

    });
    describe('_.allKeys', ()=> {
        function Animal(name){
            this.name=name
            this.width=10
        }
        Animal.prototype.height=20
        var o=new Animal('dog')
        it('should not be undefined', ()=> {
            assert.isDefined(_.allKeys)
        });
        it('should be true',()=>{
            var result=_.allKeys(o)
            console.log(o)
            assert.deepEqual(result,["name","width","height"])
        })
    });
    describe('_.values', ()=> {
        function Animal(name){
            this.name=name
            this.width=10
        }
        Animal.prototype.height=20
        var o=new Animal('dog')
        it('should not be undefined', ()=> {
            assert.isDefined(_.values)
        });
        it('should be true',()=>{
            var result=_.values(o)
            assert.deepEqual(result,["dog",10,20])
        })
    });
    describe('_.mapObject', ()=> {
       var o={a:1,b:2}
        it('should not be undefined', ()=> {
            assert.isDefined(_.mapObject)
        });
        it('should be true',()=>{
            var result=_.mapObject(o,function(v){return v+1})
            assert.deepEqual(result,{a:2,b:3})
        })
    });
    describe('_.pairs', ()=> {
        var o={a:1,b:2}
        it('should not be undefined', ()=> {
            assert.isDefined(_.pairs)
        });
        it('should be true',()=>{
            var result=_.pairs(o)
            assert.deepEqual(result,[["a",1],["b",2]])
        })
    });
    describe('_.pick', ()=> {
        var o={a:1,b:2,c:3}
        it('should not be undefined', ()=> {
            assert.isDefined(_.pick)
        });
        it('should be true',()=>{
            var result=_.pick(o,'a')
            assert.deepEqual(result,{a:1})
        })
        it('should be true',()=>{
            var result=_.pick(o,'a','b')
            assert.deepEqual(result,{a:1,b:2})
        })
    });
    describe('_.omit', ()=> {
        var o={a:1,b:2,c:3}
        it('should not be undefined', ()=> {
            assert.isDefined(_.omit)
        });
        it('should be true',()=>{
            var result=_.omit(o,'a')
            assert.deepEqual(result,{b:2,c:3})
        })
        it('should be true',()=>{
            var result=_.omit(o,'a','b')
            assert.deepEqual(result,{c:3})
        })
    });
    describe('_.functions', ()=> {
        var o={a:function(){return 1},b:2,c:function(){return 2}}
        it('should not be undefined', ()=> {
            assert.isDefined(_.functions)
        });
        it('should be true',()=>{
            var result=_.functions(o)
            assert.deepEqual(result,["a","c"])
        })
    });

});

