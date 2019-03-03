#! /usr/local/bin/node


class InsertionSort {
    sort(originalList=[]) {
        let list = [...originalList];
        if (list.length <= 1) {
            return list;
        }

        let sorted = [list.shift()];

        while (list.length > 0) {
            let item = list.shift();
            let found = false;

            for (let i = 0; i < sorted.length; i++) {
                if (sorted[i] >= item) {
                    sorted = [...sorted.slice(0, i), item, ...sorted.slice(i, sorted.length)];
                    found = true;
                    break;
                }
            }

            if (!found) {
                sorted.push(item);
            }
        }

        return sorted;
    }

    test() {
        console.time('sort');
        console.log(this.sort([34, 54, 4, 6, 5, 656, 7, 2, 4, 4, 5, 8, 4, 55, 4, 6, 77, 0]));
        console.timeEnd('sort');
    }
}

new InsertionSort().test();
