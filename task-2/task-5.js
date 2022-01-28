// let karta = +prompt('Enter  your credit Card number').substring(-4);
let karta = '435634563473';
let res = karta.substring(0, karta.length - 4);
karta = karta.replaceAll(res, `*`.repeat(karta.length - 4))
document.write(`your credit Card number ${karta}`)