#! /usr/local/bin/node


import math


class MergeSort:
    def sort(self, original_list):
        if original_list is None:
            return []

        arr = original_list.copy()

        if len(arr) <= 1:
            return arr

        divider = math.floor(len(arr) / 2)
        left_arr = arr[0:divider]
        right_arr = arr[divider:]

        left_arr_re = self.sort(left_arr)
        right_arr_re = self.sort(right_arr)

        return self.merge(left_arr_re, right_arr_re)

    def merge(self, sorted_list1, sorted_list2):
        if sorted_list1 is None or sorted_list2 is None:
            return (sorted_list1 or []) + (sorted_list2 or [])

        list1 = sorted_list1.copy()
        list2 = sorted_list2.copy()
        result_list = []

        while len(list1) > 0 and len(list2) > 0:
            if list1[0] <= list2[0]:
                result_list.append(list1[0])
                list1.remove(list1[0])
            else:
                result_list.append(list2[0])
                list2.remove(list2[0])

        return result_list + list1 + list2

    def test(self):
        import time

        start = time.process_time()
        result = self.sort([23, 2, 6, 3, 77, 4, 98, 8, 5, 5, 8])
        end = time.process_time()
        print(result, (end - start) * 1000)

if __name__ == '__main__':
    MergeSort().test()
