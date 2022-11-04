var oddtrivia=[]
oddtrivia[0]="fact 1"; 
oddtrivia[1]="fact 2"; 
oddtrivia[3]="fact 4"; 
oddtrivia[4]="fact 5"; 
oddtrivia[5]="fact 6"; 
oddtrivia[6]="fact 7"; 
oddtrivia[7]="fact 8"; 
oddtrivia[8]="fact 9"; 
oddtrivia[9]="fact 10"; 
oddtrivia[10]="fact 11"; 
oddtrivia[11]="fact 12"; 

function oddTrivia() {
	var randomTrivia = Math.floor(Math.random()*(oddtrivia.length));
	document.getElementById('ptrivia').innerHTML=oddtrivia[randomTrivia];
}