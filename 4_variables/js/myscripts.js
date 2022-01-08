
try {
	var numberArr = [1,2,3,4,5,6];
	var stringArr = ["apple","orange","banana","mango","grape","melon"];
	var newArray = numberArr.map((e, i) => e + stringArr[i]);
	console.log(newArray);
	var container = document.getElementById('container');
	var ptag = document.createElement('p');
	ptag.innerHTML = newArray;
	container.appendChild(ptag);

} catch(e) {
	console.log(e);
}


