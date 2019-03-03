#! /usr/local/bin/python3


class InsertionSort:
    def sort(self, original_list):
        if original_list is None:
            return []

        arr = original_list.copy()

        if len(arr) <= 1:
            return arr

        sorted = [arr.pop()]

        while len(arr) > 0:
            item = arr.pop()

            for i, val in enumerate(sorted):
                if val >= item:
                    sorted = sorted[0:i] + [item] + sorted[i:len(sorted)]
                    break
            else:
                sorted.append(item)

        return sorted

    def test(self):
        import time

        start = time.process_time()
        result = self.sort([23, 2, 6, 3, 77, 4, 98, 8, 5, 5, 8])
        end = time.process_time()
        print(result, (end - start) * 1000)

if __name__ == '__main__':
    InsertionSort().test()
