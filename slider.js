//Get information about slider elements | Array.from
var sliderImages = Array.from(
  document.querySelectorAll(`.slider-container img`)
);
// number of items in the array
var slidesCount = sliderImages.length;
// where do u wanna start ? or set current index
var currentSlide = 1;
// slide number (slide#number)
var slideNumberElement = document.getElementById(`slide-number`);
// previous and next buttons
var nextBtn = document.getElementById(`next`);
var prevBtn = document.getElementById(`prev`);

//handle click on btns
nextBtn.onclick = nextslide;
prevBtn.onclick = prevslide;


//create ul elements
var paginationElement = document.createElement(`ul`);
// set id to ul
paginationElement.setAttribute(`id`, `pagination-ul`);

// Create li by slidesCount
for (var i = 1; i <= slidesCount; i++) {
  // create li
  var paginationItems = document.createElement(`li`);
  // set Attribute
  paginationItems.setAttribute(`data-index`, i);
  //set item content
  paginationItems.appendChild(document.createTextNode(i));
  // append li to ul
  paginationElement.appendChild(paginationItems);
}

// append ul to the page
var indicators = document.getElementById(`indicators`);
indicators.appendChild(paginationElement);

//get new created ul
var paginationNewUl = document.getElementById(`pagination-ul`);

//Get array from paginaion ul and that for use it by forEach to remove active class
var paginationBullets = Array.from(
    document.querySelectorAll(`#pagination-ul li`)
  );

//loop through bullets items 
for(var i=0; i<paginationBullets.length; i++){
    paginationBullets[i].onclick= function (){
    currentSlide=parseInt(this.getAttribute(`data-index`));
    cheak();
    }
}

//trigger the cheak fn
cheak();
// next slide function
function nextslide() {
if(nextBtn.classList.contains(`disabled`)){
 return false;
}else{
    currentSlide++;
cheak();
}
 

}
// prev slide function
function prevslide() {
    if(prevBtn.classList.contains(`disabled`)){
        return false;
       }else{
           currentSlide--;
       cheak();
       }

}
//create the cheak function

function cheak() {
  //set the slide number
  slideNumberElement.textContent =
    `Slide # ` + currentSlide + ` of ` + slidesCount;

    removeactive();
  // set Active class on the current element
  sliderImages[currentSlide - 1].classList.add(`active`);
  // set Active class on the current pgination item
  paginationNewUl.children[currentSlide - 1].classList.add(`active`);

  // cheak if current slide is the first
if(currentSlide == 1){
    //add disable class in the prev btn
    prevBtn.classList.add(`disabled`);
}else{
    //remove disable class in the prev btn
    prevBtn.classList.remove(`disabled`);
}
// cheak if current slide is the last
if(currentSlide== sliderImages.length){
    //add disable class in the prev btn
    nextBtn.classList.add(`disabled`);
}else{
    //remove disable class in the prev btn
    nextBtn.classList.remove(`disabled`);
}

}


// removee all active classes

function removeactive(){
    //loop through images
    sliderImages.forEach(function(img){
   img.classList.remove(`active`);
    });
    //loop through ul
    paginationBullets.forEach(function(li){
   li.classList.remove(`active`);
    });
};

