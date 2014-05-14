<cfset TwitCode='#url.code#'>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Twitter in Frame</title>
<script charset='utf-8' src='http://widgets.twimg.com/j/2/widget.js'></script>
<script> 
function createTwitter()
{
	return new TWTR.Widget({  version: 2,  type: 'profile',  rpp: 5,  interval: 30000,  width: '300',  height: 300,  theme: {    shell: {      background: '#f7f4f7',      color: '#050505'    },    tweets: {      background: '#f7f2f7',  color: '#030303',      links: '#eb506a'    }},  features: {    scrollbar: false,    loop: false,    live: true,    behavior: 'all'  }});
}  
</script>
</head>
<body>
     <script>createTwitter().render().setUser('Duttons').start();</script>
</body>
</html>
