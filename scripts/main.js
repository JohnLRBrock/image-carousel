// array of all image sources
const images = [
  'http://placekitten.com/g/111/111',
  'http://placekitten.com/g/222/222',
  'http://placekitten.com/g/333/333',
];

const left = function first(imageArray) { return imageArray[0]; };
const center = function second(imageArray) { return imageArray[1]; };
const right = function third(imageArray) { return imageArray[2]; };


const toHtml = function toHtmlBlock(cssClass, imageArray) {
  return `<div class="${cssClass}">
    <img class="left" src=${left(imageArray)}>
    <img class="center" src=${center(imageArray)}>
    <img class="right" src=${right(imageArray)}>
  </div>`;
};

const render = function renderBlock(target, imageArray) {
  const html = toHtml('carousel', imageArray);
  return target.html(html);
};

// moves the carousel to the left
const moveLeft = function whatDoINameThese(imageArray, target) {
  // move the first image to the end of images[]
  imageArray.unshift(imageArray.pop());
  render(target, images);
};
// moves the carousel to the right
const moveRight = function ImGoingToBeASpaceWhale(imageArray, target) {
  // move the last image to the front of images[]
  imageArray.push(imageArray.shift());
  render(target, images);
};

let rotate;
$(document).ready(() => {
  const $content = $('content');
  render($content, images);
  $('.center').addClass('slide-in-right');
  rotate = setInterval(moveRight, 2000, images, $content);
});
