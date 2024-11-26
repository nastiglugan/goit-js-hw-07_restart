import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markUp = galleryItems
  .map(
    ({ description, original, preview }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markUp);

gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
