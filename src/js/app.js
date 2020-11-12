/* eslint-disable indent */
//import { init } from 'browser-sync';
import { select, classNames } from './settings.js';

export const app = {
    initPages: function(){
        const thisApp = this;

        thisApp.pages = document.querySelector(select.containerOf.pages).children;
        thisApp.navLinks = document.querySelectorAll(select.nav.links);

        thisApp.activatePage(thisApp.pages[0].id);

        for(let link of thisApp.navLinks){
            link.addEventListener('click', function(event){
                const clickedElement = this;
                event.preventDefault();

                /* get page id from href attribute */
                const id = clickedElement.getAttribute('href').replace('#', '');

                /* run thisApp.activePage  with that id */
                thisApp.activatePage(id);
                const navBar = document.querySelector('.navigation-menu');
                if (window.location.hash == '' || window.location.hash == '#main'){
                    navBar.classList.toggle('show', window.scrollY > 600);  
                  } else {
                    navBar.classList.add('show');
                  }
                window.location.hash = id;
            });
        }
    },

    activatePage: function(pageId){
        const thisApp = this;

        /* add class 'active' to maching pages, remove from non-matching */
        for(let page of thisApp.pages){
            page.classList.toggle(classNames.pages.active, page.id == pageId);
        }
        /* add class 'active' to maching links, remove from non-matching */
        for(let link of thisApp.navLinks){
            link.classList.toggle(classNames.nav.active,
            link.getAttribute('href') == '#' + pageId
            );
        }
    },

    init: function(){
        const thisApp = this;

        thisApp.initPages();
    },
};

app.init();
