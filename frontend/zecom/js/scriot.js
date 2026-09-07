let Itemss=JSON.parse(localStorage.getItem("totalItems")) || [];


displayitems();
DisplaycartCount()






function addtobag(itemid){
    Itemss.push(itemid);
    localStorage.setItem("totalItems",JSON.stringify(Itemss));
     DisplaycartCount();
}

function DisplaycartCount() {
    let Count = document.querySelector(".add-to-bag-count");
     if (!Count) return; 

    if (Itemss.length > 0) {
        Count.innerText = Itemss.length;
        Count.style.visibility = "visible";
    } else {
        Count.style.visibility = "hidden";
    }
}

function displayitems(){

    let Elementcontainer=document.querySelector('.container');

    

    if(!Elementcontainer){
        return;
    }
    let innnerHtml='';

    items.forEach(item=>{

    innnerHtml +=`
        <div class="Product"> 
        <img src="${item.Image}" alt="Jersey">
        <h3>${item.Name}</h3>
        <p class="price">${item.current_Price}
            <span>${item.actual_price}</span>
        </p>
          <button id="add-to-cart"  onclick="addtobag(${item.id})">Add to Cart</button>
        </div> `

    });
    Elementcontainer.innerHTML=innnerHtml;
}




