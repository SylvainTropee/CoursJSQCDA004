const multiply = require('./script.js')

describe("Mon scénario de Test", () => {
    it("Test de base", () => {
        expect(true).toBe(true);
    })
    it("Doit faire la multiplication", () => {
        expect(multiply(2, 5)).toBe(10)
    })
})