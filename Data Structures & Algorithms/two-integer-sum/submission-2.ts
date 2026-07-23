class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];

            if (map[compliment] !== undefined) {
                return [map[compliment], i];
            }

            map[nums[i]] = i;
        }

        return [];
    }
}
