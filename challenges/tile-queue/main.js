
var main = document.body.getElementsByTagName("main");
var rows = 3;
var columns = 3;
var gridSize = rows * columns;


for (let row = 0; row < rows; row++) {

    var div = document.createElement("div");
    div.classList.add("wrapper");
    main[0].appendChild(div);

    for (let col = 0; col < columns; col++) {

        var tile = document.createElement("div");
        tile.classList.add("tile");
        div.appendChild(tile);
    }
}

var tiles = document.getElementsByClassName("tile");

console.log(tiles);

var queue = [];

for (var t of tiles) {
    t.addEventListener("click", e => {

        let target = e.target;
        const selectedClass = "selected";
        let classList = target.classList;

        if (classList.contains(selectedClass)) {
            return;
        }

        classList.add(selectedClass);
        queue.push(target);

        if (queue.length == gridSize) {
            let rs = function removeSelected(arr) {
                if (arr.length == 0) {
                    return;
                }

                let t = arr.shift();
                t.classList.remove(selectedClass);
                setTimeout(() => {
                    removeSelected(arr);
                }, 250);

            };

            setTimeout(() => {
                rs(queue);
            }, 1000);

        }
    });
}

