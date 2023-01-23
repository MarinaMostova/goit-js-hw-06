const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const createGallery = (source) => {
  return source.map((image) => {
    const itemOfGallery = document.createElement("li");
    itemOfGallery.classList.add("gallery__item");

    const imageOfGallery = document.createElement("img");
    imageOfGallery.src = image.url;
    imageOfGallery.alt = image.alt;
    imageOfGallery.classList.add("gallery__image");

    itemOfGallery.appendChild(imageOfGallery);

    return itemOfGallery;
  });
};

const elements = createGallery(images);
listEl.append(...elements);
