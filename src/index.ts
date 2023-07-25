function firstNonRepeated(s: string) {
    for (let i = 0; i < s.length; i++) {
      let char = s.charAt(i);
      if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
        return char;
      }
    }
    return "";
  }

console.log(firstNonRepeated("hello, hi"));
console.log(firstNonRepeated("aabcc"));
console.log(firstNonRepeated("aabbcc"));