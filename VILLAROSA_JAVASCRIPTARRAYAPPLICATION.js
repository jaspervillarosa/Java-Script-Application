
function compute(){
var Array= [];
var Rem;
var x;

var PosInt=parseInt(document.getElementById("PosInt").value);

x=PosInt;

while (PosInt!=0)
{
	Rem=PosInt%2;
	PosInt=parseInt(PosInt/2);
	Array.push(Rem);
}

document.getElementById ("display").innerHTML= "Number= "+x+ "<br> Binary="; 

while (Array.length !=0){
	document.getElementById ("display").innerHTML += Array.pop ();

}

}
