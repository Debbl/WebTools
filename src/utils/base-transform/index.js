// base64 编码
function base64Encode(base64Str) {
  return btoa(unescape(encodeURIComponent(base64Str)));
}
// base64 解码
function base64Decode(utf8Str) {
  try {
    return decodeURIComponent(escape(window.atob(utf8Str)));
  } catch (e) {
    return '格式错误！';
  }
}

export {
  base64Encode,
  base64Decode,
};
