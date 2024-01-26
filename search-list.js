let keys = [
    'Lahore',
    'Karachi',
    'KPK',
    'Sindh',
];

const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById('input-box');

inputbox.onkeyup = function () {
    let result = [];
    let input = inputbox.value;
    if (input.lenght) {
        result = keys.filter((keyword) => {
         return   keyword.toLowerCase.includes(input.toLowerCase);
        });
        console.log(result);
    }
}



