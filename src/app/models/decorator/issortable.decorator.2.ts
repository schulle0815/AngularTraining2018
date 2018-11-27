export function IsSortable() {
  function IsSortableSetup(target: object, property: string|symbol) {
    Object.defineProperty(
        target, `__issortable__${String(property)}__`,
        {value: true, enumerable: false, configurable: false});
  }

  return IsSortableSetup;
}
