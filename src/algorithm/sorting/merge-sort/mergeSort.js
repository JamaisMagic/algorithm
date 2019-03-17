#! /usr/local/bin/node


class MergeSort {
    sort(originalList=[]) {
        let list = [...originalList];
        if (list.length <= 1) {
            return list;
        }

        let divider = Math.floor(list.length / 2);

        let leftList = list.slice(0, divider);
        let rightList = list.slice(divider, list.length);
        let leftRe = this.sort(leftList);
        let rightRe = this.sort(rightList);

        return this.merge(leftRe, rightRe);
    }

    merge(sortedArray1=[], sortedArray2=[]) {
        let list1 = [...sortedArray1];
        let list2 = [...sortedArray2];

        let result = [];

        while (list1.length > 0 && list2.length > 0) {
            if (list1[0] <= list2[0]) {
                result.push(list1.shift());
            } else {
                result.push(list2.shift());
            }
        }

        result = [...result, ...list1, ...list2];

        return result;
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

new MergeSort().test();
