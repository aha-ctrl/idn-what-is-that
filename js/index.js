
let massive = [1, 2, 3, 4, 5];

while (true) {
    let a = prompt("Выберите действие: добавить, удалить, вывести или выйти:");
    
    if (a === "выйти") {
        break;
    }
    
    if (a === "удалить") {
        let b = prompt("Удалить последний или первый элемент? (последний/первый):");
        if (b === "последний") {
            massive.pop();
        } else if (b=== "первый") {
            massive.shift();
        }
    } else if (a === "добавить") {
        let c = prompt("Добавить в начало или конец? (начало/конец):");
        let d= prompt("Введите элемент для добавления:");
        if (c === "начало") {
            massive.unshift(d);
        } else if (c === "конец") {
            massive.push(d);
        }
    } else if (a === "вывести") {
        console.log(massive.join(', '));
    } else {
        console.log("Неверное действие, попробуйте снова.");
    }
    console.log(massive)
}