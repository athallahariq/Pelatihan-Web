function ON(){
    document.getElementById('lampu').src='pic_bulbon.gif';
}
function OFF(){
    document.getElementById('lampu').src='pic_bulboff.gif';
}
function Destroy(){
    document.getElementById('tulisan').style.display='none';
}
function Show(){
    document.getElementById('tulisan').style.display='block';
}
var x,y,z ;
x=10;
y=20;
z=x+y;
function Hitung(){
    document.getElementById('tulisan').innerHTML=z;
}
function Hitung(){
    window.alert(z);
}
var x = new Date();
function Show_Tanggal(){
    document.getElementById('tulisan').innerHTML=x;
}
function input_Show(){
    var teks=document.getElementById("mytext").value;
    document.getElementById("tampilkan").innerHTML=teks;
}