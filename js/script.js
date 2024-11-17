var tablica = [
    {property1: 11, property2: 12, property3: 13},
    {property1: 21, property2: 22, property3: 23},
    {property1: 11, property2: 32, property3: 33}
];

// console.log(tablica);

// function showProperties() {
//     console.log(tablica)
// };

var element = document.getElementById('przycisk');
element.addEventListener('click', function() {
    console.log(tablica);
}, false);



