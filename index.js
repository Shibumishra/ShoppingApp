
var Counter =1;
setInterval(function(){
    document.getElementById("radio" + Counter).checked = true;
    Counter++;
    if(Counter > 4){
        Counter = 1;
    }
},3000);

$.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    function (response) {
    var productData = response;
function displayCartItem(){
    var html = '';
      html += `
      <div>
                      <h1 class="section-heading">Clothing for Men and Women</h1>
                      <div id="wallpaper-grid">
                          <div class="product-card">
                              <a href="./product-details_1.html"><img class="img-ban"
                                      src="${productData[0].preview}"
                                      alt=""></a>
                              <h3 class="product-title product-name">${productData[0].name}</h3>
                              <p class="product-brand">${productData[0].brand}</p>
                              <p class="product-price">Rs ${productData[0].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./details_2.html"><img class="img-ban"
                                      src="${productData[1].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[1].name}</h3>
                              <p class="product-brand">${productData[1].brand}</p>
                              <p class="product-price">Rs ${productData[1].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./product_3.html"><img class="img-ban"
                                      src="${productData[2].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[2].name}</h3>
                              <p class="product-brand">${productData[2].brand}</p>
                              <p class="product-price">Rs ${productData[2].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./product_4.html"><img class="img-ban"
                                      src="${productData[3].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[3].name}</h3>
                              <p class="product-brand">${productData[3].brand}</p>
                              <p class="product-price">Rs ${productData[3].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./product_5.html"><img class="img-ban"
                                      src="${productData[4].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[4].name}</h3>
                              <p class="product-brand">${productData[4].brand}</p>
                              <p class="product-price">Rs ${productData[4].price}</p>
                          </div>
                      </div> 
                  </div>
                  <div class="Main-conterner">
                      <h1 class="section-heading">Accessories for Men and Women</h1>
                      <div id="wallpaper-grid">
                          <div class="product-card">
                              <a href="./product_6.html"><img class="img-ban"
                                      src="${productData[5].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[5].name}</h3>
                              <p class="product-brand">${productData[5].brand}</p>
                              <p class="product-price">Rs ${productData[5].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./product_7.html"><img class="img-ban"
                                      src="${productData[6].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[6].name}</h3>
                              <<p class="product-brand">${productData[6].brand}</p>
                              <p class="product-price">Rs ${productData[6].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./product_8.html"><img class="img-ban"
                                      src="${productData[7].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[7].name}</h3>
                              <p class="product-brand">${productData[7].brand}</p>
                              <p class="product-price">Rs ${productData[7].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./product_9.html"><img class="img-ban"
                                      src="${productData[8].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[8].name}</h3>
                              <p class="product-brand">${productData[8].brand}</p>
                              <p class="product-price">Rs ${productData[8].price}</p>
                          </div>
                          <div class="product-card">
                              <a href="./product_10.html"><img class="img-ban"
                                      src="${productData[9].preview}"
                                      alt=""></a>
                              <h3 class="product-title">${productData[9].name}</h3>
                              <p class="product-brand">${productData[9].brand}</p>
                              <p class="product-price">Rs ${productData[9].price}</p>
                          </div>
                      </div>
                  </div>
      `
    document.querySelector("#MainDisplayCon").innerHTML = html;
  }
  displayCartItem()
  for (var i = 0; i < productData.photos.length; i++) {
  }
}
);
