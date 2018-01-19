var heading = document.querySelector('h1');
heading.innerHTML='hello world' ;
var image = document.querySelector('img');
image.onclick = function/*函式*/()
{
var source = image.getAttribute('src');
	if(source === 'images/9736f557cc680ab5baaa12b2bfd2fbd2--error-code-code-for.jpg')
	{
	image.setAttribute('src','images/PA060620.jpg');
	}
	else
	{
	image.setAttribute('src','images/9736f557cc680ab5baaa12b2bfd2fbd2--error-code-code-for.jpg');
	}
};
var button = document.querySelector('button');
var heading = document.querySelector('h1');

function setUserName(){
	var myname =prompt ('打你的鳥名');
	localStorage.getItem('name',myname);
	heading.innerHTML = '超猛der拉,' + myname ;
}
if(!localStorage.getItem('name'))
{
setUserName();
} else
{
var storedname = localStorage.getItem('name');
heading.innerHTML = '超猛der拉,'+ storedname ;
}
button.onclick =function(){setUserName();
};
