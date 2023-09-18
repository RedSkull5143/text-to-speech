let txt=new SpeechSynthesisUtterance();
let listen=document.getElementById("btn");
let clear=document.getElementById("btn1");

listen.addEventListener('click', function(){
    txt.text=document.getElementById("area").value;
    if(txt.text==""){
        alert("Enter Text!!")
    }else{
    window.speechSynthesis.speak(txt)
    }
});

clear.addEventListener('click',function(){
    console.log("hi");
    document.getElementById("area").value="";
})

