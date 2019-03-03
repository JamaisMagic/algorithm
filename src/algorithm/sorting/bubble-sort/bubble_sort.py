#! /usr/local/bin/python3


class BubbleSort:
    def sort(self, original_list):
        arr = original_list.copy()

        if len(arr) <= 1:
            return arr

        for i in range(len(arr) - 1):
            for j in range(len(arr) - 1 - i):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]

        return arr

    def test(self):
        import time

        start = time.process_time()
        result = self.sort([3, 54, 54, 6, 32, 5, 8, 89, 23, 5, 64, 6, 7, 90, 3])
        end = time.process_time()

        print(result, end - start)

if __name__ == '__main__':
    BubbleSort().test()
