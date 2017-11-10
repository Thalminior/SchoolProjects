window.strScore = 10;

function buttonUp (){
	window.strScore++;
	document.getElementById("strenghtscore").innerHTML =  window.strScore ;
}
function buttonDn (){
	window.strScore--;
	document.getElementById("strenghtscore").innerHTML =  window.strScore ;
}


function createButton(butCount)
{
	var buttons = '<button type="button" id="butup' + butCount + '" name="add" value="add">+</button><button type="button" id="butdn' + butCount +'" name="add" value="remove">-</button><br/>';
	return buttons;
}
window.onload = function()
{
	
	var butCount = 0;
	var ButMax = 5;
	var buttonlist = "";	
	
		while ( butCount <= ButMax )
		{
				buttonlist += createButton(butCount);
				butCount++;
				console.log(butCount);
		}
		
	document.getElementById("manybuttons").innerHTML = buttonlist;
	document.getElementById("strenghtscore").innerHTML =  window.strScore ;
	
    document.getElementById('butup').onclick = buttonUp;
	document.getElementById('butdn').onclick = buttonDn;
	
	
}
	
	
	
	

	
  
    






