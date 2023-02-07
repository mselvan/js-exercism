// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const TIME_FOR_JUICES = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
}

const WEDGE_COUNT = {
    'small': 6,
    'medium': 8,
    'large': 10
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    return TIME_FOR_JUICES[name] ? TIME_FOR_JUICES[name] : 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let wedges = 0;
    for (let i = 0; i < limes.length; i++) {
        if(wedges >= wedgesNeeded) {
            return i;
        }
        wedges += WEDGE_COUNT[limes[i]];
    }
    return limes.length;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    for (let i = 0; i < orders.length; i++) {
        if(timeLeft <= 0) {
            return orders.splice(i);
        }
        timeLeft -= timeToMixJuice(orders[i]);
    }
    return [];
}
