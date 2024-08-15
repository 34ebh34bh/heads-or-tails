
let btn = document.getElementById("btn");
let out = document.getElementById("out");

document.getElementById('btn').addEventListener('click', function() {
    let condition = true;
    const imageContainer = document.getElementById('imageContainer');
    let random = Math.floor(Math.random() * 100) + 1;

    if(random < 50 && condition) {
        out.innerHTML = "Вам выпала решка";
        out.style.color = "green";
        const img1 = document.createElement('img');
        img1.src = 'https://kvotka.ru/images/2017/01/23/RESKA2ff0c.md.jpg';
        imageContainer.appendChild(img1);
    }else {
        out.innerHTML = "Вам выпал орёл";
        const img2 = document.createElement('img');
        img2.src =  'https://www.staraya-moneta.ru/upload/iblock/031/6.jpg';
        imageContainer.appendChild(img2);
    }
});