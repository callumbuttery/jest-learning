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

    it('should return info for valid string', () => {
        // arrange
        const sut = getStringInfo;
        const expected = 'My-String';

        // act
        const result = getStringInfo(expected);

        // assert
        expect(result.lowerCase).toBe('my-string')
        // toEqual used for objects
        expect(result.extraInfo).toEqual({})
    })
})