#! /usr/local/bin/node

class LinearSearch {
    search(element, list=[]) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === element) {
                return i;
            }
        }

        return -1;
    }

    test() {
        console.time('search');
        console.log(this.search(4, [3, 5, 7, 33, 6, 9, 8, 3]));
        console.timeEnd('search');
    }
}

new LinearSearch().test();
