function hoverGithub (element){


    element.setAttribute('src', 'assets/img/icons/github_hover.svg');
}

function unhoverGithub (element){
    element.setAttribute('src', 'assets/img/icons/github.svg');
}

function hoverLinkedIn (element){
    element.setAttribute('src', 'assets/img/icons/linkedin_hover.svg');
}

function unhoverLinkedIn (element){
    element.setAttribute('src', 'assets/img/icons/linkedin.svg');
}


function hover(element){
    $(element).find("img:last-child").toggleClass("hidden");
    $(element).find("img:first-child").toggleClass("hidden");
}

function unhover(element){
    $(element).find("img:last-child").toggleClass("hidden");
    $(element).find("img:first-child").toggleClass("hidden");
}
// $('.icon-container').hover(function() {
//     $(this).find("img:last").toggleClass("hidden");
//     $(this).find("img:first").toggleClass("hidden");
// })


