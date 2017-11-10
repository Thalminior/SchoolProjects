window.onload = function()
//https://www.lampbusters.com/coperni/javascript/testcalctaxfunction.html
{
{
var strMsg = '<option value=""> Roll </option>';
var counter = 1;	
var lastnum = 100

while ( counter <= lastnum )
	{
		strMsg += 
		'<option value="'
		+ counter
		+ '">'
		+ counter
		+ '</option>';
		counter++;
	}
	document.getElementById("roll").innerHTML = strMsg;
}



function calcTax (totalCost,taxRate)
{
	
	
	taxRate = taxRate/100;
	totalTax = totalCost * taxRate;
	return totalTax;
	
	
}

{
	taxResult = calcTax(31.95,8.35);
	document.getElementById("this").innerHTML = taxResult;
}
}