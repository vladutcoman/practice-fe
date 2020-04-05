/** Find the missing number in a given integer array of 1 to 100 */
export const missingEl = arr => {
  if (arr[0] != 1) {
    return 1;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i+1]) {
      return arr[i] + 1;
    }
  }
  return 0;
}

/** Find a duplicate number in an array of integers */
export const duplicate = arr => {
  const elements = {};
  const length = arr.length;
  if (length === 0 || length === 1) {
    return false;
  }
  for (const el of arr) {
    if (el in elements) {
      return el;
    }
    elements[el] = true;
  }
  
  return false;
}

/** Find the largest and smallest number in an unsorted array of integers */
export const minMax = arr => {
  const length = arr.length;
  if (length === 0) {
    return null;
  }
  if (length === 1) {
    return { min: arr[0], max: arr[0] };
  }
  const result = { min: arr[0], max: arr[0] };
  for (let i = 1; i < length; i ++) {
    if (result.max < arr[i]) {
      result.max = arr[i];
    }
    if (result.min > arr[i]) {
      result.min = arr[i];
    }
  }
  return result;
}

/** Return an array showing the cumulative sum at each index of an array of integers */
export const prevIndexSum = arr => {
  const length = arr.length;
  const result = [];
  result[0] = arr[0];
  for (let i = 1; i < length; i++) {
    result[i] = arr[i] + result[i-1];
  }
  return result;
}

/** Find all duplicate numbers in an array with multiple duplicates */
export const findAllDuplicates = arr => {
  const length = arr.length;
  const duplicates = {};
  for (let i = 0; i < length; i++) {
    if (arr[i] in duplicates) {
      duplicates[arr[i]]++;
    } else {
      duplicates[arr[i]] = 1;
    }
  }
  return duplicates;
}

/** Remove all duplicates from an array of integers */
export const removeDuplicates = arr => {
  const length = arr.length;
  const result = [];
  const duplicates = {};
  for (let i = 0; i < length; i++) {
    if (arr[i] in duplicates) {
      duplicates[arr[i]]++;
    } else {
      duplicates[arr[i]] = 1;
    }
  }
  for(const key of Object.keys(duplicates)) {
    if (duplicates[key] == 1) {
      result.push(key);
    } 
  }
  return result;
}

/** Find all pairs in an array of integers whose sum is equal to a given number */
export const sumPairs = (arr, value) => {
  const length = arr.length;
  const result = [];
  const elements = {};
  for (let i = 0; i < length; i++) {
    const val = value - arr[i];
    if (val in elements) {
      result.push(arr[i], val);
    }
    elements[arr[i]] = true;
  }
  return result;
}
