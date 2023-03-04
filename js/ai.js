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
    if (datas.length > 12) {
        datas = datas.slice(0, 12);
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
        <img src="${data.image}" class="card-img-top img-fluid rounded-lg p-3" alt="">
        <div class="card-body">
        <h5 class="card-title fw-bolder mb-3">Features</h5>
        <p class="card-text fs-6 text-secondary fw-lighter mb-0">1. ${data.features[0]}</p>
        <p class="card-text fs-6 text-secondary fw-lighter mb-0">2. ${data.features[1]}</p>
        <p class="card-text fs-6 text-secondary fw-lighter mb-0">3. ${data.features[2]}</p>
        <hr>
        <div class="d-flex justify-content-between">
        <div>
        <h5 class="card-title fw-bolder mb-3">${data.name}</h5>
        <p class="card-text fs-6 fw-lighter text-secondary mb-0"><i class="fa-regular fa-calendar-days"></i> ${data.published_in}</p>
        </div>
        <div class="d-flex flex-column-reverse">
        </div>
        <button class="btn btn-outline-danger h-100 my-auto rounded-circle" onclick="modalBtn('${data.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button>
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
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


// call the function

const modalBtn = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url);
    const data = await res.json();
    showModalDetailesInfo(data)
}
const showModalDetailesInfo = showClickDetails => {
    console.log(showClickDetails);
    const modalInfoSection = document.getElementById('modalBody');
    modalInfoSection.innerHTML = `
                            <div class="d-flex row row-cols-1 row-cols-md-2 p-2">
                            <div  class="w-full bg-danger-subtle shadow border border-danger rounded p-3">
                               <h3 class="p-2">${showClickDetails.data.description}</h3>
                                <div class="d-flex justify-content-center mt-4 gap-2">
                               <div  class="w-50 d-flex bg-light-subtle  text-primary-emphasis align-items-center text-center fw-semibold p-2 rounded">${showClickDetails.data.pricing ? showClickDetails.data.pricing[0].price + " " + showClickDetails.data.pricing[0].plan : "Free Of cost basic"}</div>
                               <div class="w-50 bg-light-subtle text-center d-flex align-items-center  text-success fw-semibold p-2 rounded">${showClickDetails.data.pricing ? showClickDetails.data.pricing[1].price + " " + showClickDetails.data.pricing[1].plan : "Free Of cost basic"}</div>
                               <div class="w-50 text-center bg-light-subtle  text-danger fw-semibold rounded">${showClickDetails.data.pricing ? showClickDetails.data.pricing[2].price + " " + showClickDetails.data.pricing[2].plan : "Free Of cost basic"}</div>
                               
                           </div>

                           <div class="d-flex justify-content-around mt-4 ">
                           <div><h3>Features</h3>
                         <ul ${showClickDetails.data.features ? showClickDetails.data.features : 'No data Found!'}>
                         <li class="text-secondary-emphasis" >${showClickDetails.data.features[1].feature_name}</li>
                         <li class="text-secondary-emphasis" >${showClickDetails.data.features[2].feature_name}</li>
                         <li class="text-secondary-emphasis" >${showClickDetails.data.features[3].feature_name}</li>             
                         </ul>

                     </div>
                     <div><h3>Integrations</h3>
                     <ul>
                     <li class="text-secondary-emphasis">${showClickDetails.data.integrations[0] ? showClickDetails.data.integrations[0] : "Not data Found!!"}</li>
                     <li class="text-secondary-emphasis">${showClickDetails.data.integrations[1] ? showClickDetails.data.integrations[1] : "Not data Found!!"}</li>
                     <li class="text-secondary-emphasis">${showClickDetails.data.integrations[2] ? showClickDetails.data.integrations[2] : "Not data Found!!"}</li>
                     </ul>
                     </div>
                     </div>
                  </div>
                      <div class="w-full h-100 bg-light-subtle px-3 py-2 rounded shadow-sm">
                         <span id="badge" class="badge text-bg-danger py-2 px-4">${showClickDetails.data.accuracy.score ? showClickDetails.data.accuracy.score * 100 : "Not Available"} % Accuracy </span>
                         <img  class=" h-100 w-100 rounded" src="${showClickDetails.data.image_link[0]}"
                         <h1 class="fw-bold text-center">${showClickDetails.data.input_output_examples ? showClickDetails.data.input_output_examples[0].input : "Can you five any example?"}
                         </h1>
                         <h5 class="fw-bold text-center mt-3 ">${showClickDetails.data.input_output_examples ? showClickDetails.data.input_output_examples[0].output : "No! not yet! take it break!!"}</h5>
                         </div>
                         </div>
                            `;

}


// call the function
loadData();