// Prompt: Merge Intervals
// Problem: Given a collection of intervals, merge any overlapping intervals.
// An interval is represented by a pair of integers start and end, where start is the start of the interval, and end is the end of the interval.
// It is guaranteed that the input list of intervals is non - empty.
// Example:
// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// mergeIntervals(intervals); // Output: [[1,6],[8,10],[15,18]]


function mergeIntervals(intervalsArray){
  let mergedList = [];
  // [1,6]

  for (let i = 1; i < intervalsArray.length; i++ ) {
    let currentInterval = intervalsArray[i];
    let nextInterval = intervalsArray[i + 1];

    if (nextInterval[1] >= currentInterval[0]) {
      mergedList.push([currentInterval[0],nextInterval[1]])

      mergedList[1] = 
    }
  }


}


function mergeIntervals(intervalsArray){
  let mergedList = [];

  for (let i = 1; i < intervalsArray.length; i++ ) {
    let currentInterval = intervalsArray[i];
    let nextInterval = mergedList[mergedList.length -1];

    if (nextInterval[1] >= currentInterval[0]) {
      
    }

  }

}



//

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    // an “interval” is the inner array of 2 items
    const result = [intervals[0]]; // stores first interval

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = result[result.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Overlapping intervals, merge them
            lastMergedInterval[1] = currentInterval[1] > lastMergedInterval[1] ? currentInterval[1] : lastMergedInterval[1];
        } else {
            // Non-overlapping interval, add to the result
            result.push(currentInterval);
        }
    }

    return result;
}
