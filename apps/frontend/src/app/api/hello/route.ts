const test = {
  valuation: null,
};

const test2 = {
  valuation: undefined,
};

const test3 = () => ({
  valuation: valuation || undefined,
});
const { valuation = {} } = test2;

console.log(valuation);
