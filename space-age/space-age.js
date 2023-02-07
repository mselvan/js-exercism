//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_ORBITAL_PERIOD = 31557600;
const PLANET_ORBITAL_PERIODS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};
export const age = (planet, ageInSeconds) => {
    const ageInEarthYears = ageInSeconds / EARTH_ORBITAL_PERIOD;
    return parseFloat((ageInEarthYears / PLANET_ORBITAL_PERIODS[planet]).toFixed(2));
};
