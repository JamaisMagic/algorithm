#! /usr/local/bin/node


class Bfs {
    search(val, dict={}) {
        let count = 0;

        let queue = [dict];
        let checkedQueue = [];

        while (queue.length > 0) {
            let item = queue.shift();

            if (checkedQueue.indexOf(item) < 0) {
                count++;
                checkedQueue.push(item);
                if (val === item.val) {
                    console.log(count);
                    console.log(checkedQueue);
                    return item;
                }

                queue = [...queue, ...(item.children || [])];
            }
        }

        console.log(count);
        return null;
    }

    test() {
        let obj1 = {
            name: 1,
            val: 1,
            children: []
        };

        let obj2 = {
            name: 2,
            val: 2,
            children: []
        };

        let obj3 = {
            name: 3,
            val: 3,
            children: []
        };

        let obj4 = {
            name: 4,
            val: 4,
            children: []
        };

        let obj5 = {
            name: 5,
            val: 5,
            children: []
        };

        let obj6 = {
            name: 6,
            val: 6,
            children: []
        };

        obj1.children.push(obj2);
        obj1.children.push(obj3);
        obj2.children.push(obj1);
        obj2.children.push(obj3);
        obj3.children.push(obj4);
        obj3.children.push(obj5);
        obj4.children.push(obj5);
        obj4.children.push(obj6);
        obj5.children.push(obj4);
        obj5.children.push(obj6);
        obj6.children.push(obj2);
        obj6.children.push(obj3);

        console.log(this.search(4, obj1));
    }
}

new Bfs().test();
