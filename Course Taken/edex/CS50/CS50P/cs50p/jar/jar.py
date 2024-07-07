class Jar:
    def __init__(self, capacity=12):
        if capacity < 0:
            raise ValueError("negative")
        self.capacity = capacity
        self.size = 0


    def __str__(self):
        return "🍪"*self.size
    def deposit(self, n):

        if n > self.capacity:
            raise ValueError("Greater than capacity")
        if self.size + n > self.capacity:
            raise ValueError("Greater than capacity")
        self.size += n

    def withdraw(self, n):
        if n > self.capacity:
            raise ValueError("More than the capacity ")
        if self.size - n < 0:
            raise ValueError("More than the capacity")
        self.size -= n

    @property
    def capacity(self):
        return self._capacity
    @capacity.setter
    def capacity(self,capacity):
        self._capacity = capacity

    @property
    def size(self):
        return self._size
    @size.setter
    def size(self,size):
        self._size = size
def main():
    jar = Jar()
    jar.deposit(3)
    print(jar)

if __name__ == "__main__":
    main()
