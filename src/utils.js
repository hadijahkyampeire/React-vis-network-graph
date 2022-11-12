import { get, mapKeys, camelCase } from 'lodash';

// camelCase and or rename keys
export const schemafyKeys = (arr, type) => (arr || []).map(obj => ({
  ...mapKeys(obj, (_, key) => camelCase(key)),
  ...get({
    locations: { name: get(obj, 'country') },
    people: { role: get(obj, 'relationship'), dateOfBirth: get(obj, 'dob') },
  }, type, {}),
}));
