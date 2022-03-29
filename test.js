function stringLength(a) {
  stringLength = a.lenght;
  return stringLength;
}

/*
function stringLength(a) {
  return [...str].length;
}
*/

// reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// capitalize first character
function capitaliseStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
