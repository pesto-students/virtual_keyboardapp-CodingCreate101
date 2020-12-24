import { state } from '../data/keyboard.js';
import { getElementById, getElementsByDataAttribute } from '../utilities.js';
import { updateTextField } from '../view/textarea.view.js';

getElementById('keyBoardContainer').addEventListener('mouseup', function (e) {
  const pressedButton = e.target.dataset.hasOwnProperty('active') ? e.target : e.target.parentNode;
  if (pressedButton.dataset.active) handleKeyPress(pressedButton.dataset.active);
});

export function handleKeyPress(letter) {
  switch (letter) {
    case 'Backspace':
      state.content = state.content.slice(0, -1);
      break;
    case 'Caps Lock':
      state.capsLock = !state.capsLock;
      break;
    case 'Shift':
      toggleShiftKey();
      break;
    case 'Tab':
      state.content += '\t';
      break;
    case 'Space':
      state.content += ' ';
      break;
    case 'Enter':
      state.content += '\n';
      break;
    default:
      if (state.shift) {
        turnOffShiftKey();
      }
      state.content += letter;
      break;
  }
  updateTextField();
}

const toggleShiftKey = () => (state.shift ? turnOffShiftKey() : turnOnShiftKey());

function turnOnShiftKey() {
  state.shift = true;

  const shiftKeys = getElementsByDataAttribute('active', 'Shift');
  const alphabetsKeys = getElementsByDataAttribute('keytype', 'alphabet');
  const specialKeys = getElementsByDataAttribute('keytype', 'special');

  shiftKeys.forEach(key => key.classList.add('highLight'));

  alphabetsKeys.forEach(key => {
    key.dataset.active = key.dataset.caps;
    key.children[0].innerHTML = key.dataset.active;
  });

  specialKeys.forEach(key => {
    key.dataset.active = key.dataset.special;
    key.children[0].classList.remove('active');
    key.children[1].classList.add('active');
  });
}

function turnOffShiftKey() {
  state.shift = false;

  const shiftKeys = getElementsByDataAttribute('active', 'Shift');
  const alphabetsKeys = getElementsByDataAttribute('keytype', 'alphabet');
  const specialKeys = getElementsByDataAttribute('keytype', 'special');

  shiftKeys.forEach(key => key.classList.remove('highLight'));

  alphabetsKeys.forEach(key => {
    key.dataset.active = key.dataset.small;
    key.children[0].innerHTML = key.dataset.active;
  });

  specialKeys.forEach(key => {
    key.dataset.active = key.dataset.caps;
    key.children[0].classList.add('active');
    key.children[1].classList.remove('active');
  });
}
