// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray1 = []

const forEachArray = array.forEach((user) =>{
  let {username} = user;
  username = username + "!";
  newArray1.push(username)
})
console.log('forEach', newArray1);





//Create an array using map that has all the usernames with a "?" to each of the usernames
const mapArray = array.map((user)=>{
  let {username} = user;
  username = username + "?";
  return username;
});
console.log('map', mapArray)





//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log('filter', filterArray)



//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);
