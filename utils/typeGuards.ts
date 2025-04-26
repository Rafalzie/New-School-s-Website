"use server";
export type TypeDefinitions<T> = {
  [key in keyof T]: unknown;
};

export async function isObjectOfExpectedType<T extends Record<string, unknown>>(
  arg: T,
  typeDefinitions: TypeDefinitions<T>
): Promise<boolean> {
  const keys = Object.keys(arg) as Array<keyof T>;

  return keys.every((key) => {
    const expectedType = typeDefinitions[key];
    const actualType = typeof arg[key];
    return actualType === expectedType;
  });
}

/**
 * Checks if an object only contains keys that are present in a given enum.
 *
 * @param {T} obj - The object to check.
 * @param {K} enumKeys - The enum to check against.
 * @returns {boolean} - Returns true if all keys in the object are present in the enum, otherwise false.
 * @example
 * const obj = { key1: "Alice", key2: 30 };
 * enum MyEnum { key1 = "value1", key2 = "value2" }
 * isValidEnumSubset(obj, MyEnum); // Returns true
 */
export async function objOnlyHasEnumKeys<
  T extends Record<string, unknown>,
  K extends Record<string, string | number>
>(obj: T, enumKeys: K): Promise<boolean> {
  const objKeys = Object.keys(obj) as Array<keyof T>;
  const enumKeysArray = Object.keys(enumKeys) as Array<keyof K>;
  const valid = objKeys.every((key) => {
    const included = enumKeysArray.includes(key as keyof K);
    if (!included) {
      console.warn(`Key ${String(key)} is not in the enum`);
      return false;
    }
    return true;
  });
  return objKeys.every((key) => enumKeysArray.includes(key as keyof K));
}
