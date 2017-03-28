/*!
 * Copyright 2017, nju33
 * Released under the MIT License
 * https://github.com/nju33/get-descendant
 */
var getDescendant = (function () {
'use strict';

function getDescendant(el, target) {
  el = el.parentElement;
  while (el.tagName !== 'HTML') {
    if (el.parentElement === target) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

return getDescendant;

}());
