let addToCart = () => {

    let productName = document.querySelector('.card-title').innerHTML;
    let productPrice = document.querySelector('#price').innerText;
    let productImage = document.querySelector('div > img');
    console.log(productName, productPrice, productImage);
    count();
    createCartItem(productName, productPrice, productImage);
}


let numOfItems=0;

let count = () => {
    
    let badge = document.querySelector('#item-count');
    numOfItems++;

    
    badge.innerHTML = numOfItems;

}

    let num = 1;
// let quantityCount = (count) => {
//     let count = document.querySelector('.count');
//     // console.log(count);
//     num++;

//     count.innerHTML = num;
// }

let createCartItem = (productName, productPrice, productImage) => {
    // console.log("createCartItem called")
    // console.log(productName, productPrice)
    let offcanvasBody = document.querySelector('.offcanvas-body');
    

    let cartItem = document.createElement('div');
    cartItem.className = "Cart-Item";

    let imageBox = document.createElement('div');
    imageBox.className = "image-box";

    let image = document.createElement('img');
    image.src = productImage.src;
    imageBox.appendChild(image);

    let about = document.createElement('div');
    about.className = "about";

    let title = document.createElement('h3');
    title.className = "title";
    title.innerHTML = productName;

    let price = document.createElement('h6');
    price.className = "price";
    price.innerHTML = productPrice;

    about.appendChild(title);
    about.appendChild(price);

    let prices = document.createElement('div');
    prices.className = "prices";

    let amount = document.createElement('div');
    amount.className = "amount";

    let counter = document.createElement('div');
    counter.className = "counter";

    let plusButton = document.createElement('div');
    let count = document.createElement('div');
    let minusButton = document.createElement('div');
    plusButton.className = "btns";
    count.className = "count";
    count.innerHTML = quantityCount(count);
    minusButton.className = "btns";
    plusButton.innerText = "+";
    minusButton.innerText = "-";

    counter.appendChild(plusButton);
    counter.appendChild(count);
    counter.appendChild(minusButton);


    prices.appendChild(amount);
    prices.appendChild(counter);

    amount.innerHTML = calculateAmount(price, count);
    
    let removeBtn = document.createElement('div');
    removeBtn.className = "remove";
    removeBtn.onclick = deleteItem();


    cartItem.appendChild(imageBox);
    cartItem.appendChild(about);
    cartItem.appendChild(prices);
    cartItem.appendChild(removeBtn);





    offcanvasBody.appendChild(cartItem);
}


let calculateAmount = (price, count) => {
    let amount = price * count;

    return amount;
}

let deleteItem = () => {
    let offcanvasBody = document.querySelector('.offcanvas-body');
    let cartItem = document.querySelector('.Cart-Item');
    offcanvasBody.removeChild(cartItem);

}