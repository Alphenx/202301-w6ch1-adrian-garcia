// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const getRandomNum = async () => {
  return await fetch(
    'https://www.randomnumberapi.com/api/v1.0/random?min=10&max=50&count=1'
  );
};
