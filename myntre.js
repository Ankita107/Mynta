let slide =document.querySelectorAll(".slideCard");
let card =document.querySelectorAll(".card");
let count =0;
slide.forEach(function(slids, index){
    slids.style.left =`${index * 100}%`

})
    function myFun(){
        slide.forEach(function(curVal){
            curVal.style.transform =`translateX(-${count *100}%)`
        })
    }
    setInterval(function(){
        count++;
        if(count == slide.length){
           count =0; 
        }
        myFun()
    
    }, 2000)
    //card
    card.forEach(function(cards){
        cards.addEventListener("click",function(){
            console.log(cards.firstElementChild.src);
            document.querySelector(".container").style.display="none";
            let div = document.createElement("div");
            div.classList.add("cardDetail");
            div.innerHTML=`
        <img src=${cards.firstElementChild.src} alt="">
        <div class="cardText">
            <h2>Top Tranding Wears</h2>
            <h2>UpTO 30 %off</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing el corporis.
</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing el corporis.
</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing el corporis.
</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing el corporis.
</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>`
      document.querySelector("body").appendChild(div)
     })
    })