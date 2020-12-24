import { keyboardData } from '../data/keyboard.js';
import { getElementById } from '../utilities.js';
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
