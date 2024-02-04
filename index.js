// function sumTriple (x, y)
//  { 
//  	if (x == y) 
//  		{ return 3 * (x + y); } 
//     else 
//         { return (x + y); } 
// } 
//     console. log(sumTriple(20, 20));

function sumTriple(x,y)

{
	var x = document.getElementById("intx").value;
	var y = document.getElementById("inty").value;
    var z = Number(x) + Number(y);
	 if (x == y)

	 {
		document.getElementById("answer").value = 3 * z;
	}
	  else
	 {
	 	document.getElementById("answer").value = z;
	 }

 }