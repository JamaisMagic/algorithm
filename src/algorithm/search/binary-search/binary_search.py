#! /usr/local/bin/python3


import math


class BinarySearch:
    def search(self, element, sorted_list):
        if sorted_list is None or len(sorted_list) <= 0:
            return -1

        left = 0
        right = len(sorted_list) - 1

        while left < right:
            mid = left + math.floor((right - left) / 2)

            if element == sorted_list[mid]:
                return mid

            if element < sorted_list[mid]:
                right = mid - 1
            else:
                left = mid + 1

        return -1

    def test(self):
        import time

        start = time.process_time()
        result = self.search(50, [0, 10, 21, 22, 33, 40, 44, 45 ,50, 51])
        end = time.process_time()
        print(result, (end - start) * 1000)

if __name__ == '__main__':
    BinarySearch().test()
