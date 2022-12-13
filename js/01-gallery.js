import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onClickLargeImg);

function onClickLargeImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const img = evt.target;
  onOpenModal(img.dataset.source, img.alt);
}

function onOpenModal(source, alt) {
  const instance = basicLightbox.create(
    ` <img
        src = '${source}';
        alt='${alt}';
      />
  `
    // {
    //   onShowModal: () => document.addEventListener('keydown', onCloseImg),
    // },
    // {
    //   onCloseModal: () => document.removeEventListener('keydown', onCloseImg),
    // }
  );
  instance.show();
}

// function onCloseImg(evt) {
//   if (evt.code !== 'Escape') {
//     return;
//   }
//   instance.close();
// }
