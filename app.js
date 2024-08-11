function press(e){
    document.getElementById('screen').value += e
    
}

function eq(){


   var a= document.getElementById('screen')

   a.value = eval(a.value)

}

function clr(){

    document.getElementById('screen').value = ''
}


function del(){

    var a=document.getElementById('screen');

     a.value= a.value.slice(0,-1);

}