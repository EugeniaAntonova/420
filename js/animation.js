const images = {
    1: '<svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m21.583 20.774-.015.016-.016.018-5.058 5.795-6.979-3.237-.02-.01-.022-.008-7.075-3.02.922-7.638.002-.023.002-.023.687-7.662L11.56 3.5l.023-.005.022-.005 7.5-1.714 3.743 6.72.01.02.013.02 3.948 6.602-5.235 5.637Z" stroke="#BE3D01" stroke-width="3"/></svg>',
    2: '<svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.123 4.679.022.008.021.007 7.268 2.52-.386 7.683-.001.023v.023l-.151 7.69-7.426 2.008-.022.006-.022.006-7.361 2.234-4.204-6.443-.012-.02-.013-.018-4.4-6.31 4.83-5.989.014-.018.013-.018 4.643-6.134 7.187 2.742Z" stroke="#FFBB59" stroke-width="3"/></svg>',
    3: '<svg viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.936 11.845 18.838-8.784-1.812 20.706L3.936 11.845Z" stroke="#FFBB59" stroke-width="3"/></svg>',
    4: '<svg viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.99 4.071 23.66 1.9l-8.454 18.987L2.99 4.071Z" stroke="#BE3D01" stroke-width="3"/></svg>',
}

document.addEventListener('DOMContentLoaded', () => {
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('animated-particle');
        let index = Math.round(Math.random() * 3) + 1;
        particle.innerHTML = `${images[index]}`;

        return particle;
    }

    const getParticles = (container, N) => {
        for (let i = 1; i <= N; i++) {
            let newParticle = createParticle();
            newParticle.style.animationDuration = `${Math.random() * 20 + 7}s`;
            container.append(newParticle);
        }
    }

    const decorate = () => {
        const containers = [...document.querySelectorAll('.js-particles')];
        containers.forEach((container) => {
            let n = container.dataset.particles;
            getParticles(container, n);
        })
    }

    decorate();

})
