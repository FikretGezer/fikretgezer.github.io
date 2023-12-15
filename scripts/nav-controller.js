const navProjects = document.querySelectorAll('.projects-tab a');

navProjects[0].addEventListener('click', () =>{
    SetArrayName('games');
});
navProjects[1].addEventListener('click', () =>{
    SetArrayName('robots');
});
navProjects[2].addEventListener('click', () =>{
    SetArrayName('web projects');
});

function SetArrayName(arrayName)
{
    localStorage.setItem('arrayName', arrayName);
}
