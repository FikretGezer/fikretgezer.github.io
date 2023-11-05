const headerElement = document.querySelector('.header');

window.addEventListener('scroll', () => {
    var pos = window.scrollY;
    console.log(pos);

    if(pos < 30)
    {
        headerElement.style.opacity = 1;
        headerElement.style.height = "100px";
        /*HEADER
            opacity = 1
            height = 100
        */
    }
    else
    {
        headerElement.style.opacity = 0;
        headerElement.style.height = "0px";
        /*HEADER
            opacity = 0
            height = 0
        */
    }
});
