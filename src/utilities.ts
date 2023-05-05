export function validateHex(input: string) {
  const regex = /^#?(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/g;

  return input.match(regex) ? true : false;
}
