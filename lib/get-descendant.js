export default function getDescendant(el, target) {
  el = el.parentElement;
  while (el.tagName !== 'HTML') {
    if (el.parentElement === target) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
