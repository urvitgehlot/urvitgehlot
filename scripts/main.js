

// Scrolling Effect

const backroundBox1 = document.querySelector('.ug-background-box1');

let  box1InitialRotation = 34.331
let totalHeight = document.documentElement.scrollHeight - window.innerHeight;

// backroundBox1Rotation = transform: rotate(34.331deg);
// backroundBox1.style.transform = 'rotate(34.331deg)';
backroundBox1.style.transform = 'rotate('+box1InitialRotation+'deg)';
// let backroundBox1Rotation = backroundBox1.style.transform;

function boxRotation(box, toRotate) {
    let totalRotation = (box1InitialRotation - toRotate);
    let scrollPercent;
    // if(box1InitialRotation < toRotate){
        scrollPercent = window.scrollY /totalHeight * (box1InitialRotation - toRotate);
        if(scrollPercent<=1){
            scrollPercent = 0;
        }
        else{
            scrollPercent = totalRotation - scrollPercent
        }
    // }
    // else{
        // scrollPercent = window.scrollY/ totalHeight * Math.abs(toRotate - box1InitialRotation);
    // }
    console.log(window.scrollY /totalHeight);
    box.style.transform = 'rotate('+scrollPercent+'deg)';
    console.log(toRotate);
    
}



document.addEventListener('scroll',()=>{boxRotation(backroundBox1, 0)});