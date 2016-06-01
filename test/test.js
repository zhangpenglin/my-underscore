'use strict';

var assert = require('chai').assert;
var _=require('../index');
describe('my-underscore', ()=> {
    describe('_.each', ()=> {
        var arr=[1,2,3];
        _.each(arr,(n,i,a)=>{a[i]=n+1})
        it('should not be undefined', ()=> {
            assert.isDefined(_.each);
            assert.isDefined(_.forEach)
        });
        it('should equal [2,3,4]', ()=> {
            assert.deepEqual(arr,[2,3,4])
        });
    });
    describe('_.map', ()=> {
        var arr=[1,2,3];
        var actual=_.map(arr,(n)=>{return n+1})
        it('should not be undefined', ()=> {
            assert.isDefined(_.map);
        });
        it('should equal [2,3,4]', ()=> {
            assert.deepEqual(actual,[2,3,4])
        });
    });
    describe('_.some', ()=> {
        var arr=[1,2,3];
        it('should not be undefined', ()=> {
            assert.isDefined(_.some);
        });
        it('should each n==2 be true', ()=> {
            var actual=_.some(arr,(n)=>{return n==2})
            assert.isTrue(actual)
        });
        it('should each n==4 be false', ()=> {
            var actual=_.some(arr,(n)=>{return n==4})
            assert.isFalse(actual)
        });
    });
    describe('_.every', ()=> {
        var arr=[1,2,3];
        it('should not be undefined', ()=> {
            assert.isDefined(_.every);
        });
        it('should each n>0 be true', ()=> {
            var actual=_.every(arr,(n)=>{return n>0})
            assert.isTrue(actual)
        });
        it('should each n<0 be false', ()=> {
            var actual=_.every(arr,(n)=>{return n<0})
            assert.isFalse(actual)
        });
    });
    describe('_.reduce', ()=> {
        var arr=[1,2,3];
        var actual=_.reduce(arr,(m,n)=>{return m+n},0)
        it('should not be undefined', ()=> {
            assert.isDefined(_.reduce);
        });
        it('should be 6', ()=> {
            assert.equal(actual,6)
        });
    });
    describe('_.reduceRight', ()=> {
        var arr=[1,2,3];
        var actual=_.reduceRight(arr,(m,n)=>{return m+n},0)
        it('should not be undefined', ()=> {
            assert.isDefined(_.reduceRight);
        });
        it('should be 6', ()=> {
            assert.equal(actual,6)
        });
    });
});

