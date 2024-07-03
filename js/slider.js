const table = document.querySelector('.winners-table');
const swipreWrapper = document.querySelector('.swiper-wrapper');
let rows;
let rowTemplate;

let data = [
    ['02.07.2024', '863757', 'Online', 'https://www.youtube.com/live/82DGPMSzLCE?si=jlspfpLPrP3k0Uq_&t=281'],
    ['26.06.2024', '833918', 'Online', 'https://www.youtube.com/live/9lQH4TgNIA8?si=sR2hAPtfCaiS1tOO'],
    ['18.06.2024', '808610', 'Online', 'https://www.youtube.com/live/pr1yIfaM8Pk?si=h6LzYzK1AtFrA4ip&t=361'],
    ['11.06.2024', '778970', 'Online', 'https://www.youtube.com/live/qHpTwwzarAc?si=ECMb4h5XMf_Gq1kF&t=302'],
    ['04.06.2024', '736312', 'Online', 'https://www.youtube.com/live/4Fghvx4JkM4?si=SnknkcjCAbo6rp1l&t=326'],
    ['28.05.2024', '711289', 'Online', 'https://www.youtube.com/live/xs8HJFJ9PHU?si=hnvYS7Gcm_bf_PAM&t=281'],
    ['21.05.2024', '705011', 'Online', 'https://www.youtube.com/live/EQzPwozyMtg?si=4hQUvMT92l-TwfuQ&t=303'],
    ['14.05.2024', '679197', 'Online', 'https://www.youtube.com/live/gAci1UPuBkw?si=nFnP9JbR-S7GQV-p&t=290'],
    ['07.05.2024', '653645', 'Online', 'https://www.youtube.com/live/KMTT-STUvoc?si=khJ9dS79CrqJs9xQ&t=311'],
    ['30.04.2024', '631367', 'Online', 'https://www.youtube.com/live/qTtRXdKEAA8?si=ZXP6alNkBXjB7ap6&t=367'],
    ['23.04.2024', '592034', 'Online', 'https://www.youtube.com/live/wf3zHI07Gy4?si=CvQY1lv-iV0CV-Bh&t=320'],
    ['16.04.2024', '577244', 'Online', 'https://www.youtube.com/live/H-2tFxGuGwQ?si=Iin9BfFmXKQHtbrB&t=338'],
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
