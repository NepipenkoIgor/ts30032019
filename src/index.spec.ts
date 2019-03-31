import { average } from './index';

describe('test some functions', () => {
    it('test average', () => {
        expect(average(1, 2, 3)).toEqual(`Average is 2`);
       // expect(average(1, 2, 3)).toEqual(`Average is 3`);
    });
});