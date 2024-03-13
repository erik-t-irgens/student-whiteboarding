// Given an unsorted list of elements, return the same list in the same order but with only unique elements.In other words, remove all duplicate elements in the list and return it in its original order.

// Constrains: 1 <= list.length <= 10 ^ 6

// Example:

// Input: [1, 2, 2, 10, 5, 1, 3]
// Output: [1, 2, 10, 5, 3]

function removeDupes(inputArray) {
    // let uniqueElments = [];
    // foreach loop though inputArray
    // if element does not exist in uniqueElements, push element to uniqueElements
    // return uniqeElements

    let uniqueElements = [];
    inputArray.forEach((element) => {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    })
    return uniqueElements;
}

function removeDupes2(inputArray) {
    let uniqueElements = [];
    let mySet = new Set();
    inputArray.forEach((element) => {
        if (!mySet.has(element)) {
            uniqueElements.push(element);
            mySet.add(element);
        }
    })
    return uniqueElements;
}


function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for (var i = 0; i < len; i++) {
        var item = a[i];
        if (seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}


function uniq(a) {
    var prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];

    return a.filter(function (item) {
        var type = typeof item;
        if (type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}


// let uniqueSet = [...new Set(inputArray)]