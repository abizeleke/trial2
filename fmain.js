var a;
function show(){
    if(a==1){
        document.getElementById("div2").style.display="none";
        return a=0;
    }
    else{
        document.getElementById("div2").style.display="flex ";
        return a=1;
    }
}
var a;
function show2(){
    if(a==1){
        document.getElementById("div3").style.display="none";
        return a=0;
    }
    else{
        document.getElementById("div3").style.display="flex ";
        return a=1;
    }
}

var b;
function tt(){
    if(b==1){
        document.getElementById("sidebar").style.minWidth="0px";
        document.getElementById("div1").style.display="none";
        
        return b=0;
    }
    else{
        document.getElementById("sidebar").style.minWidth="170px" ;
        document.getElementById("div1").style.display="none";
        
        return b=1;
    }
}
var c;
function k1(){
    if(c==1){
        document.getElementById("flexing").style.minWidth="400px";
        document.getElementById("kk1").style.display="none";
        document.getElementById("sidebar").style.minWidth="0px";
        document.getElementById("kk2").style.display="none";
        document.getElementById("kk3").style.display="none";
        document.getElementById("kk4").style.display="none";
        return c=0;
    }
    else{
        document.getElementById("flexing").style.minWidth="0px";
        document.getElementById("kk1").style.display="flex";
        document.getElementById("sidebar").style.minWidth="0px";
        return c=1;
    }
}

var c;
function k2(){
    if(c==1){
        document.getElementById("flexing").style.minWidth="400px";
        document.getElementById("kk2").style.display="none";
        document.getElementById("sidebar").style.minWidth="0px";
        document.getElementById("kk1").style.display="none";
        document.getElementById("kk3").style.display="none";
        document.getElementById("kk4").style.display="none";
        return c=0;
    }
    else{
        document.getElementById("flexing").style.minWidth="0px";
        document.getElementById("kk2").style.display="flex";
       
        document.getElementById("sidebar").style.minWidth="0px";
        return c=1;
    }
}
var c;
function k3(){
    if(c==1){
        document.getElementById("flexing").style.minWidth="400px";
        document.getElementById("kk3").style.display="none";
        document.getElementById("sidebar").style.minWidth="0px";
        document.getElementById("kk1").style.display="none";
        document.getElementById("kk2").style.display="none";
        document.getElementById("kk4").style.display="none";
        return c=0;
    }
    else{
        document.getElementById("flexing").style.minWidth="0px";
        document.getElementById("kk3").style.display="flex";
       
        document.getElementById("sidebar").style.minWidth="0px";
        return c=1;
    }
}
var d;
function k4(){
    if(d==1){
        document.getElementById("flexing").style.minWidth="400px";
        document.getElementById("kk4").style.display="none";
        document.getElementById("sidebar").style.minWidth="0px";
        document.getElementById("kk1").style.display="none";
        document.getElementById("kk2").style.display="none";
        document.getElementById("kk3").style.display="none"
   
        return d=0;
    }
    else{
        document.getElementById("flexing").style.minWidth="0px";
        document.getElementById("kk4").style.display="flex";
        document.getElementById("sidebar").style.minWidth="0px";
        return d=1;
    }
}
var e;
function se(){
    if(e==1){
        document.getElementById("navig1").style.minWidth="280px";
        document.getElementById("search-bar").style.minWidth="80px";
        document.getElementById("search-bar").style.display="flex";
        document.getElementById("search").style.borderTopRightRadius="0px";
        document.getElementById("search").style.borderBottomRightRadius="0px";
        return e=0;
    }
    else{
        document.getElementById("navig1").style.minWidth="160px";
        document.getElementById("search-bar").style.minWidth="0px";
        document.getElementById("search-bar").style.display="none";
        document.getElementById("search").style.borderTopRightRadius=" 22px";
        document.getElementById("search").style.borderBottomRightRadius="22px";
        return e=1;
    }
}