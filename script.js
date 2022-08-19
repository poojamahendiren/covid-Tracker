var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);
let active=document.createElement("div");
active.setAttribute("id","active");
let recover=document.createElement("div");
recover.setAttribute("id","recover");
let death=document.createElement("div");
death.setAttribute("id","death");


div.append(input,button,active,recover,death);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    var url=`https://api.covid19api.com/dayone/country/${res}`;

    let result=await fetch(url);
    let result1=await result.json();
    var index=result1.length-1;
    console.log(result1[index].Active);
    active.innerHTML=`Total Active Cases:${result1[index].Active}`;
    console.log(result1[index].Recovered);
    recover.innerHTML=`Total Recover Cases:${result1[index].Recovered}`;
    console.log(result1[index].Deaths);
    death.innerHTML=`Total Death Cases:${result1[index].Deaths}`;
}