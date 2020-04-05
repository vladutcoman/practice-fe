// angle analog clock at 2:20

// [2, 1, 2, 4] => [2, 1, 4];

const deDup = arr => {
  const elements = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in elements)) {
      elements[arr[i]] = true;
    }
  }
  return Object.keys(elements);
}


// a -> b -> c => c -> b -> a
