//Javascript to create the bar objects

function makeFacebook()
{
    var newDiv = document.createElement('div');
	newDiv.id = "facebook";
	newDiv.style.height = "450px";
	newDiv.style.width = "600px";
	//newDiv.style.visibiliy = "hidden";
	var newDiv1 = document.createElement('div');
	newDiv1.id = "fb1";
	newDiv1.className = "fb-like-box";
	newDiv1.style.backgroundColor = "#FFF";
	newDiv1.setAttribute("data-href","http://www.facebook.com/theduttons");
	newDiv1.setAttribute("data-width","300");
	newDiv1.setAttribute("data-height","340");
	newDiv1.setAttribute("data-show-faces","true");
	newDiv1.setAttribute("data-stream","false");
	newDiv1.setAttribute("data-header","false");
	var newDiv2 = document.createElement('div');
	newDiv2.id = "fb2";
	newDiv2.className = "fb-activity";
	newDiv2.style.backgroundColor = "#FFF";
	newDiv2.setAttribute("data-href","www.theduttons.com");
	newDiv2.setAttribute("data-width","300");
	newDiv2.setAttribute("data-height","340");
	newDiv2.setAttribute("data-show-faces","true");
	newDiv2.setAttribute("data-stream","false");
	newDiv2.setAttribute("data-header","false");
	newDiv.add(newDiv1);
	document.body.add(newDiv);
	
	
//<div id="facebook" style="height:450; width:600;" >
//<div id="fb1" class="fb-like-box" data-href="http://www.facebook.com/theduttons" data-width="300" data-height="340" data-show-faces="true" data-stream="false" data-header="false" style="background-color:#FFF"></div>
//<div id="fb2" class="fb-activity" data-site="www.theduttons.com" data-width="300" data-height="450" data-header="true" data-font="tahoma" data-recommendations="false"style="background-color:#FFF"></div>
//<div id="fb3" class="fb-comments" data-href="http://www.theduttons.com" data-num-posts="2" data-width="300"style="background-color:#FFF"></div>
//</div>
}
function makeTwitter()
{
}
function makePics()
{
	
	var newDiv = document.createElement('div');
	newDiv.id = "ciPics";
	var newImg = document.createElement('img');
	newImg.style.visibility = "hidden";
	newImg.style.width = "0px";
	newImg.style.height = "0px";
	newImg.src = "http://c.gigcount.com/wildfire/IMP/CXNID=2000002.11NXC/bT*xJmx*PTEzNDQ*OTIwODM1MjImcHQ9MTM*NDQ5MjEwMjQyMCZwPTkwMjA1MSZkPSZnPTEmb2Y9MA==.gif";
	newImg.border = 0;
	var newObj = document.createElement('object');
	newObj.id = "ci_52055_o";
	newObj.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
	newObj.width="400";
	newObj.height="248";
	var newPara1 = document.createElement('parameter');
	newPara1.name = "movie";
	newPara1.value = "http://apps.cooliris.com/embed/cooliris.swf?t=1307582197";
	var newPara2 = document.createElement('parameter');
	newPara2.name = "allowFullScreen";
	newPara2.value = "true";
	var newPara3 = document.createElement('parameter');
	newPara3.name = "allowScriptAccess";
	newPara3.value = "always";
	var newPara4 = document.createElement('parameter');
	newPara4.name = "bgcolor";
	newPara4.value = "#121212";	
	var newPara5 = document.createElement('parameter');
	newPara5.name = "flashvars";
	newPara5.value = "backgroundcolor=%23000000&backgroundimage=http%3A%2F%2Fwww.cooliris.com%2Fyoursite%2Fexpress%2Fbuilder%2Fimages%2Fthemes%2Fspectrum.jpg&style=dark&glowcolor=%23FFFFFF&feed=api%3A%2F%2Fpicasaweb.google.com%2F%3Fuser%3D115024720503872534799%26album%3DDutton_web_pictures";
	var newPara6 = document.createElement('parameter');
	newPara6.name = "wmode";
	newPara6.value = "opaque";	
	var newEmbed = document.createElement('embed');
	newEmbed.id = "ci_52055_e";
	newEmbed.type = "application/x-shockwave-flash";
    newEmbed.src="http://apps.cooliris.com/embed/cooliris.swf?t=1307582197";
	newEmbed.width="400";
	newEmbed.height="248";
	newEmbed.allowFullScreen="true";
	newEmbed.allowScriptAccess="always";
	newEmbed.bgcolor="#121212";
	newEmbed.flashvars="backgroundcolor=%23000000&backgroundimage=http%3A%2F%2Fwww.cooliris.com%2Fyoursite%2Fexpress%2Fbuilder%2Fimages%2Fthemes%2Fspectrum.jpg&style=dark&glowcolor=%23FFFFFF&feed=api%3A%2F%2Fpicasaweb.google.com%2F%3Fuser%3D115024720503872534799%26album%3DDutton_web_pictures"
	newEmbed.wmode="opaque";
	
	
//	<!---<img style="visibility:hidden;width:0px;height:0px;" border=0 width=0 height=0 src="http://c.gigcount.com/wildfire/IMP/CXNID=2000002.11NXC/bT*xJmx*PTEzNDQ*OTIwODM1MjImcHQ9MTM*NDQ5MjEwMjQyMCZwPTkwMjA1MSZkPSZnPTEmb2Y9MA==.gif" />
//	<object id="ci_52055_o" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="400" height="248">
//	<param name="movie" value="http://apps.cooliris.com/embed/cooliris.swf?t=1307582197"/>
//	<param name="allowFullScreen" value="true"/>
//	<param name="allowScriptAccess" value="always"/>
//	<param name="bgColor" value="#121212" />
//	<param name="flashvars" value="backgroundcolor=%23000000&backgroundimage=http%3A%2F%2Fwww.cooliris.com%2Fyoursite%2Fexpress%2Fbuilder%2Fimages%2Fthemes%2Fspectrum.jpg&style=dark&glowcolor=%23FFFFFF&feed=api%3A%2F%2Fpicasaweb.google.com%2F%3Fuser%3D115024720503872534799%26album%3DDutton_web_pictures" />
//	<param name="wmode" value="opaque" />
//	<embed id="ci_52055_e" type="application/x-shockwave-flash" src="http://apps.cooliris.com/embed/cooliris.swf?t=1307582197" width="400" height="248" allowFullScreen="true" allowScriptAccess="always" bgColor="#121212" flashvars="backgroundcolor=%23000000&backgroundimage=http%3A%2F%2Fwww.cooliris.com%2Fyoursite%2Fexpress%2Fbuilder%2Fimages%2Fthemes%2Fspectrum.jpg&style=dark&glowcolor=%23FFFFFF&feed=api%3A%2F%2Fpicasaweb.google.com%2F%3Fuser%3D115024720503872534799%26album%3DDutton_web_pictures" wmode="opaque">
//	</embed>
//	</object>--->
	
}
function makeVideos()
{
}
function makeBlog()
{
	
}
function makeVIP()
{
	var newFrame = document.createElement('iframe');
	newFrame.id = "iVIP";
	newFrame.Height = "80%";
	newFrame.width = "650px";
	newFrame.src = "http://theduttons.us1.list-manage1.com/subscribe/post?u=114a96351d57b50b27e4322db&id=b36dbb9332";
	document.body.add(newFrame);
}
function makeMessage()
{
   var newDiv = document.createElement('div');
   newDiv.id = "iMessageDiv";
   var newFrame = document.createElement('iframe');
   newFrame.height = "410px";
   newFrame.width = "650px";
   newFrame.src = "http://www.contactme.com/4ed2cb956eed670001008f14/modal?r=http%3A%2F%2Fwww.bluinium.com%2Fwebsite.cfm%3Fwebsite_code%3Dwww.theduttons.com&a=wibiya&u=http%3A%2F%2Fwww.theduttons.com%2F%3Fload%3Dyes&f=4ed2cb956eed670001008f14&ha=left&va=middle&tx=Contact&c=369&vid=1390c30efa44f99";
   newDiv.add(newFrame);
   document.body.add(newDiv);
}