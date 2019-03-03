#! /usr/local/bin/python3


class SelectionSort:
    def sort(self, original_list):
        if original_list is None:
            return []
        arr = original_list.copy()
        if len(arr) <= 1:
            return arr

        left_list = [arr.pop()]

        for i, item in enumerate(arr):
            if item < left_list[0]:
                left_list[0], arr[i] = arr[i], left_list[0]

        right_list = self.sort(arr)

        return left_list + right_list

    def test(self):
        import time

        start = time.process_time()
        result = self.sort([34, 6, 44, 5, 343, 6, 9, 6, 7, 7, 34, 454, 9])
        end = time.process_time()

        print(result, end - start)

if __name__ == '__main__':
    SelectionSort().test()
