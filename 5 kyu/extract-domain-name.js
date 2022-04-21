'use strict';

function domainName(url) {
  let number = 0,
    result = '';

  if (url[0] === 'h') {
    number = url.indexOf('/') + 2;
  } else if (url[0] === 'w') {
    number = url.indexOf('.') + 1;
  }

  result = url.substr(number);

  result.slice(0, 4) === 'www.' && (result = result.substr(4));

  number = result.indexOf('.');

  return result.substring(0, number);
}


console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("www.xakep.www.ru"), "xakep");
console.log(domainName("http://www.rho9rh48ahtr2eycwm.tv/index.php"), "rho9rh48ahtr2eycwm");

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"
