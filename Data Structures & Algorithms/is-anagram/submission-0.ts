class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        const counts: Record<string, number> = {};

        for (const char of s) {
            counts[char] = (counts[char] ?? 0) + 1;
        }

        for (const char of t) {
            if (!counts[char]) return false;
            counts[char]--;
        }

        return true;
    }
}
