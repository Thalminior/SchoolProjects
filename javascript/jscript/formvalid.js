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


//text entry checking for lenght conditions
function check(idtag,error,min,max){
	return function(){
		var field = document.getElementById(idtag);
		var problem = document.getElementById(error);
		var issue = "Required* " + min + " to " + max + " characters";
		if ( field.value.length < min || field.value.length > max){
			problem.innerHTML = issue;	
		}
		else {
			problem.innerHTML = "Good";	
		}
	}
}

function checkNum(){
	if(isNaN(document.getElementById("hmany").value)){
		document.getElementById("err4").innerHTML = "numeric value only"
	}
	else{
		document.getElementById("err4").innerHTML = "Good"
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
		   tell = "good choice";
		   break;
		}
	}
	document.getElementById('colerr').innerHTML = tell;	
}

//textbox checker
function checktext(){
	var howmany = document.getElementById("textplace").value.length;
	var limit = 500;
	var text = limit - howmany;
	if( document.getElementById("textplace").value.length < limit){
		 document.getElementById("remain").innerHTML = text + " Character remaining" ;
	}
	else{
		document.fancy.textplace.value = document.fancy.textplace.value.substr(0,limit)
		document.getElementById("remain").innerHTML = "0 Characters remaining" ;
	}
}

function sure (){
	//warning text
	var areYouSure = "---WARNING--- By NOT checking the box you agree to waive all statutory rights that pertain or may pertain to the purchase and/or use of ordered item/s, its distributor companies, thier subsidiaries, and this website. please confirm!";
	var Excelent = document.getElementById("happytxt").innerHTML = "Excelent!";
	if(document.getElementById('happy').checked == true ){
		Excelent;
	}
	else{
		if(confirm(areYouSure) == true){
				document.getElementById('happy').checked = false;
				document.getElementById("happytxt").innerHTML = "You have been warned!";
			}
			else{
				document.getElementById('happy').checked = true;
				Excelent;
			}
	}
}

function setup ()
{
	createMenu(1,15,"Base package #","choose");
	document.getElementById('name').onkeyup = check('name',"err1",5,12);
	document.getElementById('user').onkeyup = check("user","err2",5,12);
	document.getElementById('password').onkeyup = check("password","err3",12,24);
	document.getElementById('hmany').onkeyup = checkNum;
	document.getElementById('optnum').onclick = radiocheck;
	document.getElementById('optnum').onmouseover = radiocheck;
	document.getElementById('color').onclick = radiocheck2;
	document.getElementById('color').onmouseover = radiocheck2;
	document.getElementById('textplace').onkeyup = checktext;
	document.getElementById('happy').onchange = sure;
}