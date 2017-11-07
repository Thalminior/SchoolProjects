window.onload = setup


function createButton(butCount,name,label)
{
	
	var name = new stat(butCount,name)
		
	var buttons = 	label
					+ '<button type="button" id="butup' 
					+ butCount
					+ '" name="add" onclick="addToStat('
					+ name.number
					+ ')">+</button>'
					
					+ '<button type="button" id="butdn' 
					+ butCount
					+ '" name="add" onclick="takeFromStat()">-</button>' 
					+ name.number
					+ '<br/>';
	console.log(buttons);
	return buttons;
}

function addToStat(points)
{
	//#### add function here next
}

function stat (name,buttonNum)
	{
		this.name = name;
		this.number = 10;
		this.bonus = ((this.number-10)/2);
		this.buttonNum = buttonNum;
	}
	
	
	

	
function setup()
{
		//create 6 button sets
	var stats = ["Str","Dex","Con","Int","Wis","Cha"];
	var butCount = 0;
	var buttonlist = "";
	
	while ( butCount  < stats.length )
		{
				var name = stats[butCount];
				var label = stats[butCount];
				
				buttonlist += createButton(butCount,name,label);
				butCount++;
				//console.log(name);
		}
	document.getElementById("manybuttons").innerHTML = buttonlist;
}