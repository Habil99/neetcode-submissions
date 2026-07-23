class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>()

        for (const str of strs) {
            const key = str.split("").sort().join("")

            const group = groups.get(key) ?? []
            group.push(str)
            groups.set(key, group)
        }

        return [...groups.values()]
    }
}
