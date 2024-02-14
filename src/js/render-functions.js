import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./refs";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function checkFunction(userData) {
    refs.gallery.classList.remove("loader");
    if (userData.hits.length === 0) {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topLeft",
        });
    } else {
        iziToast.success({
            message: `A total of ${userData.totalHits} images were successfully found`,
            position: "topLeft",
        });
        renderFunction(userData);
    }
};

function renderFunction(userData) {
  let gallery = new SimpleLightbox(".gallery a");
  gallery.refresh();
    const markup = userData.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" title="${tags}"/>
          <ul>
            <li>
              <h3>Likes</h3>
              <p>${likes}</p>
            </li>
            <li>
              <h3>Vievs</h3>
              <p>${views}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${comments}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${downloads}</p>
            </li>
          </ul>
        </a></li>`
    }).join("");
  refs.gallery.insertAdjacentHTML("beforeend", markup);

  gallery = new SimpleLightbox(".gallery a",{captions: false,});
};