var allNames = ['Asia','Kasia','Ola','Jola','Piotrek','Marek','Arek','Jarek'];
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
console.log(femaleNames,maleNames);
var arr = allNames.concat(femaleNames,maleNames);
console.log(arr); // ['Asia','Kasia','Ola','Jola','Piotrek','Marek','Arek','Jarek']
var newName = 'Marian';
	
	if (allNames.indexOf(newName) === -1) {
		console.log('Baza zaktualizowana');
	}

var allNames = ['Asia','Kasia','Ola','Jola','Piotrek','Marek','Arek','Jarek'];
var newName = allNames.push('Marian');
console.log(allNames);