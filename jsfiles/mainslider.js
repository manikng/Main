const container = document.querySelector('.contain');
const imgs = document.querySelectorAll('.imgs');

let setDelay = 3000; // Delay between slides
let index = 0;

// Set the first image to be visible
imgs[index].classList.add('opacity-100');

// Function to change images
function nextImg() {
   imgs[index].classList.remove('opacity-100'); // Remove active class from current image
   imgs[index].classList.add('opacity-0'); // Fade out current image
   index = (index + 1) % imgs.length; // Move to next image
   imgs[index].classList.remove('opacity-0'); // Fade in new image
   imgs[index].classList.add('opacity-100'); // Add active class to new image
}

function prevImg() {
    imgs[index].classList.remove('opacity-100'); // Remove active class from current image
    imgs[index].classList.add('opacity-0'); // Fade out current image
    index = (index - 1 + imgs.length) % imgs.length; // Move to previous image
    imgs[index].classList.remove('opacity-0'); // Fade in new image
    imgs[index].classList.add('opacity-100'); // Add active class to new image
}

container.addEventListener('mouseover', (event) => {
     const { clientX } = event;
     const { left, width } = container.getBoundingClientRect();
     
     if (clientX < left + width / 4) {
         prevImg();
     } else if (clientX > left + 3 * width / 4) {
         nextImg();
     }
});

// Change images at set intervals
setInterval(nextImg, setDelay);


// const container = document.querySelector('.container');
// const imgs = document.querySelectorAll('.imgs');

// let setDelay = 1000; // Delay between slides
// let index = 0;

// // Set the first image to be visible
// imgs[index].classList.add('active');

// // Function to change images
// function nextImg() {
//    imgs[index].classList.remove('active'); // Remove active class from current image
//    index = (index + 1) % imgs.length; // Move to next image
//    imgs[index].classList.add('active'); // Add active class to new image
// }
// function prevImg() {
//     imgs[index].classList.remove('active'); // Remove active class from current image
//     index = (index - 1 + imgs.length) % imgs.length; // Move to previous image
//     imgs[index].classList.add('active'); // Add active class to new image
//  }
 
//  container.addEventListener('mouseover', (event) => {
//      const { clientX } = event;//clientX is the horizontal coordinate of the mouse pointer when the event occurred
//      const {left , width} = container.getBoundingClientRect();//The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
     
//      if (clientX < left + width/4){
//          prevImg();
//         } else if (clientX > left + 3*width/4){
//         nextImg();
//     }
    
// });

// // Change images at set intervals
// setInterval(nextImg, setDelay);