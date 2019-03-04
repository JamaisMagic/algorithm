#! /usr/local/bin/node

class BinarySearch {
    search(element, sortedList=[]) {
        let list = [...sortedList];

        if (list.length <= 0) {
            return -1;
        }
        if (list.length === 1) {
            return element === list[0] ? 0 : -1;
        }
        let midIndex = Math.floor(list.length / 2);
        let midElement = list[midIndex];

        let nextList = null;

        if (element === midElement) {
            return midIndex;
        }

        if (element < midElement) {
            nextList = list.slice(0, midIndex);
            let nextIndex = this.search(element, nextList);
            if (nextIndex === -1) {
                return -1;
            }
            return nextIndex;
        } else {
            nextList = list.slice(midIndex);
            let nextIndex = this.search(element, nextList);
            if (nextIndex === -1) {
                return -1;
            }
            return nextIndex + midIndex;
        }
    }

    test() {
        console.time('search');
        console.log(this.search(50, [0, 10, 21, 22, 33, 40, 44, 45 ,50, 51]));
        console.timeEnd('search');
    }
}

new BinarySearch().test();
