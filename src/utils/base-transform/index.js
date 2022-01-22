import base32En from 'base32-encode';
import base32De from 'base32-decode';

// base64 编码
function base64Encode(base64Str) {
  return btoa(unescape(encodeURIComponent(base64Str)));
}
// base64 解码
function base64Decode(str) {
  try {
    return decodeURIComponent(escape(window.atob(str)));
  } catch (e) {
    return '格式错误！';
  }
}  6

// base32 编码
function base32Encode(base32Str) {
  function stringToUint8Array(str) {
    var arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
      arr.push(str.charCodeAt(i));
    }
    var tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array;
  }
  return base32En(stringToUint8Array(base32Str), 'RFC4648');
}

// base32 解码
function base32Decode(str) {
  return String.fromCharCode.apply(null, new Uint8Array(base32De(str, 'RFC4648')));
}

export {base64Encode, base64Decode, base32Encode, base32Decode};
