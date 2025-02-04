function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // If lengths don't match, they can't be anagrams
    }

    // Sort both strings and compare
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("hello", "world"));    // Output: false
