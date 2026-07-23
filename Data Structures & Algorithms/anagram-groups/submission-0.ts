class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups: string[][] = [];

        for (let i = 0; i < strs.length; i++) {
            if (this.isGrouped(strs[i], groups)) {
                continue;
            }

            const group = [strs[i]];

            for (let j = strs.length - 1; j > i; j--) {
                if (this.isAnagram(strs[i], strs[j])) {
                    group.push(strs[j]);
                }
            }

            groups.push(group);
        }

        return groups;
    }

    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const map: Record<string, number> = {};

        for (const char of s) {
            map[char] = (map[char] ?? 0) + 1;
        }

        for (const char of t) {
            if (!map[char]) return false;
            map[char]--;
        }

        return true;
    }

    isGrouped(s: string, strs: string[][]) {
        return strs.flat().includes(s);
    }
}
