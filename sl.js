var x=[" "," "," "," "," "," "," "," "," "," "," "];
var y=[" "," "," "," "," "," "," "," "," "," "," "];

function save()
{
var i=0;
while(x[i]!=" ")
{
	i++;
}
x[i]=document.getElementById("u").value;
y[i]=document.getElementById("p").value;
}
function check()
{
var us,pass;
var count=0;
us=document.getElementById("user").value;
pass=document.getElementById("pass").value;

i=0;
while(x[i]!=" ")
{
	if(x[i]==us&&y[i]==pass)
	{
		break;
		count=1;
	}
}
if(count==0)
var d="Invalid Login"
document.getElementById("invalid").innerHTML=d;
}
}