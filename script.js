var name = prompt("Ismingizni kiriting, pajalsta:")
while(!isNaN(name)  ) {
    name = prompt("Prostit pajalsta, faqat harflar mumkin!")
}
var pyear = +prompt("Hozirgi yilni sonlar orqali kiriting:")
while(isNaN(pyear) || pyear===0){
    pyear = +prompt("Vaay Dabba, etip turimmanu son orqali kirit dep. P.S. IZZAT AKA sizga taluqli emas, sizga mojno :-) ")
}

var byear = +prompt("Sonlani yoziwni o'rgangan bo'sez, endi tug'lgan yilizniham yozsez bo'ladi:")
while(isNaN(byear) || byear===0) {
    byear = +prompt("Tariflashga til ojiz🤦‍♂️, chungan chundi🙄")
}




function matn() {
    return "Mening ismim " + name + ", hozir " + pyear + " yil, tug'ilgan yilim esa " + byear + ". Demak mening yoshim " + (pyear-byear)
   
}



 alert(matn())

 