const container = document.createElement("div");
container.classList.add("container");

const button = document.querySelector("button");
button.addEventListener("click", createNewGrid);

createDivs(16);


function createDivs(number) {
    if(number <= 100) {                                                                                                     //limit the number to save resources
        for(let i = 1; i <= number; i++) {                                                                         //create a column + add class "column"
            const column = document.createElement("div");
            column.classList.add("column");
            for(let y = 1; y <= number; y++) {                                                                     //create a row + add class "row",  "inner Divs"
                const row = document.createElement("div");
                row.classList.add("row", "innerDivs");
                column.appendChild(row);                                                                                    //add row to column
            }
            container.appendChild(column);                                                                                  //add column to container
        }
        document.body.appendChild(container);                                                                               //add everything to the document body
    }
    const cells = document.querySelectorAll(".innerDivs");                                     //select all elements containing class "innerDivs" + addEventListener to color each div on mousenter
    cells.forEach(cell=>cell.addEventListener("mouseenter", addClassName));
}

function addClassName() {                                                                                             //callback function for Eventlistener to add and remove class
    if(!this.classList.contains("mouseover")) {
        this.classList.add("mouseover");
    } else {
        this.classList.remove("mouseover");
    }

}

function createNewGrid() {                                                                                            //function for the button to create a new grid
    let gridSize = prompt("?^2");
    document.querySelectorAll(".innerDivs").forEach(e => e.remove());
    createDivs(gridSize);
}