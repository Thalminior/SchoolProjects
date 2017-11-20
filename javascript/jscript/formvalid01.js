
window.onload = setup;



function createMenu(startNum,endNum,menuMsg,targetId){
	var strMsg = '<option value="">' + menuMsg + '</option>';
	var counter = startNum;
	while ( counter <= endNum)
	{
		strMsg += '<option value="' + counter + '">' + counter + '</option>';
		counter++;
	}	
	document.getElementById(targetId).innerHTML = strMsg;
}

function check("dtag,error,min,max){
	
	 if( typeof min == "undefined")
	{
		min = 1;	
	}
		return function()
		{
			var field = document.getElementById(idtag);
			var problem = document.getElementById(error);
			var issue = "Required* At Least" + min + " to " + max + "characters long";
			if ( field.value.length < min || field.value.length > max)
			{
				problem.innerHTML = issue;	
			}
			else
			{
				problem.innerHTML = "good";	
			}
		
		}
}
function setup ()
{
	createMenu(1,15,"Base package #","choose");
	document.getElementById('name').onkeyup = check('name',"err1",1,12);
	//document.getElementById('user').onkeyup = check("user","err2",1,12);
	//document.getElementById('password').onkeyup = check("password","err3",1,12);
	//document.getElementById('hmany').onkeyup = check("hmany","err4",1,12);
	
}