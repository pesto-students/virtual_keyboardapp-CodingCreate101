export const getElementById = x => document.getElementById(x);
export const getElementsByDataAttribute = (key, value) =>
  document.querySelectorAll(`[data-${key}='${value}']`);
