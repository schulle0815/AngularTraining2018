export function Display(displayName: string) {
  function displaySetup(target: object, property: string | symbol) {
    Object.defineProperty(target, `__display__${String(property)}__`, {
      value: displayName || "",
      enumerable: false,
      configurable: false
    });
    Object.defineProperty(target, `__hasdisplay__${String(property)}__`, {
      value: true,
      enumerable: false,
      configurable: false
    });
  }

  return displaySetup;
}
