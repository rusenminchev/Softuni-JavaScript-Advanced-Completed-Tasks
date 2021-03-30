function createSortedList() {

    let elements = [];

    let list = {
        size: 0,
        add: (element) => {
            elements.push(element);
            list.size++;
            elements.sort((a, b) => a - b);
        },
        remove: (index) => {
            if (index >= 0 && index < list.size) {
                elements.splice(index, 1);
                list.size--;
                elements.sort((a, b) => a - b);
            }
            else {
                throw new Error("Index out of range!")
            }

        },
        get: (index) => {
            if (index >= 0 && index < list.size) {
                return elements[index];
            }
            else {
                throw new Error("Index out of range!")
            }
        },
    }

    return list;
}

try {
    let list = createSortedList();
    list.add(7);
    list.add(5);
    list.add(3);
    console.log(list.get(0));
    console.log(list.get(1));
    console.log(list.get(2));
    list.remove(-1);

} catch (error) {
    console.log(error.message);
}




