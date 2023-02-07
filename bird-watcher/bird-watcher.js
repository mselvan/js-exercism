// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    return birdsPerDay.reduce((previousNum, currentNum) => previousNum + currentNum, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    const weekStart = (week - 1) * 7;
    const weekEnd = weekStart + 7;
    return totalBirdCount(birdsPerDay.slice(weekStart, weekEnd));
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
    birdsPerDay.forEach((num, index, array) => {
      const newNum = index % 2 == 0 ? num + 1 : num;
      return array[index] = newNum;
    });
    return birdsPerDay;
}
