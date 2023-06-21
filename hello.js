const container = document.createElement("div");
document.body.appendChild(container);

container.setAttribute("id", "container");
function createDivs(number) {
    if(number <= 100) {
        for(let y = 1; y <= number; y++) {
            for(let i = 1; i <= number; i++) {
                let divs = document.createElement("div");
                divs.classList.add("innerDivs")
                container.appendChild(divs);
            }
        }
    }
    const cells = document.querySelectorAll(".innerDivs");
    cells.forEach(cell=>cell.addEventListener("mouseenter", addClassName));
}
createDivs(16);

const cells = document.querySelectorAll(".innerDivs");

function addClassName() {
    if(!this.classList.contains("mouseover")) {
        this.classList.add("mouseover");
    } else {
        this.classList.remove("mouseover");
    }

}

cells.forEach(cell=>cell.addEventListener("mouseenter", addClassName));

const button = document.querySelector("button")

function createNewGrid() {
    let gridSize = prompt("?^2")
    document.querySelectorAll(".innerDivs").forEach(e => e.remove());
    createDivs(gridSize);
}
button.addEventListener("click", createNewGrid);