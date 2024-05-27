document.addEventListener('DOMContentLoaded', function() {
    const naoButton = document.getElementById('nao');
    if (naoButton) {
        naoButton.addEventListener('mouseover', function() {
            naoButton.style.position = 'absolute';
            naoButton.style.top = Math.random() * (window.innerHeight - naoButton.clientHeight) + 'px';
            naoButton.style.left = Math.random() * (window.innerWidth - naoButton.clientWidth) + 'px';
        });

        naoButton.addEventListener('click', function() {
            window.location.href = 'nao_academia.html';
        });
    }

    const simButton = document.getElementById('sim');
    if (simButton) {
        simButton.addEventListener('click', function() {
            window.location.href = 'certeza.html';
        });
    }

    const simCertezaButton = document.getElementById('sim-certeza');
    if (simCertezaButton) {
        simCertezaButton.addEventListener('click', function() {
            window.location.href = 'sim.html';
        });
    }

    const naoCertezaButton = document.getElementById('nao-certeza');
    if (naoCertezaButton) {
        naoCertezaButton.addEventListener('click', function() {
            window.location.href = 'nao_academia.html';
        });
    }

    const raivaButton = document.getElementById('raiva');
    if (raivaButton) {
        raivaButton.addEventListener('click', function() {
            const emoji = document.createElement('span');
            emoji.textContent = '😡';
            emoji.style.position = 'absolute';
            emoji.style.fontSize = '3em';
            emoji.style.top = Math.random() * (window.innerHeight - raivaButton.clientHeight) + 'px';
            emoji.style.left = Math.random() * (window.innerWidth - raivaButton.clientWidth) + 'px';
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 2000);
        });
    }
});
