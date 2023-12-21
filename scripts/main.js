

// Scrolling Effect

const backroundBox1 = document.querySelector('.ug-background-box1');

let  box1InitialRotation = 34.331

// backroundBox1Rotation = transform: rotate(34.331deg);
// backroundBox1.style.transform = 'rotate(34.331deg)';
backroundBox1.style.transform = 'rotate('+box1InitialRotation+'deg)';
// let backroundBox1Rotation = backroundBox1.style.transform;

document.addEventListener('scroll',function (event) {
    let scrollheight = document.documentElement.scrollHeight; 
    let scrolltop = document.documentElement.scrollTop;
    let scrollPercent = scrolltop/ scrollheight;
    box1InitialRotation  = scrollPercent;
    backroundBox1.style.transform = 'rotate('+box1InitialRotation+'deg)';
    //    let temp = box1.scrollTop;
//    backroundBox1.style.transform = 'translateY(10%)';
    // backroundBox1.css({transform : 'tranlateY(60%)'});
//    box1.
   console.log(event);
   console.log(scrollheight);
   console.log(scrolltop);
});