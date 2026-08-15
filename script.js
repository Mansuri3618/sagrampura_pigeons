/* ===================================================
   PAGE LOADER
=================================================== */

window.onload = function () {

document.getElementById("loader").style.display = "none";

document.body.classList.add("loaded");

};

/* ===================================================
   ADD TO CART
=================================================== */

let cartCount = 0;

const cart = document.getElementById("cart");

document.querySelectorAll(".add").forEach(button => {

button.addEventListener("click", () => {

cartCount++;

cart.innerHTML = cartCount;

button.innerHTML = "Added ✓";

button.classList.remove("btn-primary");

button.classList.add("btn-success");

setTimeout(() => {

button.innerHTML = "Add to Cart";

button.classList.remove("btn-success");

button.classList.add("btn-primary");

},1000);

});

});

/* ===================================================
   PRODUCT SEARCH
=================================================== */

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".product").forEach(product=>{

const name = product.dataset.name.toLowerCase();

product.style.display =

name.includes(value)

? "block"

: "none";

});

});

}

/* ===================================================
   PRODUCT SORT
=================================================== */

const sortProducts = document.getElementById("sortProducts");

if(sortProducts){

sortProducts.addEventListener("change",function(){

const container = document.getElementById("productContainer");

const cards = [...document.querySelectorAll(".product")];

cards.sort((a,b)=>{

if(this.value==="low")

return a.dataset.price-b.dataset.price;

if(this.value==="high")

return b.dataset.price-a.dataset.price;

if(this.value==="name")

return a.dataset.name.localeCompare(b.dataset.name);

return 0;

});

cards.forEach(card=>{

container.appendChild(card);

});

});

}

/* ===================================================
   DARK MODE
=================================================== */

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick = function(){

document.body.classList.toggle("dark-mode");

themeBtn.innerHTML =

document.body.classList.contains("dark-mode")

? "☀️"

: "🌙";

};

}

/* ===================================================
   QUICK VIEW MODAL
=================================================== */

const quickButtons = document.querySelectorAll(".quick-view");

const modalTitle = document.getElementById("modalTitle");

const modalImage = document.getElementById("modalImage");

const modalPrice = document.getElementById("modalPrice");

const modalDesc = document.getElementById("modalDesc");

const quickModal = new bootstrap.Modal(

document.getElementById("quickModal")

);

quickButtons.forEach(button=>{

button.onclick = function(){

modalTitle.innerHTML =

this.dataset.name;

modalImage.src =

this.dataset.img;

modalPrice.innerHTML =

this.dataset.price;

modalDesc.innerHTML =

this.dataset.desc;

quickModal.show();

};

});   

/* ===================================================
   ANIMATED COUNTERS
=================================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const update = () => {

            const current = +counter.innerText.replace(/\D/g,'');

            const increment = Math.ceil(target / 150);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(update,20);

            }else{

                counter.innerText = target.toLocaleString() + "+";

            }

        };

        update();

    });

};

const statsSection = document.querySelector(".stats");

let counterStarted = false;

window.addEventListener("scroll",()=>{

    if(statsSection && !counterStarted){

        const top = statsSection.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            counterStarted = true;

            startCounter();

        }

    }

});

/* ===================================================
   GALLERY LIGHTBOX
=================================================== */

const gallery = document.querySelectorAll(".gallery");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const close = document.getElementById("close");

gallery.forEach(image=>{

    image.onclick = ()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    }

});

if(close){

close.onclick=()=>{

lightbox.style.display="none";

}

}

if(lightbox){

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}

}

/* ===================================================
   BACK TO TOP
=================================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

/* ===================================================
   SMOOTH NAVIGATION
=================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const section=document.querySelector(this.getAttribute("href"));

if(section){

section.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ===================================================
   ACTIVE NAV LINK
=================================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===================================================
   NAVBAR SHADOW
=================================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.style.padding="10px 0";

navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.15)";

}else{

navbar.style.padding="15px 0";

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}

});

/* ===================================================
   MOBILE MENU AUTO CLOSE
=================================================== */

document.querySelectorAll(".navbar .nav-link").forEach(link=>{

link.addEventListener("click",()=>{

const menu=document.querySelector(".navbar-collapse");

if(menu.classList.contains("show")){

new bootstrap.Collapse(menu).hide();

}

});

});

/* ===================================================
   SCROLL REVEAL ANIMATION
=================================================== */

const revealElements=document.querySelectorAll(

".card,.review,.gallery,.about .col-lg-4,.stats .col-md-3"

);

function reveal(){

const windowHeight=window.innerHeight;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<windowHeight-120){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="all .7s ease";

});

window.addEventListener("scroll",reveal);

reveal();

/* ===================================================
   BUTTON RIPPLE EFFECT
=================================================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.45)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

ripple.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>ripple.remove(),600);

});

});

/* ===================================================
   IMAGE LAZY LOADING
=================================================== */

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

/* ===================================================
   PAGE TITLE CHANGE
=================================================== */

const originalTitle=document.title;

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="🐦 Come Back to Pigeon Pro";

}else{

document.title=originalTitle;

}

});

/* ===================================================
   SIMPLE NOTIFICATION
=================================================== */

function showToast(message){

const toast=document.createElement("div");

toast.innerHTML=message;

toast.style.position="fixed";

toast.style.top="25px";

toast.style.right="25px";

toast.style.background="#198754";

toast.style.color="#fff";

toast.style.padding="15px 25px";

toast.style.borderRadius="10px";

toast.style.boxShadow="0 15px 30px rgba(0,0,0,.25)";

toast.style.zIndex="999999";

toast.style.opacity="0";

toast.style.transition=".4s";

document.body.appendChild(toast);

setTimeout(()=>{

toast.style.opacity="1";

},100);

setTimeout(()=>{

toast.style.opacity="0";

setTimeout(()=>toast.remove(),400);

},2500);

}

/* ===================================================
   SHOW TOAST AFTER ADD TO CART
=================================================== */

document.querySelectorAll(".add").forEach(btn=>{

btn.addEventListener("click",()=>{

showToast("✅ Product added to cart");

});

});

/* ===================================================
   RIPPLE ANIMATION STYLE
=================================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);

/* ===================================================
   END OF SCRIPT
=================================================== */

console.log("✅ Pigeon Pro Website Loaded Successfully");