function ClickIt(value){
    localStorage.setItem('gameIndex', value);
    console.log(localStorage.getItem('gameIndex'));
}