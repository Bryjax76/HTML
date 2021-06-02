//Advanced Arrays

const array = [1,2,3,4,5];
const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
})
console.log('forEach', double);

//Map

const mapArray = array.map((num)=>{
	return num * 2;
});
console.log('map', mapArray)

//
// 								Z "map" zawsze musi zwrócić argument w przeciwieńtwie do forEach
//						Oraz nie zmieniamy naszego Array'a. Pozostaje on taki jaki był. Dostajemy tylko wynik
//

//Filter
const filterArray = array.filter(num => {
	return num >= 3;
});
console.log('filter', filterArray)

//
// 									"Filter" skanuje nasz Array i dopiero zwraca wynik
//

//Reduce
const reduceArray = array.reduce((accumulator, num)=>{
	return accumulator + num
}, 0);

console.log('reduce', reduceArray)