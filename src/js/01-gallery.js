import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('ul.gallery');
const fragment = document.createDocumentFragment();

galleryItems.forEach(image => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');
  li.classList.add('gallery-item');

  a.classList.add('gallery-link');
  a.href = image.original;
  li.appendChild(a);

  img.classList.add('gallery-image');
  img.src = image.preview;
  img.dataset.source = image.original;
  img.alt = image.description;

  a.appendChild(img);
  fragment.appendChild(li);
});

galleryList.appendChild(fragment);

const instance = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });