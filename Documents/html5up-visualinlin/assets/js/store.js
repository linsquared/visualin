// const cartBtn = document.querySelector('.fa-shopping-cart')
// const closeBtn = document.querySelector('#close-page')
// const clearCart = document.querySelector('.clear')
// const cartDOM = document.querySelector('.cart')
// const cartWrapper = document.querySelector('.cart-wrapper')
// const cartTotal = document.querySelector('.total')
// const cartContent = document.querySelector('.cart-content')
// const productDOM = document.querySelector('.product-list')
// const removeBtn = document.getElementsByClassName('remove')

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
(function(){
    const cartBtn = document.querySelector('.fa-shopping-cart')
    const cart = document.querySelector('.cart-wrapper')

    cartBtn.addEventListener('click', function(){
        cart.classList.toggle('show-cart')
    })

})()

const removeBtn = document.querySelectorAll('.remove')
// console.log(removeBtn)
for(i = 0; i < removeBtn.length; i++){
    const button = removeBtn[i]
    button.addEventListener('click', removeCartItems)
}


// adding items to the cart
function addToBag(){
    const addBtn = document.querySelectorAll('.addBag')
    addBtn.forEach(function(btn) {
        const images = document.querySelector('.shop-pic')
        const price = document.querySelector('.item-price')
        const name = document.querySelector('.item-name')
        btn.addEventListener('click', function(event){
            // console.log(event.target.parentElement)
            if(event.target.classList.contains('addBag')){
                let imgFullPath = images.children[0].src
                let imgPos = imgFullPath.indexOf('image');
                let imgPath = imgFullPath.slice(imgPos)
                // console.log(event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.)
                let itemPrice = (price.textContent).slice(1)
                let itemName = name.textContent
                const item = {};

                item.name = itemName
                item.price = itemPrice
                item.img = imgPath
               
                // console.log(item.price)

                const cartItems = document.createElement('div');
                cartItems.classList.add('cart-content');
                cartItems.innerHTML = `
                <div class="cart-img">
                        <img src=${item.img} alt="product img">
                    </div>
                    <div class="product-detail">
                        <span><h2 class="product-name">${item.name}</h2></span>
                        <span><h3 class="product-price">$${item.price}</h3></span>
                        <button class="remove">Remove</button> 
                    </div>
                    <div class="cart-quantity">
                        <input class="form-control quantity" type="number" value="1" min="1" required>
                    </div>
                </div>`;
            const cart = document.querySelector('.cart-items')
            const total = document.querySelector('.cart-footer')
                // console.log(total)
            cart.insertBefore(cartItems, total)
            alert('you item has been added')
            }
        })
    })
    updateCartTotal()
};
addToBag()

const quantityInput = document.querySelectorAll('.quantity')
for(let i = 0; i < quantityInput.length; i++){
    let input = quantityInput[i]
    input.addEventListener('change', quantityChanged)
}


// ending quote for the ready()
}



function removeCartItems(event){
    const buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}



// update the items in the cart
function updateCartTotal(){
    const cartContent = document.querySelectorAll('.product-detail')
    let total = 0
    for(let i = 0; i < cartContent.length; i++){
        cartRow = cartContent[i]
        // console.log(cartRow)
        const priceElement = cartRow.children[1].textContent
        const price = parseInt(priceElement.slice(1))
        const quantity = parseInt(document.querySelectorAll('.cart-quantity')[0].children[0].value)
        total = total +(price * quantity)
    }
    document.querySelector('.total').innerText = total
}

updateCartTotal()

// function removeItem(){
//     for(let i = 0; i < removeBtn.length; i++){
//        let button = removeBtn[i]
//        button.addEventListener('click', function(event){
//         const buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//        })
//     }
 
// }

function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}




// function removeItem(){
//     const removeBtn = document.querySelector('.remove')
//     for(let i = 0; i < removeBtn.length; i++){
//         removeBtn[i]
//         removeBtn.addEventListener('click', function(){
//             console.log('clicked')
//         })
//     }
// }

// removeItem()

// //  show total
//  function total(){

//     const total = [];
//     const items = document.querySelectorAll('.item-price');



//     items.forEach(item => {
//         total.push(item.textContent)
//     })

//     console.log(items)

//     const totalMoney = total.map(item => Number(item.slice(1)))
//     const finalTotal = totalMoney.reduce((a,c) => {
//         a += c
//         return a
//     },0)

//     const totalCartDom = document.querySelector('.total')
//     totalCartDom.innerHTML = finalTotal
// //    console.log('testing')
// }

// total()

// for(let i = 0; i < removeBtn.length; i++){
//      removeBtn[i]
//     removeBtn.addEventListener('click', function() {
//         console.log('clicked')
//     })
// }

// let cart = []

// // getting the products
// class Products {
//     async getProducts(){
//         try{
//             let result = await fetch('assets/js/products.json')
//             let data = await result.json();
//             let products = data.items;
//             products = products.map(item => {
//                 const {name, price} = item.fields;
//                 const {id} = item.sys;
//                 const image = item.fields.image.fields.file.url;
//                 return {name, price, id, image}
//             })
//            return products
//         }catch (error) {
//             console.log(error);
//         }
//     }
// }

// // displaying the products
// class UI {
//     displayProducts(products){
//         let result = '';
//         products.forEach(product => {
//             result +=
//             `<article class="product">
//             <h2><a href="./artworks/deep.html">${product.name}</a></h2>
//             <a href="./artworks/lilies.html" class="image fit"><img src=${product.image} alt="image of original painting Lilies" /></a>
//             <p>Original Acrylic Art</p>
//             <span><h3>$${product.price}</h3></span>
//         </article>`;
//         });
//         productDOM.innerHTML += result
//     }
//     getBagBtn()
// }

// // local storage {
// // class Storage {
// //     static saveProducts(product){
// //         localStorage.setItem('products'. JSON.stringify(products))
// //     }
// // }

// document.addEventListener('DOMContentLoaded', () => {
//     const ui = new UI();
//     const products = new Products();

//     // get al products
//     products.getProducts().then(products => {
//         ui.displayProducts(products);
//     }).then( () => {
//         ui.getBagBtn()
//     }

//     )
// })

