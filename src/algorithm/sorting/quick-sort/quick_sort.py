#! /usr/local/bin/python3


class QuickSort:
    def sort(self, original_list):
        if original_list is None:
            return []

        new_list = original_list.copy()

        if len(new_list) <= 1:
            return new_list

        povit = new_list.pop()
        left_list = []
        right_list = []
        middle_list = [povit]

        for item in new_list:
            if item <= povit:
                left_list.append(item)
            else:
                right_list.append(item)

        left_list = self.sort(left_list)
        right_list = self.sort(right_list)

        return left_list + middle_list + right_list

    def test(self):
        import time

        start = time.process_time()
        print(self.sort([34, 454, 3, 565, 7, 8, 23, 5, 2, 97, 56, 6]))
        end = time.process_time()
        print('sort:', (end - start) * 1000)

if __name__ == '__main__':
    QuickSort().test()
