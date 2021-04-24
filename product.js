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
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/1",
    function (response) {
      var productData = response;
      $("#left-preview-img").attr("src", productData.preview);
      // console.log( $("#product-title").attr("h1",productData.name))
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
      var AddBtn = document.getElementById("AddBtn")
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
     var items = [];
    for(var i=0; i < addToCardBtn.length; i++){
    addToCardBtn[i].addEventListener('click', function(e){
      if(typeof(Storage) !== "undifined"){
        var item = {
          id: productData.id,
          name: productName.innerText=productData.name,
          brand: productBrand.innerText=productData.brand,
          description: productDescription.innerText=productData.description,
          price : prductPriceSpan.innerText=productData.price,
          photos: productData.photos,
          preview: productData.preview,
          size: productData.size,
          isAccessory: productData.isAccessory,
          count: 0
       };
       if(JSON.parse(localStorage.getItem('items'))=== null){
        items.push(item)
        localStorage.setItem("items",JSON.stringify(items))
        window.location.reload();
       }else{
        var localItems = JSON.parse(localStorage.getItem('items'))
        localItems.map(data=>{
          if(item.id == data.id){
            item.count = data.count+1
          }else{
            items.push(data)
          }
        })
        items.push(item)
        localStorage.setItem('items', JSON.stringify(items));
        window.location.reload();
        console.log(localItems)
       }
      }
    })
  }
      for (var i = 0; i < productData.photos.length; i++) {
        renderProductImages(productData.photos[i], i);
      }
    }
  );


});
  // var addToCardBtn = document.getElementById("add-to-cart-btn");
  // var items = [];
  // for(var i=0; i < addToCardBtn.length; i++){
  //   addToCardBtn[i].addEventListener('click', function(e){
  //     alert("clicked")
  //     if(typeof(Storage) !== "undifined"){
  //       var item = {
  //         id: productData.id,
  //         name: productName.innerText=productData.name,
  //         brand: productBrand.innerText=productData.brand,
  //         description: productDescription.innerText=productData.description,
  //         price : prductPriceSpan.innerText=productData.price,
  //         count: 0
  //      };
  //      if(JSON.parse(localStorage.getItem('items'))=== null){
  //       items.push(item)
  //       localStorage.setItem("items",JSON.stringify(items))
  //       // window.location.reload();
  //      }else{
  //       var localItems = JSON.parse(localStorage.getItem('items'))
  //       localItems.map(data=>{
  //         if(item.id == data.id){
  //           item.count = data.count+1
  //         }else{
  //           items.push(data)
  //         }
  //       })
  //       items.push(item)
  //       localStorage.setItem('items', JSON.stringify(items));
  //       // window.location.reload();
  //       console.log(localItems)
  //      }
  //     }
  //   })
  // }
  //   var btn = $("<button>")
  //  btn.addEventListener("click", function(e){
  //    console.log(e)
  //    alert("kjjbvb")
  //  })

//       if(JSON.parse(localStorage.getItem('items'))=== null){
//         items.push(item)
//         localStorage.setItem("items",JSON.stringify(items))
//         window.location.reload();
//       }else{
//         var localItems = JSON.parse(localStorage.getItem('items'))
//         localItems.map(data=>{
//           if(item.id == data.id){
//             item.count = data.count+1;
//           }else{
//               items.push(data)
//         }
//       });
//           items.push(item)
//           localStorage.setItem('items', JSON.stringify(items));
//           window.location.reload();
//           console.log(localItems)
//       }

//     }
// var addToCardBtn = $("#add-to-cart-btn");
// var items = [];
// for(var i=0; i < addToCardBtn.length; i++){
//     addToCardBtn[i].addEventListener('click', function(e){
//       // var productData =$(".preview-img")
//       // var productName =$(".product-name")
//       // console.log(productData)
//       // console.log(i++);
//       // ($(".product-name").text());

//       if(typeof(Storage) !== "undifined"){
//         var item = {
//               id: 1,
//               name: $(".product-name").text(),
//               brand: $("#product-brand").text(),
//               description: $(".description").text(),
//               price : $("#roduct-price").text(),
//               count: 0
//         };
//        if(JSON.parse(localStorage.getItem('items'))=== null){
//          items.push(item)
//         localStorage.setItem("items",JSON.stringify(items))
//         window.location.reload();
//        }else{
//          var localItems = JSON.parse(localStorage.getItem('items'))
//          localItems.map(data=>{
//            if(item.id == data.id){
//              item.count = data.count+1;
//            }else{
//              items.push(data)
//            }
//          });
//          items.push(item)
//          localStorage.setItem('items', JSON.stringify(items));
//          window.location.reload();
//          console.log(localItems)
//        }
// $.post("https://5d76bf96515d1a0014085cf9.mockapi.io/product/1", "product", item ,function(response){

//   var roductData = response;
//   $("#left-preview-img").attr("src", roductData.preview);

//   for (var i = 0; i < roductData.photos.length; i++) {
//     renderProductImages(roductData.photos[i], i);
//   }
// }
// );
//         var http =new XMLHttpRequest();
//         http.open("POST", "https://5d76bf96515d1a0014085cf9.mockapi.io/product/1", true);
//         http.onreadystatechange = function(){
//         if(this.readyState === 4){
//           alert("Ready")
//         }
//       }
//       http.send(JSON.stringify(item));
//       }else{
//         alert("local storage is not working on your browser")
//       }
//     })
// }
// function addToCard(event){
//   btn = event.target
//   console.log($("#prodect-details"))
//   console.log($("#left-preview-img"))
//   console.log(addToCardBtn)
// }
// $("#add-to-cart-btn").click(function(){
// product.push({
//  id: 1,
//    name: 'shibu',
//   description: 'some text'
// })
//   localStorage.setItem("product-list", JSON.stringify(product));
// })

// $(".shopping-icon").click(function(){
//   alert("Its working")
// })
