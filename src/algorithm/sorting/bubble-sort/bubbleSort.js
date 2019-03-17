#! /usr/local/bin/node


class BubbleSort {
    sort(originalList=[]) {
        let list = [...originalList];
        if (list.length <= 1) {
            return list;
        }

        for (let i = 0; i < list.length - 1; i++) {
            for (let j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    [list[j], list[j + 1]] = [list[j + 1], list[j]];
                }
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
        console.log('sorted:%s', sorted);
    }
}

new BubbleSort().test();
