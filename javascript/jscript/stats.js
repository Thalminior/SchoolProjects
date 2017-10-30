window.strScore = 10;

function buttonUp (){
	window.strScore++;
	document.getElementById("strenghtscore").innerHTML =  window.strScore ;
}
function buttonDn (){
	window.strScore--;
	document.getElementById("strenghtscore").innerHTML =  window.strScore ;
}
function buttonAdd (){
	window.butCount++;
	document.getElementById("strenghtscore").innerHTML =  window.strScore ;
		while ( butCount <= ButMax ){
		
		createButton += createButton;
		
		}
}
window.onload = function()
{
	
	var butCount = 1;
	var ButMax = 20;
		
		var createButton = '<button type="button" id="butup' + butCount + '" name="add" value="add">+</button><button type="button" id="butdn' + butCount +'" name="add" value="remove">-</button>';

	
	
	
	
	
	
	
	
	document.getElementById("manybuttons").innerHTML = createButton ;
	
	document.getElementById("strenghtscore").innerHTML =  window.strScore ;
	

	document.getElementById('butup1').onclick = buttonUp;
	document.getElementById('butdn1').onclick = buttonDn;
	// a button to add buttons
	document.getElementById('butup').onclick = buttonAdd;
}








