#! /usr/local/bin/node


class QuickSort {
    sort(originalArr=[]) {
        let list = [...originalArr];

        if (list.length <= 1) {
            return list;
        }

        let pivot = list.shift();
        let leftList = [];
        let rightList = [];
        let middleList = [pivot];

        for (let i = 0, length = list.length; i < length; i++) {
            let item = list[i];
            if (item <= pivot) {
                leftList.push(item);
            } else {
                rightList.push(item);
            }
        }

        leftList = this.sort(leftList);
        rightList = this.sort(rightList);

        return [...leftList, ...middleList, ...rightList];
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

new QuickSort().test();
