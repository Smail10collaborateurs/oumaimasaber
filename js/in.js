
document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/* scrool up  */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
  
    // Scroll back to top
  
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  
    var updateProgress = function () {
      var scroll = window.pageYOffset;
      var height = document.body.scrollHeight - window.innerHeight;
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
  
    updateProgress();
    window.addEventListener('scroll', updateProgress);
  
    var offset = 50;
    window.addEventListener('scroll', function () {
      if (window.scrollY > offset) {
        document.querySelector('.progress-wrap').classList.add('active-progress');
      } else {
        document.querySelector('.progress-wrap').classList.remove('active-progress');
      }
    });
  
    document.querySelector('.progress-wrap').addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    });
  
  });


  // descr anim
  const plus = document.getElementById('voirplus');
  const descriptionShort = document.getElementById('description-short');
  const descriptionLong = document.getElementById('description-long');
  descriptionLong.style.display='none'
  function showMore() {    
    descriptionLong.style.display = 'block';
    descriptionLong.style.height = '0px';
    const height = descriptionLong.scrollHeight;
    descriptionLong.style.height = '0px';
    plus.style.display='none'
    
    setTimeout(function() {
      descriptionLong.style.transition = 'height 0.5s';
      descriptionLong.style.height = height + 'px';
    }, 0);
    
    setTimeout(function() {
      descriptionLong.style.height = '';
      descriptionLong.style.transition = '';
    }, 500);
  }

  function showLess() {
    descriptionLong.style.height = descriptionLong.scrollHeight + 'px';
    plus.style.display='inline-block'
    setTimeout(function() {
      descriptionLong.style.transition = 'height 0.5s';
      descriptionLong.style.height = '0px';
    }, 0);
    
    setTimeout(function() {
      descriptionLong.style.display = 'none';
      descriptionLong.style.height = '';
      descriptionLong.style.transition = '';
      descriptionShort.style.display = 'inline-block';
    }, 500);
  }


//   hero animations
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0 ,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false,
    },
  });


const items = document.querySelectorAll('.item')
// console.log(items);

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '22vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})




// for image collection
// let NumOfColections1=document.getElementsByClassName('collection1 hero-img').length

// let NumOfColections2=document.getElementsByClassName('hero-img').length
// let NumOfColections3=document.getElementsByClassName('hero-img').length
// let NumOfColections4=document.getElementsByClassName('hero-img').length
// console.log(NumOfColections1,NumOfColections2,NumOfColections3,NumOfColections4);



function handleResize() {
  // console.log(window.innerWidth);
  const collections = document.querySelectorAll('.collection');

  // console.log(collections);
  collections.forEach(collection => {
    const images = collection.querySelectorAll('.hero-img');
    browserWidth=window.innerWidth
    if (browserWidth <= '1024') {
      switch (images.length) {
        case 4:
          images[3].remove()
          break;
        case 3:
          images[2].remove()
          break;
      }
      // console.log('si');
    }
    if (browserWidth <= '768') {
      switch (images.length) {
        case 4:
          images[2].remove()
          images[3].remove()
          break;
        case 3:
          images[2].remove()
          break;
      }
    }
    if (browserWidth <= '580') {
      switch (images.length) {
        case 4:
          images[1].remove()
          images[2].remove()
          images[3].remove()
          break;
        case 3:
          images[1].remove()
          break;
        case 2:
          images[1].remove()
          break;
      }
    }

    var NummOfImages=collection.children.length
    let width = '100%';
    switch (NummOfImages) {
      case 1:
        width='100%'
        break;
      case 2:
        width='50%'
        break;
      case 3:
        width='33.3%'
        break;
      case 4:
        width='25%'
        break;
    }
    images.forEach(image=>{
      image.style.width = width;
      image.style.margin = '0 -1.7px';
    })
  });
  prevWidth = window.innerWidth;
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);




// contact
const btnContacte = document.querySelector('.btn-contacte');
const icons=document.querySelectorAll('icons')
const contacte = document.querySelector('.contacte');
btnContacte.addEventListener('click', () => {
    contacte.classList.toggle('show');
    if(contacte.classList.contains('show')){
    }
  }

);




// Preloader 

const loader = document.getElementById('loader');
window.addEventListener('load', function() {
  loader.style.display = 'none';
});
