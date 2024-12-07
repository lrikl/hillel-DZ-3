'use strict';

const fiveDigitNumber = 10369;

const numbStr = fiveDigitNumber.toString();  // перетворили число до рядка
const result = numbStr.split("").join(" "); // розділили створений рядок по цифрам (.split розбив рядок на масив цифр-літер ""), та додали пробіл між ними (.join зшив цей масив знову у рядок з пробілом " ")
console.log(result)

