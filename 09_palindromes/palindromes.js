const palindromes = function (input) {
  let str = input.replaceAll(/\W/g, "");
  str = str.toLowerCase();
  let len = Math.round((str.length - 1) / 2) - 1;
  let valid = true;
  for (let i = 0; i <= len; i++)
    if(str[i] !== str[str.length - 1 - i]) 
      valid = false;
  return valid;
};

// Do not edit below this line
module.exports = palindromes;
