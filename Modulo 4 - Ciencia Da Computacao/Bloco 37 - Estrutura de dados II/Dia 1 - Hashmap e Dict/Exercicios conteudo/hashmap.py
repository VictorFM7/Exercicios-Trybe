class HashMap:
    def __init__(self):
        self._buckets = [[] for _ in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                item.name = new_name
