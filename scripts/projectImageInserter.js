function ClickItWithArrayName(projectIndex, arrayIndex){
    localStorage.setItem('projectIndex', projectIndex);
    switch(arrayIndex)
    {
        case 0:
            localStorage.setItem('arrayName', 'games');
            break;
        case 1:
            localStorage.setItem('arrayName', 'rpa');
            break;
        case 2:
            localStorage.setItem('arrayName', 'web projects');
            break;
    }
}

const InsertImages = (projectsContainer, list, projectTypeIndex) => {
    const projectsImages = projectsContainer.querySelectorAll('.project a img');
    const projectLinks = projectsContainer.querySelectorAll('.project a');

    projectsImages.forEach((currentImage, index) => {
        currentImage.src = `${list[index].projectImages[0]}`;
    });


    projectLinks.forEach((currentLink, index) => {
        currentLink.href = "../pages/game-pages/project-page.html";
        currentLink.addEventListener('click', () => {
            ClickItWithArrayName(index, projectTypeIndex);
        });
    });
}

const gamesImagesContainer = document.querySelectorAll('.projects-container .projects');
InsertImages(gamesImagesContainer[0], games, 0);
InsertImages(gamesImagesContainer[1], robots, 1);
InsertImages(gamesImagesContainer[2], webProjects, 2);
