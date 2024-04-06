import { FoodByTypePipe } from './food-by-type.pipe';

describe('FoodByTypePipe', () => {
  it('create an instance', () => {
    const pipe = new FoodByTypePipe();
    expect(pipe).toBeTruthy();
  });
});
