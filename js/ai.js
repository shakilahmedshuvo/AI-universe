// load data function
const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
}

// const display data
const displayData = data =>{
    console.log(data)
}
// call the function
loadData();