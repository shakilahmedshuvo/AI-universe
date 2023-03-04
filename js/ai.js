// load data function
const loadData = async () => {
    // star spinner
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayDatas(data.data.tools);
}

// const display data
const displayDatas = datas => {
    const datasContainer = document.getElementById('datas-container');
    datasContainer.textContent = '';
    // 6 data show section
    const showAll = document.getElementById('show-all');
    if (datas.length > 9) {
        datas = datas.slice(0, 6);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none')
    }
    datas.forEach(data => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
        <div class="card">
        <img src="${data.image}" class="card-img-top img-fluid p-3 rounded-lg" alt="">
        <div class="card-body">
        <h5 class="card-title fw-bolder mb-3">Features</h5>
        <p class="card-text mb-0 fs-6 fw-lighter text-secondary">1. ${data.features[0]}</p>
        <p class="card-text mb-0 fs-6 fw-lighter text-secondary">2. ${data.features[1]}</p>
        <p class="card-text mb-0 fs-6 fw-lighter text-secondary">3. ${data.features[2]}</p>
        <hr>
        <div class="d-flex justify-content-between">
        <div>
        <h5 class="card-title fw-bolder mb-3">${data.name}</h5>
        <p class="card-text mb-0 fs-6 fw-lighter text-secondary"><i class="fa-regular fa-calendar-days"></i> ${data.published_in}</p>
        </div>
        <!-- card btn -->
        <button class="btn btn-outline-danger rounded-circle h-100 my-auto"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
        </div>
        `;
        datasContainer.appendChild(dataDiv);
    });
    // stop spinner
    toggleSpinner(false);
}

// spinner function section
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
        // hideShowMoreBtn.classList.add('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
        // hideShowMoreBtn.classList.remove('d-none');
    }
}

// spinner show (see more btn hide)
// const hideShowMoreBtn = document.getElementById('show-all');

// See More section
// document.getElementById('btn-show-all').addEventListener('click', function () {
//     const loadDataAll = loadData();
//     console.log(loadData)
// })


// call the function
loadData();

// const showAllDataTogether = () => {
//     const url = `https://openapi.programming-hero.com/api/ai/tools`
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             allData = data;
//             showAllData(data)
//         })
// }