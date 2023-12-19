function ClickIt(value){
    localStorage.setItem('projectIndex', value);
    console.log(localStorage.getItem('projectIndex'));
}