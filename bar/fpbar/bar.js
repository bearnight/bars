
var barType="../../images/bar/PinkBar/";
function showPharm()
{
	hideAllShowing("Pharm");
    var showMe = window.parent.document.getElementById('websiteContent');
	showMe.src = "http://www.thefamilyrx.com/";
}
function closebg()
{
	var toHide = document.getElementById('bg');
	toHide.style.visiblity = "hidden";
	toHide.style.height = "0px";
	toHide.style.width="0px";
		if (document.getElementById('iEMail').style.visibility == "visible")
	      document.getElementById('iEMail').style.visibility = "hidden";
	if (document.getElementById('iVIP').style.visibility == "visible")
	      document.getElementById('iVIP').style.visibility = "hidden";
	if (document.getElementById('iMessage').style.visibility == "visible")
	      document.getElementById('iMessage').style.visibility = "hidden";
	if (document.getElementById('ciPics').style.visibility == "visible")
	      document.getElementById('ciPics').style.visibility = "hidden";
	if (document.getElementById('ciVids').style.visibility == "visible")
	      document.getElementById('ciVids').style.visibility = "hidden";
    if (document.getElementById('divtwtr').style.visibility == "visible")
	      document.getElementById('divtwtr').style.visibility = "hidden";
    if (document.getElementById('fb1').style.visibility == "visible")
	      document.getElementById('fb1').style.visibility = "hidden";
	if (document.getElementById('fb2').style.visibility == "visible")
	      document.getElementById('fb2').style.visibility = "hidden";
    if (document.getElementById('fb3').style.visibility == "visible")
	      document.getElementById('fb3').style.visibility = "hidden";	
    if (document.getElementById('blogDiv').style.visibility == "visible")
	      document.getElementById('blogDiv').style.visibility = "hidden";	
		  		  var myDiv = window.parent.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
}
function showbg()
{
	var toShow = document.getElementById('bg');
	toShow.style.visiblity = "visible";
	toShow.style.height = "100%";
	toShow.style.width="100%";
}
function hidebg()
{
	var toHide = document.getElementById('bg');
	toHide.style.visiblity = "hidden";
	toHide.style.height = "0px";
	toHide.style.width="0px";
}
function showiEMail()
{
	hideAllShowing("iEMail");
	var toShow = document.getElementById('iEMail');
    if (toShow.style.visibility == "hidden")
	{
          toShow.style.visibility = "visible";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = browserHeight() - 110 + "px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = browserHeight() - 110 + "px";
		  showbg();
	}
    else
	{
          toShow.style.visibility = "hidden";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
		  hidebg();
	}
}
function mouseIn(me)
{
	me.src = barType + me.id + "_hover.jpg";
}
function mouseOut(me)
{
	me.src = barType + me.id + "_normal.jpg";
}
function closeBar()
{
  var closeBar = document.getElementById('bar1Div');
  closeBar.style.visibility = "hidden"
  var showMinCoin = document.getElementById('minCoin');
  showMinCoin.style.visibility = "visible";
  initVisibility();
  		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	myFrame.style.height = 32+"px";
}
function openBar()
{
  var closeBar = document.getElementById('bar1Div');
  closeBar.style.visibility = "visible"
  var showMinCoin = document.getElementById('minCoin');
  showMinCoin.style.visibility = "hidden";
}
function addFBLike()
{
	var winUrl = "http://www.theduttons.com/";
    var fbliketd = document.getElementById('fblike');
	var newDiv = document.createElement('div');
	newDiv.style.width = "100px";
	newDiv.id="test";
	newDiv.className = "fb-like";
	newDiv.setAttribute("data-send","false");
	newDiv.setAttribute("data-layout","button_count");
	newDiv.setAttribute("data-width","450");
	newDiv.setAttribute("data-show-faces","true");
	newDiv.setAttribute("data-href",winUrl);
	fbliketd.innerHTML = newDiv.outerHTML;
}
function changeFBLike()
{
	var inURL = top.document.getElementById('websiteContent').src;
    var fbliketd = this.bar.document.body.childNodes[30].childNodes[5].childNodes[1].childNodes[3].childNodes[1].childNodes[0].cells[7];
	fbliketd.innerHTML = "";
	var newDiv = document.createElement('div');
	newDiv.style.width = "100px";
	newDiv.id="fbDiv";
	newDiv.className = "fb-like fb_edge_widget_with_comment fb_iframe_widget";
	newDiv.setAttribute("data-send","false");
	newDiv.setAttribute("data-layout","button_count");
	newDiv.setAttribute("data-width","450");
	newDiv.setAttribute("data-show-faces","true");
	newDiv.setAttribute("data-href",inURL);
	fbliketd.appendChild(newDiv);
}
function showiVIP()
{
	hideAllShowing("iVIP");
	var toShow = document.getElementById('iVIP');
    if (toShow.style.visibility == "hidden")
          toShow.style.visibility = "visible";
    else
          toShow.style.visibility = "hidden";
    //get parent iFrame

}
function showiMessage()
{
	hideAllShowing("iMessage");
	var toShow = document.getElementById('iMessage');
    if (toShow.style.visibility == "hidden")
	{
          toShow.style.visibility = "visible";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = browserHeight() - 110 + "px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = browserHeight() - 110 + "px";
		  showbg();
	}
    else
	{
          toShow.style.visibility = "hidden";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
          hidebg();
	}


}
function showPics()
{
	hideAllShowing("ciPics");
    var toShow = document.getElementById('ciPics');
    if (toShow.style.visibility == "hidden")
	{
          toShow.style.visibility = "visible";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = browserHeight() - 110 + "px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = browserHeight() - 110 + "px";
		  showbg();
	}
    else
	{
          toShow.style.visibility = "hidden";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
		  hidebg();
	}
}
function showVids()
{
	hideAllShowing("ciVids");
    var toShow = document.getElementById('ciVids');
    if (toShow.style.visibility == "hidden")
	{
          toShow.style.visibility = "visible";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = browserHeight() - 110+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = browserHeight() - 110+"px";
		  showbg();
	}
    else
	{
          toShow.style.visibility = "hidden";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
		  hidebg();
	}
}
function showBlog()
{
	hideAllShowing("blogDiv");
    var toShow = document.getElementById('blogDiv');
    if (toShow.style.visibility == "hidden")
	{
          toShow.style.visibility = "visible";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = browserHeight() - 110+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = browserHeight() - 110+"px";
		  showbg();
	}
    else
	{
          toShow.style.visibility = "hidden";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
		  hidebg();
	}
}
function showTwitter()
{
	hideAllShowing("divtwtr");
    var toShow = document.getElementById('divtwtr');
    if (toShow.style.visibility == "hidden")
	{
          toShow.style.visibility = "visible";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = browserHeight() - 110+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = browserHeight() - 110+"px";
		  showbg();
	}
    else
	{
          toShow.style.visibility = "hidden";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
		  hidebg();
	}
}
function showFacebook()
{
	hideAllShowing("fb");
	var toShow1 = document.getElementById('fb1');
	var toShow2 = document.getElementById('fb2');
	var toShow3 = document.getElementById('fb3');
    if (toShow1.style.visibility == "hidden")
	{
          toShow1.style.visibility = "visible";
		  toShow2.style.visibility = "visible";
		  toShow3.style.visibility = "visible";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = browserHeight() - 110+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = browserHeight() - 110+"px";
		  showbg();
	}
    else
	{
          toShow1.style.visibility = "hidden";
		  toShow2.style.visibility = "hidden";
		  toShow3.style.visibility = "hidden";
		  var myDiv = window.parent.document.getElementById('barDiv');
	      myDiv.style.height = 32+"px";
	      myDiv.style.position = "absolute";	
	      var myFrame = window.parent.document.getElementById('bar');
	      myFrame.style.height = 32+"px";
		  hidebg();
	}
}
function initVisibility()
{
	document.getElementById('iVIP').style.visibility = "hidden";
	document.getElementById('iMessage').style.visibility = "hidden";
	document.getElementById('ciPics').style.visibility = "hidden";
	document.getElementById('ciVids').style.visibility = "hidden";;
	document.getElementById('divtwtr').style.visibility = "hidden";
	document.getElementById('fb1').style.visibility = "hidden";
	document.getElementById('fb2').style.visibility = "hidden";
	document.getElementById('fb3').style.visibility = "hidden";
	document.getElementById('blogDiv').style.visibility = "hidden";	
}
function hideAllShowing(notHide)
{
	if (document.getElementById('iEMail').style.visibility == "visible" && notHide != "iEMail")
	      document.getElementById('iEMail').style.visibility = "hidden";
	if (document.getElementById('iVIP').style.visibility == "visible" && notHide != "iVIP")
	      document.getElementById('iVIP').style.visibility = "hidden";
	if (document.getElementById('iMessage').style.visibility == "visible"  && notHide != "iMessage")
	      document.getElementById('iMessage').style.visibility = "hidden";
	if (document.getElementById('ciPics').style.visibility == "visible"  && notHide != "ciPics")
	      document.getElementById('ciPics').style.visibility = "hidden";
	if (document.getElementById('ciVids').style.visibility == "visible" && notHide != "ciVids")
	      document.getElementById('ciVids').style.visibility = "hidden";
    if (document.getElementById('divtwtr').style.visibility == "visible" && notHide != "divtwtr")
	      document.getElementById('divtwtr').style.visibility = "hidden";
    if (document.getElementById('fb1').style.visibility == "visible" && notHide != "fb")
	      document.getElementById('fb1').style.visibility = "hidden";
	if (document.getElementById('fb2').style.visibility == "visible" && notHide != "fb")
	      document.getElementById('fb2').style.visibility = "hidden";
    if (document.getElementById('fb3').style.visibility == "visible" && notHide != "fb")
	      document.getElementById('fb3').style.visibility = "hidden";	
    if (document.getElementById('blogDiv').style.visibility == "visible" && notHide != "blogDiv")
	      document.getElementById('blogDiv').style.visibility = "hidden";			  
}
function browserHeight()
{

	xHeight = null;
	if(window.parent.window.innerHeight != null)
		xHeight =   window.parent.window.innerHeight;

	if(window.parent.document.body != null)
		xHeight = window.parent.document.body.clientHeight;
	
	//  if(window.screen != null)
	//    xHeight = window.screen.availHeight;	
	return xHeight;
}