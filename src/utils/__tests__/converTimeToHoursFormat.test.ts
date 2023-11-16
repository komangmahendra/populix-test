import {convertTimeToHoursFormat} from '../convertTimeToHoursFormat';

describe('Test convert function to convert minutes format to hours format', () => {
  test('Should return right hour format', () => {
    expect(convertTimeToHoursFormat(100)).toEqual({h: 1, m: 40});
    expect(convertTimeToHoursFormat(0)).toEqual({h: 0, m: 0});
    expect(convertTimeToHoursFormat(40)).toEqual({h: 0, m: 40});
    expect(convertTimeToHoursFormat(60)).toEqual({h: 1, m: 0});
  });
});
