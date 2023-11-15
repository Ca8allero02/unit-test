const sum = require("./suma");

test('10 +20 should be 30', ()=> {
    const resultado = sum(10, 20);
    expect(resultado).toBe(30);

});