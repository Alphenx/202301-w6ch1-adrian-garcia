import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Counter } from './Counter';

describe('Given a Counter component', () => {
  test('When the component is rendered, it should show seven buttons', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const buttonsElements = screen.getAllByRole('button');
    expect(buttonsElements.length).toEqual(7);
  });

  test('When the decrement button is clicked, it should dispach a decrement function', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const decrement = jest.fn();
    const decrementButtonElement = screen.getByLabelText('Decrement value');
    fireEvent.click(decrementButtonElement, (onclick = decrement));
    expect(decrement).toBeCalled();
  });

  test('When the increment button is clicked, it should dispach a increment function', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const increment = jest.fn();
    const incrementButtonElement = screen.getByLabelText('Increment value');
    fireEvent.click(incrementButtonElement, (onclick = increment));
    expect(increment).toBeCalled();
  });

  test('When the reset button is clicked, it should dispach a reset function', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const reset = jest.fn();
    const resetButtonElement = screen.getByLabelText('Reset');
    fireEvent.click(resetButtonElement, (onclick = reset));
    expect(reset).toBeCalled();
  });

  test('When the incrementIfOdd button is clicked, it should dispach a incrementIfOdd function', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementIfOdd = jest.fn();
    const incrementIfOddButtonElement =
      screen.getByLabelText('Increment if Odd');
    fireEvent.click(incrementIfOddButtonElement, (onclick = incrementIfOdd));
    expect(incrementIfOdd).toBeCalled();
  });

  test('When the incrementAsync button is clicked, it should dispach a incrementAsync function', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementAsync = jest.fn();
    const incrementAsyncButtonElement =
      screen.getByLabelText('Increment async');
    fireEvent.click(incrementAsyncButtonElement, (onclick = incrementAsync));
    expect(incrementAsync).toBeCalled();
  });

  test('When the randomNum button is clicked, it should dispach a randomNum function', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const randomNum = jest.fn();
    const randomNumButtonElement = screen.getByLabelText('Random num');
    fireEvent.click(randomNumButtonElement, (onclick = randomNum));
    expect(randomNum).toBeCalled();
  });
});
