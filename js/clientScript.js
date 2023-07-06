const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls){
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery(){
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
      el.classList.remove('gallery-item-6');
      el.classList.remove('gallery-item-7');
      el.classList.remove('gallery-item-8');
      el.classList.remove('gallery-item-9');
      el.classList.remove('gallery-item-10');
      el.classList.remove('gallery-item-11');
      el.classList.remove('gallery-item-12');
      el.classList.remove('gallery-item-13');
      el.classList.remove('gallery-item-14');
      el.classList.remove('gallery-item-15');
    });

    this.carouselArray.slice(0, 13).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  setCurrentState(direction){
    if (direction.className == 'gallery-controls-previous'){
      this.carouselArray.unshift(this.carouselArray.pop());
    }else{
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
    });
  }
  useControls(){
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarsousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarsousel.setControls();
exampleCarsousel.useControls();