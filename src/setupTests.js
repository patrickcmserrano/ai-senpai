import '@testing-library/jest-dom/extend-expect';

const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0].includes('Warning:')) {
    return;
  }
  originalWarn(...args);
};
