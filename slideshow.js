var curr = 0;
var total = 4;

function nxt(){

        curr++;
        if(curr >= total){
            curr = 0
        }
        var sld = document.getElementsByClassName("slide");
        for(var i = 0; i < sld.length; i++){
            sld[i].style.display = "none";
        }
        sld[curr].style.display = "block";
        
        console.log(curr);

}

function prv(){

    curr--;
    if(curr < 0){
        curr = total -1
    }
    console.log(curr);

    var sld = document.getElementsByClassName("slide");
    for(var i = 0;  i < sld.length; i++){
        sld[i].style.display = "none";
    }
    sld[curr].style.display = "block";

}
