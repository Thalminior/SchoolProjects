window.onload = setupEvents;
function setupEvents()
{
	createValidator('validator')
	cssValidator('validcss')

}

function createValidator(linkID)
{
	var myURL = window.location.href;
	var validatorLink = '<a href="http://validator.w3.org/nu/?doc=';
	validatorLink += myURL;
	validatorLink += '">HTML 5 Validator</a>';
	//console.log(validatorLink);
	document.getElementById(linkID).innerHTML = validatorLink;
} 
function cssValidator(linkID)
{
	var myURL = window.location.href;
	var validatorLink = '<a href="http://jigsaw.w3.org/css-validator/validator?uri=';
	validatorLink += myURL;
	validatorLink += '">CSS Validator</a>';
	//console.log(validatorLink);
	document.getElementById(linkID).innerHTML = validatorLink;
} 

