// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const imageGallery = document.querySelector('.gallery');
renderGallery();

function renderGallery() {
    const markup = galleryItems.map(image => `
    <div class="gallery__item">
    <a class="gallery__item" href="${image.original}">
  <img
   class="gallery__image"
   src="${image.preview}" 
   alt="${image.description}" />
</a>
</div>
    ` )
        .join('');
    imageGallery.insertAdjacentHTML('beforeend', markup);
}

let gallery = new SimpleLightbox('.gallery a',{
    captionsData : 'alt' ,
    animationSpeed: 250
} ) ;