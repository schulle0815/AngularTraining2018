export function IsFilterable(setFilter = true) {
  function IsFilterableSetup(target: object, property: string | symbol) {
    Object.defineProperty(target, `__isfilterable__${String(property)}__`, {
      value: setFilter,
      enumerable: false,
      configurable: false
    });
  }

  return IsFilterableSetup;
}
