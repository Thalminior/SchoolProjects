window.statBlock= [10,10,10,10,10,10,]

function buttonUp (){
	window.statBlock[0]++;
	document.getElementById("strenghtscore").innerHTML =  window.statBlock[0] ;
}
function buttonDn (){
	window.statBlock[0]--;
	document.getElementById("strenghtscore").innerHTML =  window.statBlock[0] ;
}


function createButton(butCount)
{
	var buttons = '<button type="button" id="butup' + butCount + '" name="add" value="add">+</button><button type="button" id="butdn' + butCount +'" name="add" value="remove">-</button><br/>';
	return buttons;
}
window.onload = setup
function setup ()
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
	document.getElementById("strenghtscore").innerHTML =  window.statBlock[0] ;
	
    document.getElementById('butup0').onclick = buttonUp;
	document.getElementById('butdn0').onclick = buttonDn;
	
	
}
	
	
	
	

	
  
    






