import { getStringInfo, toUpperCase } from "../app/utils"

//way of grouping tests together
describe('Utils test suite', () => {

    it('should return uppercase string', () => {
        // arrange: 
        const sut = toUpperCase;
        const expected = 'BOB';

        // act
        const result = sut('bob');

        // assert
        expect(result).toBe(expected);
    })
})

describe('getStringInfo for My-String', () => {
    // arrange
    const sut = getStringInfo;
    const expected = 'My-String';

    test('return right length', () => {
        //act
        const result = sut(expected)
        //assert
        expect(result.characters).toHaveLength(9);
    })
    test('return upper case', () => {
        //act
        const result = sut(expected)
        //assert
        expect(result.upperCase).toBe(expected.toUpperCase())
    })
    test('return lower case', () => {
        //act
        const result = sut(expected)
        //assert
        expect(result.lowerCase).toBe(expected.toLowerCase())
    })
    test('check extraInfo is truthy', () => {
        //act
        const result = sut(expected)
        //assert
        expect(result.extraInfo).toBeTruthy()
    })
})