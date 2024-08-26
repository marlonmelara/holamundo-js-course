// Operadores lógicos

// or ||, and &&, not !

const resOr1 = true || true;
const resOr2 = false || true;
const resOr3 = false || false;
console.log(resOr1, resOr2, resOr3);

const res0r4 = false || false || "Mundo" || "Mundo";
console.log(res0r4);

const resAnd1 = true && true;
const resAnd2 = false && true;
const resAnd3 = false && false;
console.log(resAnd1, resAnd2, resAnd3);

const resNot1 = !false;
const resNot2 = !true;
console.log(resNot1, resNot2);
