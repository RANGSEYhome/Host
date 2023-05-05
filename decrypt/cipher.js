function htmlCipherEncrypt(str){ 
  let strAm = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 `-=~!@#$%^&*()_+[]\{}|;’:“”,./<>?";
  let strNz = "IFGHABCDEPQRSTYJKLMNOZUVWX ifghabcdepqrstyjklmnozuvwx 2468097531 `-=~!@#$%^&*()_+[]\{}|;’:“”,./<>?";
  let encrypt = '';
  let htmlTag = false;
  
  for (let i = 0; i < str.length; i++){
    if (str.charAt(i) === '<') {
      htmlTag = true;
    } else if (str.charAt(i) === '>') {
      htmlTag = false;
    }
    
    if (!htmlTag && strAm.includes(str.charAt(i))){
      encrypt += str.charAt(i).replace(str.charAt(i), strNz[strAm.indexOf(str.charAt(i))]);
    } else {
      encrypt += str.charAt(i);
    }
  }
  
  return encrypt;
}

function htmlCipherDecrypt(str){ 
  let strAm = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 `-=~!@#$%^&*()_+[]\{}|;’:“”,./<>?";
  let strNz = "IFGHABCDEPQRSTYJKLMNOZUVWX ifghabcdepqrstyjklmnozuvwx 2468097531 `-=~!@#$%^&*()_+[]\{}|;’:“”,./<>?";
  let decrypt = '';
  let htmlTag = false;
  
  for (let i = 0; i < str.length; i++){
    if (str.charAt(i) === '<') {
      htmlTag = true;
    } else if (str.charAt(i) === '>') {
      htmlTag = false;
    }
    
    if (!htmlTag && strNz.includes(str.charAt(i))){
      decrypt += str.charAt(i).replace(str.charAt(i), strAm[strNz.indexOf(str.charAt(i))]);
    } else {
      decrypt += str.charAt(i);
    }
  }
  
  return decrypt;
}
