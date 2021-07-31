const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const swap = (elem1, elem2, data) => {
  let temp = data[elem1];
  data[elem1] = data[elem2];
  data[elem2] = temp;
};

const move = (from, to, data) => {
  let element = data[from];
  data.splice(from, 1);
  data.splice(to, 0, element);
};

const SelectionSort = async (data, setData) => {
  let proccessingData = data;
  let j;
  let i;
  let min;
  for (i = 0; i < proccessingData.length - 1; i++) {
    min = i;
    for (j = i + 1; j < proccessingData.length; j++) {
      if (proccessingData[j] < proccessingData[min]) {
        min = j;
      }
    }
    swap(i, min, proccessingData);
    await sleep(300);
  }
};

const BubbleSort = async (data, setData) => {
  let j;
  let i;
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        swap(j, j + 1, data);
      }
    }
    await sleep(300);
  }
};

const InsertionSort = async (data, setData) => {
  for (let i = 1; i < data.length; i++) {
    if (data[i] < data[i - 1]) {
      for (let j = 0; j < data.length; j++) {
        if (data[i] < data[j]) {
          move(i, j, data);
        }
      }
    }
    await sleep(300);
  }
};
export { SelectionSort, BubbleSort, InsertionSort };
