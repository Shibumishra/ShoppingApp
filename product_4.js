$(document).ready(function () {
    console.log("dom ready!!");
  
    function renderProductImages(url, pos) {
      var image = $("<img>").attr("src", url).addClass("preview-img");
      if (pos === 0) {
        image.addClass("active");
      }
      image.click(function () {
        $(".preview-img").removeClass("active");
        image.addClass("active");
        $("#left-preview-img").attr("src", url);
      });
      $("#product-img").append(image);
    }
  
    $.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product/4",
      function (response) {
        var productData = response;
        $("#left-preview-img").attr("src", productData.preview);
        var MainCard = document.getElementById("product-conterner");
        var productName = document.createElement("h1");
       
        productName.innerText = productData.name;
        productName.id = "product-title";
        var productBrand = document.createElement("p");
        productBrand.innerText = productData.brand;
        productBrand.id = "product-brand";
        var prductPrice = document.createElement("h4");
        prductPrice.innerText = "Price: Rs";
        prductPrice.className = "product-price";
        var prductPriceSpan = document.createElement("span");
        prductPrice.appendChild(prductPriceSpan);
        prductPriceSpan.innerText = productData.price;
        prductPriceSpan.id = "product-price";
        var prductHeading = document.createElement("h4");
        prductHeading.innerText = "Description";
        prductHeading.id = "product-heading";
        var productDescription = document.createElement("p");
        productDescription.innerText = productData.description;
        productDescription.id = "description";
        var prductPreviw = document.createElement("h4");
        prductPreviw.innerText = "Product Preview";
        prductPreviw.className = "product-preview";
        var AddBtn = document.getElementById("AddBtn");
        var photoproduct = document.getElementById("product-img");
  
        var productCard = document.getElementById("prodect-details");
        productCard.appendChild(productName);
        productCard.appendChild(productBrand);
        productCard.appendChild(prductPrice);
        productCard.appendChild(prductHeading);
        productCard.appendChild(productDescription);
        productCard.appendChild(prductPreviw);
        MainCard.appendChild(productCard);
        MainCard.appendChild(photoproduct);
        MainCard.appendChild(AddBtn);
        var addToCardBtn = $("#add-to-cart-btn");
        var products = []
        for(var i=0; i<addToCardBtn.length; i++){
          var cartBtn = addToCardBtn[i]
          cartBtn.addEventListener('click', ()=>{
           
            var product = {
              id: productData.id,
              name: (productName.innerText = productData.name),
              brand: (productBrand.innerText = productData.brand),
              description: (productDescription.innerText = productData.description),
              price: (prductPriceSpan.innerText = productData.price),
              totalPrice: (prductPriceSpan.innerText = productData.price),
              photos: productData.photos,
              image:productData.photos[0],
              preview: productData.preview,
              size: productData.size,
              isAccessory: productData.isAccessory,
              count: 1,
            }
            addItemLocal(product)
          })
        }
        function addItemLocal(product){
          var cartItem = JSON.parse(localStorage.getItem('productList'))
          if(cartItem === null){
            products.push(product)
            localStorage.setItem('productList',JSON.stringify(products))
          }else{
            cartItem.forEach(item => {
              if(product.name == item.name){
                product.count = item.count += 1;
                product.totalPrice = item.totalPrice += product.totalPrice;
              }else{
                products.push(item)
              }
            });
            products.push(product)
          }
          localStorage.setItem('productList', JSON.stringify(products))
          window.location.reload()
          console.log(product)
        }
        function displayCartItem(){
          var html = '';
          var cartItem = JSON.parse(localStorage.getItem('productList'))
          cartItem.forEach(item =>{
            html += `
            <div class="forCount"><h5>Total Items:${item.count}</h5></div>
            <div id="MainChekoutCon">
            <div class="cardList">
            <div class="forImage"><img src="${item.image}" alt=""></div>
            <div>
            <h4 class="forName">${item.name}</h4>
            <p class="forPrice">Amount: Rs${item.price}</p>
            </div>
            <div class="removeItem"><i class="fas fa-trash remove"></i></div> 
            </div>
            </div>
            
            `
          })
          document.querySelector(".displayCart").innerHTML = html;
        }
        displayCartItem()
        function cartNumberDisplay(){
          var cartNumber = 0;
          var cartItem = JSON.parse(localStorage.getItem('productList'))
          cartItem.forEach(item =>{
            cartNumber = item.count +=cartNumber;
          })
          document.querySelector("#shoping-section p").textContent = cartNumber;
        }
        cartNumberDisplay()
        
       var removeItem = $(".remove")
       for(var i=0; i<removeItem.length; i++){
         var removeBtn = removeItem[i]
         removeBtn.addEventListener('click', ()=>{
          var cartItem = JSON.parse(localStorage.getItem('productList'))
        
          cartItem.forEach(item =>{
            if(item.name !=event.target.parentElement.parentElement.children[1].children[0].textContent){
              products.push(item)
            }
          })
          localStorage.setItem('productList', JSON.stringify(products))
          window.location.reload()
         })
       }
       for (var i = 0; i < productData.photos.length; i++) {
         renderProductImages(productData.photos[i], i);
       }
     }
   );
   function subTotal(){
       var subTotal =0;
      var cartItem = JSON.parse(localStorage.getItem('productList'))
       cartItem.forEach(item =>{
         subTotal = item.totalPrice += subTotal
       })
  
       document.querySelector(".priceView span").textContent = subTotal
     }
     subTotal()
     function placeOrde(){
      var placeOrderBtn =document.querySelector("#place-order")
      
     }
     placeOrde()
  });
        