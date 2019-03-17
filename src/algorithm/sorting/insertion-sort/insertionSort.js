#! /usr/local/bin/node


class InsertionSort {
    sort(originalList=[]) {
        let list = [...originalList];
        if (list.length <= 1) {
            return list;
        }

        for (let j = 1; j < list.length; j++) {
            let current = list[j];
            let i = j - 1;
            while (i >= 0) {
                if (current >= list[i]) {
                    list[i + 1] = current;
                    break;
                }
                list[i + 1] = list[i];
                list[i] = current;
                i--;
            }
        }

        return list;
    }

    isSorted(array=[]) {
        if (array.length <= 1) {
            return true;
        }

        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                return false;
            }
        }

        return true;
    }

    test() {
        const array = new Array(40000).fill(undefined).map(item => Math.random() * 10000);
        console.time('sort');
        let result = this.sort(array);
        console.timeEnd('sort');
        let sorted = this.isSorted(result);
        console.log('sorted:', sorted);
    }
}

new InsertionSort().test();
