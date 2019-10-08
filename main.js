function showMenu(){
    var menumain = document.getElementById("nav");
    if(menumain.className === "mainnav")
    {
        menumain.className += "small";
    }
    else{
        menumain.className = "mainnav"
    }
   
}