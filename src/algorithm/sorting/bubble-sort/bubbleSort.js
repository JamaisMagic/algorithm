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

    test() {
        console.time('sort');
        console.log(this.sort([1, 4, 2, 8, 9, 6, 7, 3, 54, 3, 534, 67, 5, 4, 76]));
        console.timeEnd('sort');
    }
}

new BubbleSort().test();
