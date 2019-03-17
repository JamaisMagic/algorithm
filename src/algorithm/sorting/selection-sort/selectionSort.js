#! /usr/local/bin/node


class SelectionSort {
    sort(originalList) {
        let list = [...originalList];

        if (list.length <= 1) {
            return list;
        }

        let leftList = [list.shift()];

        while (list.length > 0) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] < leftList[leftList.length - 1]) {
                    [leftList[leftList.length - 1], list[i]] = [list[i], leftList[leftList.length - 1]];
                }
            }

            leftList.push(list.shift());
        }

        return leftList;
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

new SelectionSort().test();
