const APIKEY = "IAQLis80SBUtdxDSL6Q7hBF9HrAZvqFo3ncpDrpDbe8";


const inputEL = document.querySelector('.inp');
const alertEl = document.querySelector('.alert');
const btnEl = document.querySelector('#btn');
const result = document.querySelector('.result');

btnEl.addEventListener('click', getPhotos);

async function getPhotos() {
    result.innerHTML = `<img class="spinner" src="imgs/5.gif" alt="Spinner" >`;
    await fetch(`https://api.unsplash.com/photos?per_page=${inputEL.value}&page=${Math.floor(Math.random()*100)}&client_id=${APIKEY}`)
    .then(res => res.json())
    .then((data) => {
        let element = "";
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            element += `<img src="${data[i].urls.thumb}" class="img" alt=Image />`;
            // const img = document.createElement('img');
            // img.src = data[i].urls.thumb;
            // img.alt = "Image";
            // img.classList.add('img');
            
            // result.appendChild(img);
    }
     
        // console.log(element);
        // console.log(inputEL.value);
        result.innerHTML = element;
        // console.log(result.children.length);
        if(inputEL.value < 2 || inputEL.value > 11) {
        console.log("Less Then 2");
            alertEl.innerText = 'number Do Not Less Then 2 Or Surpass 11';
            result.innerHTML = "";
        } else {
            alertEl.innerText = '';
        }


    });
}