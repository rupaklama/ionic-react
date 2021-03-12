import { calculateBiorhythm } from './calculation';

// unit test to verify the calculation
it('calculates the biorhythm', () => {
  const result = calculateBiorhythm('1985-07-25', '2021-03-11');
  expect(result).toBeCloseTo(-0.9791);
});
