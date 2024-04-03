/** 
 *  Given two strings s and t, determine if they are isomorphic.

    Two strings s and t are isomorphic if the characters in s can be replaced to get t.

    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

    

    Example 1:

    Input: s = "egg", t = "add"
    Output: true
    Example 2:

    Input: s = "foo", t = "bar"
    Output: false
    Example 3:

    Input: s = "paper", t = "title"
    Output: true
    

    Constraints:

    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.
*/
function isIsomorphic(s: string, t: string): boolean {
  let sDictionary = new Map<string, number>();
  let tDictionary = new Map<string, number>();

  for (let index = 0; index < s.length; index++) {
    const sChar = s[index];
    const tChar = t[index];

    if (!sDictionary.has(sChar)) {
      sDictionary.set(sChar, index);
    }
    else {
      sDictionary.set(sChar, sDictionary.get(sChar) as number);
    }
    if (!tDictionary.has(tChar)) {
      tDictionary.set(tChar, index);
    }
    else {
      tDictionary.set(tChar, tDictionary.get(tChar) as number);
    }

    if (sDictionary.get(sChar) !== tDictionary.get(tChar)) {
      return false;
    }

  }

  return true;
};

/**
 * Quickest Answer
 * function isIsomorphic(s: string, t: string): boolean {
    if (s.length!==t.length) return false;
    const map: Map<string,string> = new Map<string,string>(),
          alreadyMapped: Set<string> = new Set<string>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        } else {
            if (alreadyMapped.has(t[i])) return false;
            map.set(s[i],t[i]);
            alreadyMapped.add(t[i]);
        }
    }
    return true;
};
 */