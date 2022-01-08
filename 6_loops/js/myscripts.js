var numArr = [1, 2, 3];
var strArr = ["apple", "grape", "melon"];
var num = 1;
var letter = 'a';


try {
	for (let i = 0; i < numArr.length; i++) {
    const newArr = []
    if (numArr[i] > num) {
        newArr.push(numArr[i]);
        var container = document.getElementById('go');
        var ptag = document.createElement('p')
        ptag.innerHTML = newArr;
        container.appendChild(ptag)

    }

}
for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].startsWith(letter)) {
        const startsWith = strArr[i];
        var container = document.getElementById('container');
        var ptag = document.createElement('p')
        ptag.innerHTML = "Here are the words from the array starting with the letter A " + startsWith;
        container.appendChild(ptag)

    }
} catch(e) {
	console.log(e);
}


















