import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGallery = el => {
    return el.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>
        `;
    
        })

    .join("");
};

const photosCollection = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosCollection);

const handleGalleryClick = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const urlOrig = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${urlOrig}">`);

    instance.show();

    const handleOnEscKeyPress = (event) => {
        if (event.key === "Escape") {
            instance.close();
            window.removeEventListener("keydown", handleOnEscKeyPress);
        }
    }
    window.addEventListener("keydown", handleOnEscKeyPress);
};

galleryList.addEventListener("click", handleGalleryClick);

