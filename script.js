const root = document.getElementById("root");

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

for( let i = 0; i < images.length; i++) {
    const cardbox = document.createElement('div');
    root.appendChild(cardbox);
    cardbox.setAttribute('class', `cardbox cardbox${i+1}`);
    cardbox.setAttribute('id', `cardbox${i+1}`);
    cardbox.style.backgroundImage = `url(images/${images[i]})`;
};

const cardboxes = document.querySelectorAll('.cardbox');
const divs = document.getElementsByTagName('div');

console.log(cardboxes);

// FIRST-METHOD
window.addEventListener('click', (e) => {
    let id = e.target.id;
    let element = document.getElementById(id);
    
    cardboxes.forEach(box => {
        box.classList.remove('cardbox-animation')
    })

    element.classList.add('cardbox-animation');
});


// SECOND-METHOD

// cardboxes.forEach(element => {
//     element.addEventListener('click', () => {
//         removeAnimationClasses()
//         element.classList.add('cardbox-animation')
//         console.log(element);
//     })
// });

// function removeAnimationClasses() {
//     cardboxes.forEach(element => {
//         element.classList.remove('cardbox-animation')
//     })
// };
