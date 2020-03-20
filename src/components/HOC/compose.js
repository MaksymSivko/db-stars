export const compose = (...funcs) => comp => {
  return funcs.reduceRight((prevResult, funk) => funk(prevResult), comp);
};
