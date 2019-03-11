const { succeed, fail } = require('./enhancer.js');
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

let failItem = {
    name: "test",
    enhancement: 14,
    durability: 12
}


let failNewItem = {
    name: "test",
    enhancement: 14,
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
})