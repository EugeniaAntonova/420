const table = document.querySelector('.winners-table');
let rows;
const swipreWrapper = document.querySelector('.swiper-wrapper');
let rowTemplate;

let data = [
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
    ['21.03.2024', '23961154', 'Астана', '#'],
]

const createRow = (data) => {
    const newRow = rowTemplate.cloneNode(true);
    newRow.querySelector('.date').textContent = data[0];
    newRow.querySelector('.num').textContent = `№${data[1]}`;
    newRow.querySelector('.city').textContent = data[2];
    newRow.querySelector('.link').querySelector('a').href = data[3];
    return newRow;
}

const createRows = ([...params]) => {
    for (let param of params) {
        let row = createRow(param);
        table.append(row);
    }
}

const putItemsIntoSlider = () => {
    const max = Math.ceil(rows.length / 9);
    console.log(max);
    for (let i = 0; i < max; i++) {
        let rowGroup = document.createElement('div');
        rowGroup.classList.add('swiper-slide');
        for (let j = 0; j < 9; j++) {
            if (!rows[0]) break;
            rowGroup.append(rows[0]);
            rows.splice(0, 1);
        }
        swipreWrapper.append(rowGroup);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    rowTemplate = document.querySelector('#row-template').content.querySelector('.row');
    createRows(data);
    rows = [...table.querySelectorAll('.row.content')];
    putItemsIntoSlider();
})


const swiperWinners = new Swiper('.winners-swiper', {
    speed: 650,
    slidesPerView: 1,
    spaceBetween: 16,
    watchOverflow: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    longSwipesRatio: 0.25,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
})
