<CFIF NOT isdefined("session.bar_id")>
   <cflocation url="getbar.cfm">
</CFIF>
<CFIF NOT isdefined("form.step")>
   <CFSET form.step = "Step One">
</CFIF>
<CFIF isdefined("form.step") AND 
<CFIF isdefined("form.numButtons")>
   <CFSET numberOfButtons = form.numButtons>
<cfelse>
   <CFSET numberOfButtons = 0>
</CFIF>
<CFIF form.step eq "step Two">
<CFQUERY name="buttons"  DATASOURCE="#request.dsn#">
   select * from bar_items
</CFQUERY>
</CFIF>
<cfset numArray=ArrayNew(1)>
<cfset numArray[1]="First">
<cfset numArray[2]="Second">
<cfset numArray[3]="Third">
<cfset numArray[4]="Fourth">
<cfset numArray[5]="Fifth">
<cfset numArray[6]="Sixth">
<cfset numArray[7]="Seventh">
<cfset numArray[8]="Eighth">
<cfset numArray[9]="Ninth">
<cfset numArray[10]="Tenth">
<cfset numArray[11]="Eleventh">
<cfset numArray[12]="Twelfth">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<CFIF form.step eq "step Two">
<script type="text/javascript">
function changeSelect(inID)
{
	var myImg = new Array();
	var myOptions = new Array();
	<CFOUTPUT>
	<CFSET cntr = 1>
	<CFLOOP query="buttons">
	myImg[#cntr#] = '#buttons.preview_image#';
	myOptions[#cntr#] = '#buttons.select_code#';
    <CFSET cntr = cntr + 1>
    </CFLOOP>	
	</CFOUTPUT>
	var imgId =  "img"+inID;
	var divID =  "options"+inID;
	var getVal = "btn"+inID
	var image = document.getElementById(imgId);
	var division = document.getElementById(divID);
	var selectedVal = document.getElementById(getVal).value;
	image.src = myImg[selectedVal];
	division.innerHTML = myOptions[selectedVal];
	division.border="1px";
	if(selectedVal == 0)
	{
		division.className="div hidden";
	    image.className="hidden";
		division.innerHTML = ".....";
		image.src="";
	}
	else
	{
		division.className="div visible";
		image.className="visible";
	}
}
function openCoolIris()
{
	window.open("http://www.cooliris.com/yoursite/express/builder/")
}
function openContactMe()
{
	window.open("http://www.contactme.com/contact_form?utm_source=footer&utm_medium=form&utm_term=icon&utm_content=get&utm_campaign=product&r=product-form-footer-get-logo")
}
</script>
</CFIF>
<style>
.div
{
border:1px solid;
border-radius:5px;
-moz-border-radius:25px; /* Firefox 3.6 and earlier */
width:550px;
} 
.hidden
{
	visibility:hidden;
}
.visible
{
	visibility:visible;
}
 
</style>
<LINK HREF="makebar.css" REL="stylesheet" TYPE="text/css">
</head>

<body>

<h1> Create your own bar 
<CFIF form.step EQ "Step One">
- Step 1</h1>
<p> In the below fields, you will select your bar options, and step by step you will choose the options for your bar. First you will choose the bar name and layout. </p>
<CFFORM ACTION="makebar.cfm" METHOD="post" NAME="step1" ID="step1">
Type the name you wish your bar to be known by: <input type="text" name="barname" /><br /><br />
Select the bar style you wish to have: <br />
<input type="radio" name="barstyle" value="1" checked/> Bluinium Blue <img src="http://www.bluinium.com/images/bar/samples/bb.jpg"></img></input><br /><br />
Select the number of buttons you wish to have: 
<select name="numButtons">
  <option value="1">One Button</option>
  <option value="2">Two Buttons</option>
  <option value="3">Three Buttons</option>
  <option value="4">Four Buttons</option>
  <option value="5">Five Buttons</option>
  <option value="6" selected>Six Buttons</option>
  <option value="7">Seven Buttons</option>
  <option value="8">Eight Buttons</option>
  <option value="9">Nine Buttons</option>
  <option value="10">Ten Buttons</option>
  <option value="11">Eleven Buttons</option>
  <option value="12">Twelve Buttons</option>
</select>
<br /> <br />
Select Visibility: <br /> <input type="radio" name="visibleW" value="1" checked> Site (Visible only while on this domain.) </input>
<br /> <input type="radio" name="visibleW" value="2"> Directory (Visible only while in this directory.) </input>
<br /> <input type="radio" name="visibleW" value="3"> Period (Visible no matter where you go until window is closed or address at top is changed.)</input>
<br /> <br />
<input type="submit" name="step" value="Step Two" />
</CFFORM>
<CFELSEIF form.step EQ "Step Two">
- Step 2</h1>
<p> Select the buttons you wish to have on the bar. If a button is left as None Selected, your number of buttons will change accordingly.</p>
<CFFORM ACTION="makebar.cfm" METHOD="post" NAME="step2" ID="step2">
<CFSET cntr = 1>
<CFLOOP condition="cntr LESS THAN OR EQUAL TO numButtons">
<CFOUTPUT>
Select the #numArray[cntr]# button type:
<select id="btn#cntr#" onChange="javascript:changeSelect(#cntr#);">
   <option value="0">None Selected</option>
<CFLOOP query="buttons">
   <option value="#buttons.Item_id#">#buttons.Item_name#</option>
   </CFLOOP>
</select>
<img class="hidden" id="img#cntr#" src="" width="32px" height="32px" />
<div class="div hidden" id="options#cntr#"></div>
</CFOUTPUT><br />
<CFSET cntr = cntr + 1>
</CFLOOP>
<input type="submit" name="step" value="Step Three" />
</CFFORM>
<CFELSEIF form.step EQ "Step Three">
- Step 3</h1>
<p> You can view a preview of the bar below. </p>
</CFIF>

</body>
</html>