export const required = (val) => val && val.length;
export const maxLength = (len) => (val) => val.length <= len;
export const minLength = (len) => (val) => val.length >= len;
export const isNumber = (val) => !isNaN(Number(val));
export const isEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);