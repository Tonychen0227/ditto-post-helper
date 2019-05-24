export const copyToClipboard = ref => {
  ref.current.select();
  document.execCommand("copy");
  ref.current.blur();
};
