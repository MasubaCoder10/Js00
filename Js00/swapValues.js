/*
Exercice 04 :
Ecrire un programme qui declare une variable a avec  la valeur 10
et une variable b avec la valeur 20, puis qui echange ces valeur avant d'afficher
les nouvelles valeurs de a et b a l'ecran.
*/

let a = 10;
let b = 20;
let c; // je declare une autre variable c pour stocker la valeur de a avant la permutation
c = a;
a = b;
b = c;
console.log("New value of a:", a);
console.log("New value of b:", b);