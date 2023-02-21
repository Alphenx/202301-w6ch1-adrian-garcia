import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
  reset,
} from './counterSlice';

describe('Given a counterSlice component', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle',
  };
  test('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  test('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  test('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });
  test('should reset value to 0', () => {
    const actual = counterReducer(initialState, reset());
    expect(actual.value).toEqual(0);
  });

  test('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});

// const asyncFunctions: jest.Mock = require('api/api').asyncFunctions;
// jest.mock('api/api', () => ({
//   asyncFunctions: jest.fn(),
// }));
// describe('Given a counterSlice component at async functions', () => {
//   test('When incrementAsync is called', () => {
//     beforeEach(() => {
//       asyncFunctions.mockResolvedValue([2]);
//     });
//   });
// });
