const loadAllPhones = async () => {
    console.log("loading all phones...");

    document.getElementById("spinner").style.display = "none";

    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));

    // async await
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();
    // console.log(data.data);
    displayAllPhone(data.data);
};


const displayAllPhone = (phones) => {
    console.log(phones);
}

const handleSearch = () => {
    console.log("searching...");

    document.getElementById("spinner").style.display = "block";

    // simulate a delay of 3 seconds
    setTimeout(function () {
        loadAllPhones();
    }, 3000);
};


loadAllPhones();