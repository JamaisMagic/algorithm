#! /usr/local/bin/python3


class LinearSearch:
    def search(self, element, search_list):
        if search_list is None:
            return -1

        for i, val in enumerate(search_list):
            if val == element:
                return i

        return -1

    def test(self):
        import time

        start = time.process_time()
        result = self.search(4, [3, 5, 7, 33, 4, 6, 9, 8, 3])
        end = time.process_time()
        print(result, (end - start) * 1000)

if __name__ == '__main__':
    LinearSearch().test()
