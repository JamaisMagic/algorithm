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

    test() {
        console.time('sort');
        console.log(this.sort([3, 5, 9, 3, 6, 1, 55, 34, 23, 8, 4]));
        console.timeEnd('sort');
    }
}

new MergeSort().test();
