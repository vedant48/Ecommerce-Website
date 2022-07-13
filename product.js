var url = window.location.href;
var id = url.substring(url.lastIndexOf('=') + 1);

fetch("https://fakestoreapi.com/products/" + id)
.then(res=>res.json())
.then(data=> {
  console.log(data)
  
  let productEach = document.createElement('div')
  productEach.id = 'productEach'
  let titleEach = document.createElement('p')
  let imageEach = document.createElement('img')
  let priceEach = document.createElement('h2')
  let descriptionEach = document.createElement('p')
  let addToCartEach = document.createElement('button')
  let buyNowEach = document.createElement('button')
  let rat = document.createElement('span')
  var toAdd = document.createDocumentFragment();

  titleEach.className = "titleEach"

  titleEach.innerHTML = data.title
  descriptionEach.innerHTML = data.description;
  addToCartEach.innerHTML = "Add to Cart"
  buyNowEach.innerHTML = "Buy Now"
  priceEach.innerHTML = "$" + data.price.toFixed(2)
  imageEach.src = data.image
  imageEach.className = 'img'
  rat.innerHTML = data.rating.rate + " stars"
  
  document.getElementById('products').appendChild(imageEach);
  toAdd.appendChild(titleEach);
  toAdd.appendChild(rat);
  toAdd.appendChild(priceEach);
  toAdd.appendChild(descriptionEach);
  toAdd.appendChild(addToCartEach);
  toAdd.appendChild(buyNowEach);



  
  document.getElementById('title').appendChild(toAdd);
})
