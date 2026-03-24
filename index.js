function vonredni(brojStudenti) {
    let izmenetRezultat = brojStudenti - 5;
    return izmenetRezultat;
}

let strukturno = 110;
let veb = 50;
let oop = 5;

strukturno = vonredni(strukturno);
veb = vonredni(veb);
oop = vonredni(oop);

console.log("Strukturno programiranje: " + strukturno);
console.log("Veb programiranje: " + veb);

if (oop === 0) {
    console.log("site studenti se prefrlija vonredno od OOP");
} else {
    console.log("OOP: " + oop);
}