const switcher = document.querySelector('#cbx'),
    more = document.querySelector('.more'),
    modal = document.querySelector('.modal'),
    videos = document.querySelector('.videos__item');
let player,
    button,
    box,
    boxContent;

function bindSlideToggle(trigger, boxBody, content) {
    button = {
        'element': document.querySelector(trigger),
        'active': false
    };
    box = document.querySelector(boxBody);
    boxContent = document.querySelector(content);

    button.element.addEventListener('click', onOpenSliderClick);
}

function onOpenSliderClick() {
    let openClass = 'slide-active';
    if (button.active === false) {
        button.active = true;
        box.style.height = boxContent.clientHeight + 'px';
        box.classList.add(openClass);
        console.log('button active false');
    } else {
        button.active = false;
        box.style.height = 0 + 'px';
        box.classList.remove(openClass);
    }
}

function switchMode() {
    if (night === false) {
        night = true;
        document.body.classList.add('night');
        document.querySelectorAll('.hamburger > line').forEach((item) => {
            item.style.stroke = '#fff';
        });
        document.querySelectorAll('.videos__item-descr').forEach((item) => {
            item.style.color = '#fff';
        });

        document.querySelectorAll('.videos__item-views').forEach((item) => {
            item.style.color = '#fff';
        });
        document.querySelector('.videos__item-descr').style.color = '#fff';
        document.querySelector('.logo > img').src = 'logo/youtube_night.svg';
    } else {
        night = false;
        document.body.classList.remove('night');
        document.querySelectorAll('.hamburger > line').forEach((item) => {
            item.style.stroke = '#000';
        });
        document.querySelectorAll('.videos__item-descr').forEach((item) => {
            item.style.color = '#000';
        });

        document.querySelectorAll('.videos__item-views').forEach((item) => {
            item.style.color = '#000';
        });
        document.querySelector('.videos__item-descr').style.color = '#000';
        document.querySelector('.logo > img').src = 'logo/youtube.svg';
    }
}

let night = false;
switcher.addEventListener('change', () => {
    switchMode();
});

bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu');

const data = [
    ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
    ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
        '#2 Установка spikmi  и работа с ветками Github | Марафон верстки Урок 2',
        '#1 Верстка реального заказа landing Page | Марафон верстки | Артем Исламов'],
    [ '3,6 тыс. просмотров', '4.2 тыс. просмотров', '28 тыс. просмотров' ],
    ['X9SmcYElM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
];

// function onOpenMoreContentClick() {
//     console.log('123');
//     const videosWrapper = document.querySelector('.videos__wrapper');
//     more.remove();
//     // data.forEach(() => {
//     //
//     // })
//     for( let i = 0; data[0].length; i++) {
//         let card = document.createElement('a');
//         card.classList.add('videos__item');
//         card.setAttribute('data-url', data[3][i]);
//         card.innerHTML = `
//               <img src="${data[0][i]}" alt="thumb">
//               <div class="videos__item-descr">${data[1][i]}</div>
//               <div class="videos__item-views">${data[2][i]}</div>
//         `;
//         videosWrapper.appendChild(card);
//     }
// }

more.addEventListener('click', function () {
    const videosWrapper = document.querySelector('.videos__wrapper');
    more.remove();
    // data.forEach(() => {
    //
    // })
    for( let i = 0; i < data[0].length; i++) {
        let card = document.createElement('a');
        card.classList.add('videos__item', 'videos__item-active');
        card.setAttribute('data-url', data[3][i]);
        card.innerHTML = `
              <img src="${data[0][i]}" alt="thumb">
              <div class="videos__item-descr">${data[1][i]}</div>
              <div class="videos__item-views">${data[2][i]}</div>
        `;
        videosWrapper.appendChild(card);
        setTimeout(() => {
            card.classList.remove('videos__item-active');
        }, 10);
    }
});