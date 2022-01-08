var numArr = [1, 2, 3];
var strArr = ["apple", "grape", "melon"];
var num = 1;
var letter = 'a';
try {
    const startsWithA = strArr.filter((word) => word.startsWith(letter));
    const startsWithNum = numArr.filter((number) => number > num);
    var container = document.getElementById("container")
    var ptag = document.createElement('p');
    ptag.innerHTML = "Here are you results " + startsWithNum + " , " + startsWithA;
    container.appendChild(ptag);

} catch (error) {
    console.log(error)

};