import { keyboardData } from '../data/keyboard.data.js';
import { getElementById, getElementsByDataAttribute } from '../utilities.js';
export function renderKeyboard() {
  const keyBoardContainer = getElementById('keyBoardContainer');
  let keyboardStructure = '';
  keyboardData.forEach((row, index) => {
    keyboardStructure += `<div class="keysRow row${index}">`;
    row.forEach(ele => {
      keyboardStructure += `
            <button
              class="individualKeys"
              data-caps="${ele.caps}"
              data-small="${ele.small}"
              data-special="${ele.special}"
              data-active="${ele.small}"
              data-keyType="${ele.keyType}"
            >
              <span class="primary active">${ele.small}</span>
              <span class="secondary">${ele.special}</span>
            </button>
        `;
    });

    keyboardStructure += '</div>';
  });
  keyBoardContainer.innerHTML = keyboardStructure;
}

export const setAlphabetKeysView = smallOrCaps => {
  const alphabetsKeys = getElementsByDataAttribute('keytype', 'alphabet');
  switch (smallOrCaps) {
    case 'caps':
      alphabetsKeys.forEach(key => {
        key.dataset.active = key.dataset.caps;
        key.children[0].innerHTML = key.dataset.active;
      });
      break;

    case 'small':
      alphabetsKeys.forEach(key => {
        key.dataset.active = key.dataset.small;
        key.children[0].innerHTML = key.dataset.active;
      });
      break;

    default:
      break;
  }
};

export const setSpecialKeysView = specialOrNormal => {
  const specialKeys = getElementsByDataAttribute('keytype', 'special');
  switch (specialOrNormal) {
    case 'special':
      specialKeys.forEach(key => {
        key.dataset.active = key.dataset.special;
        key.children[0].classList.remove('active');
        key.children[1].classList.add('active');
      });
      break;

    case 'normal':
      specialKeys.forEach(key => {
        key.dataset.active = key.dataset.caps;
        key.children[0].classList.add('active');
        key.children[1].classList.remove('active');
      });
      break;

    default:
      break;
  }
};
