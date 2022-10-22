{
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T;
  };

  const filter: Filter = (array, callback) => {
    const result: any = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (callback(item)) {
        result.push(item);
      }
    }
    return result;
  };

  filter([1, 2, 3, 4], (item) => item % 2 === 0);
  filter([{ id: 1 }, { id: 2, age: 3 }], (item) => item.id === 1);
}
