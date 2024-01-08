// bubble sort - named export
export function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// selection sort - named export
export function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Iterate through the unsorted part of the array to find the minimum element
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element in the unsorted part
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

// insertion Sort - default export
export default function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        // Store the current element to be compared
        const currentElement = arr[i];

        // Start at the previous index
        let j = i - 1;

        // Move elements greater than the current element to the right
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = currentElement;
    }

    return arr;
}

