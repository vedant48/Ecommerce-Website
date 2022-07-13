fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data=> {
              console.log(data)
              
              for (let i = 0; i < data.length; i++) {
                let productEach = document.createElement('div')
                productEach.id = 'productEach'
                let titleEach = document.createElement('a')
                titleEach.href = '/product.html?productid=' + encodeURIComponent(data[i].id)
                titleEach.target = '_blank'
                let imageEach = document.createElement('img')
                let priceEach = document.createElement('h2')
                var toAdd = document.createElement('div');
                toAdd.className = 'productEach'
                titleEach.innerHTML = data[i].title
                priceEach.innerHTML = "$" + data[i].price.toFixed(2)
                imageEach.src = data[i].image
                imageEach.className = 'img'
                
                toAdd.appendChild(imageEach);
                toAdd.appendChild(titleEach);
                toAdd.appendChild(priceEach);



                
                document.getElementById('title').appendChild(toAdd);
              }
            })


            // showoff
            var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000);
}
