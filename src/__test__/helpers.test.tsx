import { capitalizeFirstLetter } from '../helpers/helpers';

describe('Test the capitalizeFirstLetter helper function', () => {
  test('It should capitalize first letter of each word', () => {
    const testString = 'i love my wife';
    const resultString = 'I Love My Wife';
    const capitalizedString = capitalizeFirstLetter(testString);
    expect(capitalizedString).toEqual(resultString);
  });
});
