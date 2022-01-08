try {
 
 function changeTitle () {
 	 document.title = "hey man";
 }
 changeTitle();
 console.log('ok');
 alert("Hello User");

 }
 catch(err) { 
 document.getElementById("msgBox").innerHTML = err.message;
}