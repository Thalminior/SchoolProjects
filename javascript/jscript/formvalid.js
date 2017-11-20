window.onload = setup;

function createMenu(startNum,endNum,menuMsg,targetId){
	var tell = '<option value="">' + menuMsg + '</option>';
	var counter = startNum;
	while ( counter <= endNum)
	{
		tell += '<option value="' + counter + '">' + counter + '</option>';
		counter++;
	}	
	document.getElementById(targetId).innerHTML = tell;
}

function check(idtag,error,min,max){
		return function(){
			var field = document.getElementById(idtag);
			var problem = document.getElementById(error);
			var issue = "Required* " + min + " to " + max + " characters";
			if ( field.value.length < min || field.value.length > max)
			{
				problem.innerHTML = issue;	
			}
			else {
				problem.innerHTML = "";	
			}
		}
}

function checkNum(){
	if(isNaN(document.getElementById("hmany").value)){
		document.getElementById("err4").innerHTML = "numeric value only"
	}
	else{
		document.getElementById("err4").innerHTML = ""
	}
}

function radiocheck(){
	var choice = document.forms[0].response;
	var tell = "please make a selection";
	for ( var i=0;i < choice.length; i++ )
	{
		if ( choice[i].checked == true )
		{
		   tell = "good choice";
		   break;
		}
	}
	document.getElementById('opterr').innerHTML = tell;	
}
//color choice checker
function radiocheck2(){
	var choice = document.forms[0].choice;
	var tell = "please make a selection";
	for ( var i=0;i < choice.length; i++ )
	{
		if ( choice[i].checked == true )
		{
		   tell = "";
		   break;
		}
	}
	document.getElementById('colerr').innerHTML = tell;	
}

//textbox checker
function checktext(){
	var limit = 12;
	var text = limit - document.getElementById("text").value.length;
	
	
	
	if( document.getElementById("text").value.length <= limit){
		 document.getElementById("remain").innerHTML = text;
	}
	else{
		document.getElementById("remain").innerHTML = "stop";
		document.getElementById("text").innerHTML.value.length = 
		document.getElementById("text").value.substr(0,limit-1);

		
		
	}


}

function setup ()
{
	createMenu(1,15,"Base package #","choose");
	document.getElementById('name').onkeyup = check('name',"err1",5,12);
	document.getElementById('user').onkeyup = check("user","err2",5,12);
	document.getElementById('password').onkeyup = check("password","err3",12,24);
	document.getElementById('hmany').onkeyup = checkNum
	document.getElementById('optnum').onclick = radiocheck;
	document.getElementById('optnum').onmouseover = radiocheck;
	document.getElementById('color').onclick = radiocheck2;
	document.getElementById('color').onmouseover = radiocheck2;
	document.getElementById('text').onkeyup = checktext;
}