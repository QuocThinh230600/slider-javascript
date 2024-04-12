const slider = [
    {
        name: 'image-1',
        image: 'https://picsum.photos/id/684/600/400',
        alt: 'image-1'
    },
    {
        name: 'image-2',
        image: 'https://picsum.photos/id/683/600/400',
        alt: 'image-2'
    },
    {
        name: 'image-3',
        image: 'https://picsum.photos/id/682/600/400',
        alt: 'image-3'
    },
    {
        name: 'image-4',
        image: 'https://picsum.photos/id/681/600/400',
        alt: 'image-4'
    },
    {
        name: 'image-5',
        image: 'https://picsum.photos/id/680/600/400',
        alt: 'image-5'
    },
    {
        name: 'image-6',
        image: 'https://picsum.photos/id/679/600/400',
        alt: 'image-6'
    },
    {
        name: 'image-7',
        image: 'https://picsum.photos/id/678/600/400',
        alt: 'image-7'
    },
];

const sliderContainer = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentStartIndex = 0;

function showSlide(index) {
    sliderContainer.innerHTML = '';

    for (let i = currentStartIndex; i < currentStartIndex + 2; i++){
        const slide = slider[i];
        sliderContainer.innerHTML += `
            <img src="${slide.image}" alt="${slide.alt}" />
        `
    }
}

function nextSlide() {
    if (currentStartIndex + 2 < slider.length){
        currentStartIndex += 1;
        showSlide();
    }
}

function prevSlide() {
    if (currentStartIndex > 0){
        currentStartIndex -= 1;
        showSlide();
    }
}

showSlide();

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
