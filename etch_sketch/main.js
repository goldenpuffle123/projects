function setupGrid(initial=16) {
    removeGrid();
    for(let i=0; i<initial*initial; i++) {
        let curr = document.createElement("div");
        curr.style.width = `${100/initial}%`;
        curr.dataset.lightness = 100;
        curr.style.backgroundColor = "hsl(0, 0%, 100%)"; // Or use opacity...
        curr.classList.add("grid-box");
        containerDiv.appendChild(curr);
    }
    const changeBy = 10;
    containerDiv.addEventListener(
        "mouseover", (e) => {
            let target = e.target;
            if (target.classList.contains("grid-box")) {
                let x = parseInt(target.dataset.lightness);
                if(x > 0){
                    x-=changeBy;
                    target.dataset.lightness = x;
                    target.style.backgroundColor = `hsl(0, 0%, ${x}%)`;
                    
                }
            }
        }
    )
    // containerDiv.addEventListener(
    //     "mouseout", (e) => {
    //         e.target.classList.remove("grid-box-hover");
    //     }
    // )
}

function removeGrid() {
    while(containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

const containerDiv = document.querySelector("#container");
const changeGridButton = document.querySelector("#button-change-size");
const resetButton = document.querySelector("#reset-button");

let gridSize=16; // Start with 16x16

changeGridButton.addEventListener(
    "click", () => {
        gridSize = prompt("Enter new grid size");
        setupGrid(gridSize);
    }
)
resetButton.addEventListener(
    "click", () => {
        setupGrid(gridSize);
    }
)

setupGrid(gridSize);