import { preloadImages, preloadFonts } from './utils';
import { Item }  from './item';

// Preload images and fonts
Promise.all([preloadImages('.item__img, .content__img'), preloadFonts('ytb6dpl')]).then(() => {
    // remove loader (loading class) 
    document.body.classList.remove('loading');
    
    // initialize custom ^

    let itemsArr = [];
    [...document.querySelectorAll('.items > .item')].forEach(item => itemsArr.push(new Item(item, itemsArr)));

    // mouse effects on all links and others
});