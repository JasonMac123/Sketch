const container = document.querySelector('#container')

function makeGrid(number) {
    let total = number*number;
    container.style.setProperty(`--grid-cols`, number);
    container.style.setProperty(`--grid-row`, number);
    for (let c = 1; c <= total; c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black"
        });
        container.appendChild(cell).className = "grid-item";
    };
};
const button = document.querySelector('#gridmaker')
button.addEventListener('click', () => {
    const answer = parseInt(prompt("How many squares would you like per side? (max is 64 squares"));
    if (answer <= 64) {
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        };
        makeGrid(answer);
    } else if (answer > 64 || answer === null) {
        alert("That value is not accepted");
    };
});
