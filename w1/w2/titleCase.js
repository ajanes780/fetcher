const titleCase = function (string) {
  if (string === ""){
  return "";
  }
  let lowerCaseWordsOnly = string.toLowerCase() ;
let words = lowerCaseWordsOnly.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i]= words[i][0].toUpperCase() + words[i].substr(1)  
}
return words.join(" ")

};



titleCase("this is an example") // should return "This Is An Example
titleCase("test") //should return "Test"
titleCase("i r cool")// should return "I R Cool"
titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
titleCase("")// should return ""