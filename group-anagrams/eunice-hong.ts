/**
 * Time complexity: O(n * k log k)
 * Space complexity: O(nk)
 */
function groupAnagrams(strs: string[]): string[][] {
    // Create a map to group words by their sorted character key
    let strMap = new Map<string, string[]>();

    // Iterate through each string in the input array
    for (let i = 0; i < strs.length; i++) {
        // Sort the string to generate a key; anagrams will have the same key
        const key = strs[i].split('').sort().join('');
        if (strMap.has(key)) {
            // If the key exists, append the current string to the group
            strMap.set(key, [...(strMap.get(key) ?? []), strs[i]]);
        } else {
            // If the key does not exist, create a new group with the current string
            strMap.set(key, [strs[i]]);
        }
    }
    // Return all grouped anagrams as an array of arrays
    return Array.from(strMap.values());
};
