const previews = document.querySelectorAll('.timeline-preview');
const carousel = document.getElementById('timeline-carousel');
const modal = document.getElementById('timeline-modal');
const closeModal = document.getElementById('close-modal');
const modalCards = document.querySelectorAll('.modal-card');

let carouselIndex = 0;
let modalIndex = 0;
let carouselInterval, modalInterval;

// === CAROUSEL (outside modal) ===
function showCarouselCard(index) {
  previews.forEach((p, i) => {
    p.classList.toggle('hidden', i !== index);
  });
  carouselIndex = index;
}
function startCarousel() {
    carouselInterval = setInterval(() => {
      carouselIndex = (carouselIndex + 1) % previews.length;
      showCarouselCard(carouselIndex);
    }, 8000); // change every 8s
  }
  
function stopCarousel() {
  clearInterval(carouselInterval);
}
startCarousel();

// === MODAL (detailed view) ===
function showModalCard(index) {
  modalCards.forEach((c, i) => {
    c.classList.toggle('hidden', i !== index);
  });
  modalIndex = index;
}
function startModalAutoPlay() {
  modalInterval = setInterval(() => {
    modalIndex = (modalIndex + 1) % modalCards.length;
    showModalCard(modalIndex);
  }, 5000);
}
function stopModalAutoPlay() {
  clearInterval(modalInterval);
}

// Open modal when preview clicked
previews.forEach(preview => {
    preview.addEventListener('click', () => {
      modal.classList.remove('hidden');
      showModalCard(preview.dataset.index);
      stopCarousel();
    });
  });
  

// Close modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  stopModalAutoPlay();
  startCarousel();
});

// Modal navigation
document.getElementById('next-modal').addEventListener('click', () => {
  modalIndex = (modalIndex + 1) % modalCards.length;
  showModalCard(modalIndex);
});
document.getElementById('prev-modal').addEventListener('click', () => {
  modalIndex = (modalIndex - 1 + modalCards.length) % modalCards.length;
  showModalCard(modalIndex);
});

// Swipe support in modal
let startX = 0;
modal.addEventListener('touchstart', e => startX = e.touches[0].clientX);
modal.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) { // left swipe
    modalIndex = (modalIndex + 1) % modalCards.length;
    showModalCard(modalIndex);
  } else if (endX - startX > 50) { // right swipe
    modalIndex = (modalIndex - 1 + modalCards.length) % modalCards.length;
    showModalCard(modalIndex);
  }
});

const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

// Show card at index
function showCarouselCard(index) {
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
}

// Reset autoplay timer when user interacts
function resetCarouselAutoPlay() {
  stopCarousel();
  startCarousel();
}

// Prev button
prevBtn.addEventListener('click', () => {
  carouselIndex = (carouselIndex - 1 + previews.length) % previews.length;
  showCarouselCard(carouselIndex);
  resetCarouselAutoPlay();
});

// Next button
nextBtn.addEventListener('click', () => {
  carouselIndex = (carouselIndex + 1) % previews.length;
  showCarouselCard(carouselIndex);
  resetCarouselAutoPlay();
});


// Pause autoplay on hover
modal.addEventListener('mouseenter', stopModalAutoPlay);
modal.addEventListener('mouseleave', startModalAutoPlay);


const certData = {
    1: {
      img: "assets/images/cert-google.png",
      title: "Google Data Analytics",
      issuer: "Coursera | Issued 2023",
      link: "https://coursera.org/verify/google-cert"
    },
    2: {
      img: "assets/images/cert-aws.png",
      title: "AWS Cloud Practitioner",
      issuer: "AWS | Issued 2022",
      link: "https://aws.training/verify"
    },
    3: {
      img: "assets/images/cert-powerbi.png",
      title: "Microsoft Power BI",
      issuer: "Microsoft | Issued 2021",
      link: "https://microsoft.com/verify"
    }
  };
  
  const certCards = document.querySelectorAll(".cert-card");
  const certModal = document.getElementById("cert-modal");
  const closeCertModal = document.getElementById("cert-modal-close");
  const certImg = document.getElementById("cert-modal-img");
  const certTitle = document.getElementById("cert-modal-title");
  const certIssuer = document.getElementById("cert-modal-issuer");
  const certLink = document.getElementById("cert-modal-link");
  
  certCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.cert;
      const cert = certData[id];
  
      certImg.src = cert.img;
      certTitle.textContent = cert.title;
      certIssuer.textContent = cert.issuer;
      certLink.href = cert.link;
  
      certModal.classList.remove("hidden");
    });
  });
  
  closeCertModal.addEventListener("click", () => {
    certModal.classList.add("hidden");
  });
  
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) {
      certModal.classList.add("hidden");
    }
  });
  