
	alert('Hello!!!');
	var docBody = document.body;
	var newDiv = document.createElement('div');
	var newiFrame = document.createElement('iframe');
	newDiv.id ="barDiv";
	newDiv.style.position = "fixed";
	newDiv.style.bottom ="0px";
	newDiv.style.left = "0px";
	newDiv.style.width = "100%";
	newiFrame.name = "bar";
	newiFrame.id = "bar";
	newiFrame.style.background = "transparent";
	newiFrame.style.position = "relative";
	newiFrame.style.bottom = "0px";
	newiFrame.style.left = "0px";
	newiFrame.style.height = "32px";
	newiFrame.style.width="100%";
	newiFrame.src = "http://www.bluinium.com/bar/bar.html?load=no";
	newiFrame.setAttribute("ALLOWTRANSPARENCY","true");
	newiFrame.setAttribute("SANDBOX","allow-same-origin allow-forms allow-scripts");
	newiFrame.setAttribute("FRAMEBORDER","0");
	newiFrame.setAttribute("SCROLLING","no");
	newDiv.appendChild(newiFrame);
	docBody.appendChild(newDiv);

function setSize()
{
	var newDiv = document.getElementById('barDiv');
	var newiFrame = document.getElementById('bar');
	newDiv.style.height = "980" + "px";
	newiFrame.style.height = "980" + "px";
}
function changeBar()
{
	document.getElementById('bar').changeFBLike(window.location.href);
}


