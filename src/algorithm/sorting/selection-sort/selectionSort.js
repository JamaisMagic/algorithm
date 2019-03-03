#! /usr/local/bin/node


class SelectionSort {
    sort(originalList) {
        let list = [...originalList];

        if (list.length <= 1) {
            return list;
        }

        let leftList = [list.shift()];

        for (let i = 0; i < list.length; i++) {
            if (list[i] < leftList[0]) {
                [leftList[0], list[i]] = [list[i], leftList[0]];
            }
        }

        let rightList = this.sort(list);

        return [...leftList, ...rightList];
    }

    test() {
        console.time('sort');
        console.log(this.sort([34, 6, 44, 5, 343, 6, 9, 6, 7, 7, 34, 454, 9]));
        console.timeEnd('sort');
    }
}

new SelectionSort().test();
