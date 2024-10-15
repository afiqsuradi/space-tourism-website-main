"use strict";
const navBar = () =>{
    const navBarContainer = document.querySelector('.navbar-container > .navbar-links-container');
    const navBarButton = document.querySelector('.navbar-button');
    const navBarButtonImage = document.querySelector('.navbar-button > img');
    const hamburgerIcon = "./assets/shared/icon-hamburger.svg"
    const closeIcon = "./assets/shared/icon-close.svg"

    navBarButton.addEventListener('click', () =>{
        const status = navBarContainer.getAttribute('status');
        navBarButtonImage.src = status === 'open' ? hamburgerIcon : closeIcon;
        navBarContainer.setAttribute('status',  status === 'open' ? 'close' : 'open')
    })
}

const app = () =>{
    navBar();
}

app();