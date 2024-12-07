'use strict';

const fiveDigitNumber = 10369;

const result = fiveDigitNumber.toString().split("").join(" "); // перетворили число до рядка -> розділили створений рядок по цифрам (.split розбив рядок на масив цифр-літер "") -> додали пробіл між ними (.join зшив цей масив знову у рядок з пробілом " ")
console.log(result)

