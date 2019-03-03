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

    test() {
        console.time('sort');
        console.log(this.sort([1, 6, 8, 3, 232, 563, 2, 9, 4, 6, 4, 65, 2345]));
        console.timeEnd('sort');
    }
}

new QuickSort().test();
