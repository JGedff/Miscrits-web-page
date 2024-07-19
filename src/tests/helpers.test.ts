import { conditional, increment } from '../helpers'

describe('Test handlebars helper: increment', () => {
    it.each`
    number  | result
    ${"0"}  | ${1}
    ${"1"}  | ${2}
    ${"-1"} | ${0}
    `('Adds 1 to any number that recives as string', ({ number, result }: { number: string, result: number }) => {
        expect(increment(number)).toBe(result)
    })
})

describe('Test handlebars helper: conditional', () => {
    it.each`
    value1  | condition | value2       | result
    ${"0"}  | ${"=="}   | ${0}         | ${true}
    ${"0"}  | ${"!=="}  | ${0}         | ${true}
    ${"0"}  | ${"==="}  | ${0}         | ${false}
    ${"0"}  | ${"=="}   | ${1}         | ${false}
    ${"0"}  | ${"!="}   | ${1}         | ${true}
    ${0}    | ${"<="}   | ${0}         | ${true}
    ${0}    | ${"<="}   | ${1}         | ${true}
    ${0}    | ${">="}   | ${1}         | ${false}
    ${0}    | ${">="}   | ${0}         | ${true}
    ${0}    | ${">"}    | ${0}         | ${false}
    ${0}    | ${">"}    | ${1}         | ${false}
    ${0}    | ${">"}    | ${-1}        | ${true}
    ${0}    | ${"<"}    | ${0}         | ${false}
    ${0}    | ${"<"}    | ${1}         | ${true}
    ${0}    | ${"<"}    | ${-1}        | ${false}
    ${true} | ${"!"}    | ${undefined} | ${false}
    ${true} | ${"&&"}   | ${false}     | ${false}
    ${true} | ${"||"}   | ${false}     | ${true}
    `('Checks if the condition is true or false', ({ value1, condition, value2, result }: { value1: any, condition: string, value2: any, result: boolean }) => {
        expect(conditional(value1, condition, value2)).toBe(result)
    })
})