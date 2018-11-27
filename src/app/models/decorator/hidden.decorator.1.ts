export function Hidden() {
  function hiddenSetup(target: object, property: string|symbol) {
    Object.defineProperty(
        target, `__hidden__${String(property)}__`,
        {value: true, enumerable: false, configurable: false});
  }

  return hiddenSetup;
}
