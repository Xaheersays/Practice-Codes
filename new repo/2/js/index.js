document.addEventListener('DOMContentLoaded', function() {
    var eles = document.getElementsByClassName("child-p");
    var eles = Array.from(eles)
    var eles = eles.slice(1);
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    var idx =  0
    console.log(eles)
    prev.addEventListener("click",function(){
        if (!eles[idx].classList.contains("blue")){
            idx-=1
        }
        if (idx>=1){
        curr = eles[idx]
        pr = eles[idx-1]
        curr.classList.remove("blue")
        pr.classList.remove("blue")
        idx-=2
        };
        if (idx<=0){idx=0}
        console.log(idx)

        
    });

    next.addEventListener('click',function(){
        if (idx<=4){
        let curr = eles[idx]
        let nx = eles[idx+1]
        curr.classList.add("blue")
        nx.classList.add("blue")
        idx+=2
        if (idx>=6){idx=5}
        console.log(idx)
        }
        
        
    });
   
});
