var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1){
var moreNames = allNames.push(newName);
console.log('Zaktualizowano baze');
}
else {
console.log('Baza pusta');
}