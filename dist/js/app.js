/* eslint-disable indent */
//import { init } from 'browser-sync';
import { select, classNames } from './settings.js';

export const app = {
    initPages: function(){
        const thisApp = this;

        thisApp.pages = document.querySelector(select.containerOf.pages).children;
        thisApp.navLinks = document.querySelectorAll(select.nav.links);

        const idFromHash = window.location.hash.replace('#/', '');
        
        let pageMatchingHash = thisApp.pages[0].id;

        for(let page of thisApp.pages){
            if(page.id == idFromHash){
                pageMatchingHash = page.id;
                break;
            }
        }
        
        thisApp.activatePage(pageMatchingHash);

        for(let link of thisApp.navLinks){
            link.addEventListener('click', function(event){
                const clickedElement = this;
                event.preventDefault();

                /* get page id from href attribute */
                const id = clickedElement.getAttribute('href').replace('#', '');

                /* run thisApp.activePage  with that id */
                window.location.hash = '#/' + id;
                
                thisApp.activatePage(id);
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
                
        /* code added with menthor */
        const navBar = document.querySelector('.navigation');
        const galleryBar = document.getElementById('gallery');
            if (window.location.hash == '' || window.location.hash == '#/main'){
                navBar.classList.toggle('show', window.scrollY > 600);  
                } else {
                navBar.classList.add('show');
                }
            //na tym na dziś the end
            if (window.matchMedia('min-width: 425px')) {
                navBar.classList.add('hide');
            } else {
                navBar.classList.remove('hide');
            }

            if(pageId == 'contact'){
                navBar.classList.add('nav-contact');
            } else {
                navBar.classList.remove('nav-contact');
            }

            if(pageId == 'gallery'){
                galleryBar.classList.add('sub-gallery');
            } else {
                galleryBar.classList.remove('sub-gallery');
            }

            if(pageId == 'gallery' || pageId == 'about' || pageId == 'offer'){
                navBar.classList.remove('hide');
                console.log('zadziałało!!!');
            }

            if(pageId == 'main' || pageId == 'gallery' || pageId == 'about' || pageId == 'offer' || pageId == 'contact'){
                document.getElementById('myLinks').style.display = 'none';
            }

            if(pageId == 'javascript:void(0);'){
                console.log('przynajmniej dybie');
            }

    },

    init: function(){
        const thisApp = this;

        thisApp.initPages();
    },
};

app.init();
