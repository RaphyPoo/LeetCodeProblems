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