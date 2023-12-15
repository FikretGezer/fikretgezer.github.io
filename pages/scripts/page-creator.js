// import { games } from "../data/games.js";
// import { robots } from "../data/robots.js";
// import { webProjects } from "../data/web.js";

// import { changeImages } from "./image-changer.js";

const projectId = localStorage.getItem('projectIndex');
const projectContainer = document.querySelector('.project-container');

const changeContentHTML = (id, projectName, actualPlatforms,
                    projectImages, actualExplanation, projectVideo) => {

                        projectContainer.innerHTML = `<div class="project-info">
                        <div class="project-name">
                            ${projectName}
                        </div>
                        <div class="project-platform">
                            Platform: &nbsp;
                            <div class="actual-platforms">
                            </div>
                        </div>
                        <div class="project-underline">
                        </div>
                    </div>
                    <div class="project-images">
                        <div class="project-main-image">
                            <img class="main-image" src="${projectImages[0]}" alt="">
                            <div class="alt-images">
                                <div class="side-image">
                                    <img class="actual-side-image" src="${projectImages[1]}" alt="">
                                </div>
                                <div class="side-image">
                                    <img class="actual-side-image" src="${projectImages[2]}" alt="">
                                </div>
                                <div class="side-image">
                                    <img class="actual-side-image" src="${projectImages[3]}" alt="">
                                </div>
                                <div class="side-image">
                                    <img class="actual-side-image" src="${projectImages[4]}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-explanation">
                        <div class="actual-explanation">
                            &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam dapibus ultricies sem eu tristique.
                            Sed eu venenatis eros.
                            Cras elementum nisl et ultricies suscipit.
                            Aliquam vulputate efficitur ultricies.
                            Quisque sed elit pulvinar, imperdiet nulla nec, sollicitudin neque.
                            Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Integer ut ligula ac ex lacinia convallis vitae in purus.
                            Integer vitae orci tincidunt mauris auctor varius quis quis urna.
                            Integer at ex ultricies, eleifend elit nec, placerat enim.
                            <br><br>
                            &nbsp;&nbsp;&nbsp;Donec faucibus tellus sit amet viverra faucibus. Vivamus finibus id sem in hendrerit.
                            Sed facilisis felis enim, a fermentum elit pellentesque quis.
                            Donec erat tortor, sagittis eu nisi ut, ornare mollis augue.
                            Nulla nunc ligula, posuere nec enim eu, viverra accumsan neque.
                            Nullam id gravida magna. In eget gravida urna, et porta massa.
                            Etiam vehicula leo leo, non tincidunt neque gravida id.
                            Etiam malesuada molestie elementum. Morbi a diam nec mauris rhoncus consequat.
                            Pellentesque posuere ornare est, vitae auctor diam ornare interdum.
                            <br><br>
                            &nbsp;&nbsp;&nbsp;Mauris cursus bibendum vehicula.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Etiam et ligula ullamcorper, posuere felis ut, laoreet dolor.
                            Nulla neque nibh, condimentum sit amet nisl et, pretium tempor sapien.
                            Sed id enim hendrerit, dapibus nibh quis, convallis massa.
                            Duis neque arcu, fringilla vel nibh vitae, hendrerit placerat arcu. Fusce blandit risus non placerat rhoncus.
                            Nulla nec metus iaculis, vestibulum nulla at, semper odio.
                            Aenean ipsum purus, auctor vitae mauris ac, tincidunt laoreet sem.
                            Etiam congue sagittis risus vitae fermentum.
                            Sed quis mi sed lorem blandit mollis ut id lorem.
                            Proin commodo vestibulum velit, eu eleifend orci.
                            Vestibulum elementum tellus id risus condimentum, vitae commodo mauris tincidunt.
                            Donec scelerisque libero nec condimentum condimentum.
                            Suspendisse in lectus sit amet ligula elementum tempor ac porttitor ligula.
                            Vestibulum porttitor tempus leo vel ultrices.
                        </div>
                    </div>
                    <div class="project-video-container">
                        <iframe class="project-video"
                            src="${projectVideo}">
                        </iframe>
                    </div>`;

                    };

const arrayName = localStorage.getItem('arrayName');
let actualArray;
switch(arrayName)
{
    case "games":
        actualArray = games;
        break;
    case "robots":
        actualArray = robots;
        break;
    default:
        actualArray = webProjects;
        break;
}
const currentProject = !projectId ? actualArray[0] : actualArray[projectId];
changeContentHTML(currentProject.id, currentProject.projectName,
    currentProject.actualPlatforms, currentProject.projectImages,
    currentProject.actualExplanation, currentProject.projectVideo);
changeImages();

const platformsHTML = document.querySelector('.actual-platforms');
let endHTML = "";
currentProject.actualPlatforms.forEach(platform => {
    if(platform !== currentProject.actualPlatforms[currentProject.actualPlatforms.length - 1])
        endHTML += `<a class="platform" href="#">${platform}</a>, `;
    else
        endHTML += `<a class="platform" href="#">${platform}</a>`;
});
platformsHTML.innerHTML = endHTML;