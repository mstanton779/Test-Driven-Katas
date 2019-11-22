const { expect } = require('chai')
const twoSum = require('./twoSum')

describe('twoSum', () => {
    let arr, empty, value
    beforeEach('initialize fake data', () => {
        arr = [1, 2, 3, 7]
        empty = []
        value = 8
    })
    it('returns an empty array if original array is empty or has one value', () => {
        expect(twoSum(empty, value).length).to.equal(0)
    })
    it('returns an empty array if no sums in the array equal the value', () => {
        expect(twoSum([1, 2], 5).length).to.equal(0)
        expect(twoSum(arr, 20).length).to.equal(0)
        expect(twoSum(arr, value).length).to.equal(2)
    })
})
