$(document).ready(function () {
  var product=[]
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

// var addToCardBtn = $("#add-to-cart-btn");
// var items = [];
// for(var i=0; i < addToCardBtn.length; i++){
//     addToCardBtn[i].addEventListener('click', function(e){
//       var productData =$(".preview-img")
//       var productName =$(".product-name")
//       console.log(productData) 
//       console.log(i++);
//       if(typeof(Storage) !== "undifined"){
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



 $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/1",
    function (response) {
      console.log(response);
     
      var productData = response;
      $("#left-preview-img").attr("src", productData.preview);

      for (var i = 0; i < productData.photos.length; i++) {
        renderProductImages(productData.photos[i], i);
      }
    }
    );

  
  $.post("https://5d76bf96515d1a0014085cf9.mockapi.io/product/1", "product",function(response){
    
    var roductData = response;
    $("#left-preview-img").attr("src", roductData.preview);

    for (var i = 0; i < roductData.photos.length; i++) {
      renderProductImages(roductData.photos[i], i);
    }
  }
  );
});




// var http = new XMLHttpRequest();
// http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product/1", true);
// http.onreadystatechange = function(response){
//     var productData=response;
//     var MainContainer = document.getElementById("product-wrapper");
// var mainDiv = document.createElement("div");
// var secondDiv = document.createElement("div");
// var thrdDiv = document.createElement("div");
// var leftPreviewImg = document.createElement("img");

// secondDiv.id = "product-img";
// thrdDiv.classList = "wrapper-img";
// leftPreviewImg.id = "left-preview-img";

// secondDiv.appendChild(thrdDiv);
// leftPreviewImg.src =productData.preview
// leftPreviewImg.alt = "Sweatshirts";
// thrdDiv.appendChild(leftPreviewImg);
// mainDiv.appendChild(secondDiv);
// MainContainer.appendChild(mainDiv);
// console.log(mainDiv);
// }
// http.send()