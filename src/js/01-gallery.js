// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const imageElGallery = ({ preview, original, description }) => `
  <li>
  <a href="${original}"><img src="${preview}" alt="" title="${description}" width="372" height="240"/></a>
  </li>
`;
const galleryAll = galleryItems.map(el => imageElGallery(el));

galleryList.insertAdjacentHTML('beforeend', galleryAll.join(''));

const galleryEl = new SimpleLightbox('.gallery li a', {
  captionDelay: 250,
});
