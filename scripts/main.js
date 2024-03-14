

// Scrolling Effect




document.addEventListener("DOMContentLoaded", function () {

    let sections = document.querySelectorAll('.section');
    let currentSection = 0;

    let  box1InitialRotation = 34;
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const backroundBox1 = document.querySelector('.ug-background-box1');
    backroundBox1.style.transform = 'rotate(34deg)';
    
    document.addEventListener("wheel",function(event) {
        event.preventDefault();
        const delta = event.deltaY;
        // let percentComplete = window.scrollY / totalHeight;
        if(delta > 0 && currentSection < sections.length){
            console.log('down');
            currentSection++;
            const pos = sections[currentSection].getBoundingClientRect();
            console.log(pos.top);
            window.scroll({
                top: window.scrollY + pos.top,
                behavior: 'smooth'
            });
        }
        else if (delta < 0 && currentSection > 0){
            console.log('Up');
            currentSection--;
            const pos = sections[currentSection].getBoundingClientRect();
            console.log(pos.top);
            window.scroll({
                top: window.scrollY + pos.top,
                behavior: 'smooth'
            });
        }

        // window(0,sections[currentSection].)
        // window.scroll(0, 100);
        // window.location.href = "#hi";
    });
});

