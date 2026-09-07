 Itemss = JSON.parse(localStorage.getItem("totalItems")) || [];
let Bagitem;

onload();

function onload(){
    loadBagitems();
    displayBagItems();
     PriceDetails();
}


function loadBagitems(){

   Bagitem = Itemss.map(itemId =>{

    console.log(Itemss)
        for(let i=0;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }
        }
    })
    console.log(Bagitem)

}


function displayBagItems(){
     let DisplaycartItem=document.querySelector('.product-list');
    let innerHtml=``;
    Bagitem.forEach(item => {
        innerHtml+=generateDiplayProduct(item);
        
    });

        DisplaycartItem.innerHTML=innerHtml;


}

function generateDiplayProduct(item){
    
    return `<div class="product-detail">
            <img src="${item.Image}" alt="Spain Jersey">

            <div class="product-info">
                <h3>${item.Name}</h3>

                <p class="price">
                    <span class="original-price">${item.actual_price}</span>
                    <span class="discount-price">${item.current_Price}</span>
                </p>

                <button class="remove-btn" onclick="RemovefromBag(${item.id});">Remove</button>
            </div>
    </div>
    `
    
}


function RemovefromBag(itemId) {

    Itemss = Itemss.filter(id => id !== itemId);

    localStorage.setItem("totalItems", JSON.stringify(Itemss));

    loadBagitems();
    displayBagItems();
    PriceDetails();
}


function PriceDetails(){
    let DisplayBagSumaary=document.querySelector('.Bag-summary');
    let totalMrp=0;
    let discount=0;
   

    Bagitem.forEach(item=>{
        totalMrp+=item.actual_price;
        discount+=item.current_Price;
    });
     let finalamt=discount;

    DisplayBagSumaary.innerHTML=`<h2>Price Details</h2>
        <p>Total MRP: ₹ ${totalMrp}</p>
        <p>Discount: ₹ ${discount}</p>
        <hr>
        <h3>Total Amount: ₹${finalamt}</h3>
        <button class="place-order">Place Order</button>`
}


 


