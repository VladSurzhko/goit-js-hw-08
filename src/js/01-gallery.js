
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const lightPhoto = document.querySelector(".gallery")
const light = galleryItems.map(
    ({preview, original, description}) => {
return`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;
});
lightPhoto.insertAdjacentHTML("beforeend", light.join(""));




const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionDelay: 250,
  captionsData: 'alt', 
});
  
  
  console.log(lightbox)