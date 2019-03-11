const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
let itemHighEnhacement = {
    name: "test",
    enhancement: 20,
    durability: 10
}

let item = {
    name: "test",
    enhancement: 14,
    durability: 10
}

let newItem = {
    name: "test",
    enhancement: 15,
    durability: 10
}


describe('enhancer.js', () => {
    describe('succeed()', () => {
        it('should return newItem same enhancement', () => {
            expect(succeed(itemHighEnhacement)).toEqual(itemHighEnhacement)
        })
        it('should return newItem with higher enhacement', () => {
            expect(succeed(item)).toEqual(newItem)
        })
    })
    describe('fail()', () => {
        it('should return new item with durability decreased by 5', () => {
            expect(fail({name: "test", enhancement: 14, durability: 10})).toEqual({name: "test", enhancement: 14, durability: 5})
        })
        it('should return new item with durability decreased by 10', () => {
            expect(fail({name: "test", enhancement: 15, durability: 12})).toEqual({name: "test", enhancement: 15, durability: 2})
        })
        it('should return new item with durability decreased by 10 and enhacnement decreased by 1', () => {
            expect(fail({name: "test", enhancement: 18, durability: 12})).toEqual({name: "test", enhancement: 17, durability: 2})
        })
    })
    describe('repair()', () => {
        it('should return newItem with durability = 100', () => {
            expect(repair({name: "test", durability: 85, enhancement: 16})).toEqual({name: "test", durability: 100, enhancement: 16})
        })
        it('should return same item', () => {
            expect(repair({name: "test", durability: 100, enhancement: 16})).toEqual({name: "test", durability: 100, enhancement: 16})
        })
    })
    describe('get()', () => {
        it('should return newItem with enhanced name', () => {
            expect(get({name: "test", durability: 100, enhancement: 16})).toEqual({name: "[+16] test", durability: 100, enhancement: 16})
        })
        it('should return same item', () => {
            expect(get({name: "test", durability: 100, enhancement: 0})).toEqual({name: "test", durability: 100, enhancement: 0})
        })
    })
})

