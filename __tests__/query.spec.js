jest.mock('../search');

import * as query from '../helpers/queries';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return query.searchSchoolInDB('Mohawk College').then(data => expect(data).toContain('John Doe'));
});