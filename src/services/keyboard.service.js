import { state } from '../data/keyboard.data.js';
import { getElementById, getElementsByDataAttribute } from '../utilities.js';
import {
  removeKeyboard,
  renderKeyboard,
  setAlphabetKeysView,
  setMobileKeysView,
  setSpecialKeysView,
} from '../view/keyboard.view.js';
import { updateTextField } from '../view/textarea.view.js';

getElementById('keyBoardContainer').addEventListener('mouseup', e => {
  const pressedButton = e.target.dataset.hasOwnProperty('active') ? e.target : e.target.parentNode;
  if (pressedButton.dataset.active) handleKeyPress(pressedButton.dataset.active);
});

getElementById('keyboard-on-off-button').addEventListener('change', e =>
  e.target.checked ? renderKeyboard() : removeKeyboard()
);

export function handleKeyPress(letter) {
  switch (letter) {
    case 'Backspace':
      state.content = state.content.slice(0, -1);
      break;
    case 'Caps Lock':
      toggleCapsLockKey();
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
    // Mobile functional key cases
    case '←': // Backspace
      state.content = state.content.slice(0, -1);
      break;
    case '⇑': // Shift and CapsLock key
      mobileToggleCapsLockKey();
      break;
    case '?12': // Special char key
      mobileToggleShiftKey();
      break;
    case '↵': // Enter key
      state.content += '\n';
      break;

    default:
      if (state.shift) {
        state.isMobile ? mobileTurnOffShiftKey() : turnOffShiftKey();
      }
      if (!state.mobileCapsLock && state.isMobile) {
        mobileTurnOffCapsLockKey();
      }

      state.content += letter;
      break;
  }
  updateTextField();
}

const toggleShiftKey = () => (state.shift ? turnOffShiftKey() : turnOnShiftKey());
const toggleCapsLockKey = () => (state.capsLock ? turnOffCapsLockKey() : turnOnCapsLockKey());

function turnOffCapsLockKey() {
  state.capsLock = false;
  getElementsByDataAttribute('active', 'Caps Lock').forEach(key =>
    key.classList.remove('highLight')
  );
  setAlphabetKeysView('small');
}

function turnOnCapsLockKey() {
  state.capsLock = true;
  getElementsByDataAttribute('active', 'Caps Lock').forEach(key => key.classList.add('highLight'));
  setAlphabetKeysView('caps');
}
function turnOnShiftKey() {
  state.shift = true;
  getElementsByDataAttribute('active', 'Shift').forEach(key => key.classList.add('highLight'));
  setAlphabetKeysView('caps');
  setSpecialKeysView('special');
}

function turnOffShiftKey() {
  state.shift = false;
  getElementsByDataAttribute('active', 'Shift').forEach(key => key.classList.remove('highLight'));
  if (!state.capsLock) setAlphabetKeysView('small');
  setSpecialKeysView('normal');
}

// Mobile
const mobileToggleShiftKey = () => (state.shift ? mobileTurnOffShiftKey() : mobileTurnOnShiftKey());
const mobileToggleCapsLockKey = () =>
  state.capsLock ? mobileTurnOffCapsLockKey() : mobileTurnOnCapsLockKey();

const mobileTurnOffShiftKey = () => {
  state.shift = false;
  getElementsByDataAttribute('active', '?12').forEach(key => key.classList.remove('highLight'));
  setMobileKeysView('normal');
};
const mobileTurnOnShiftKey = () => {
  state.shift = true;
  getElementsByDataAttribute('active', '?12').forEach(key => key.classList.add('highLight'));
  setMobileKeysView('special');
};

const mobileTurnOffCapsLockKey = () => {
  state.capsLock = false;
  getElementsByDataAttribute('active', '⇑').forEach(key => key.classList.remove('highLight'));
  setMobileKeysView('small');
};
export const mobileTurnOnCapsLockKey = () => {
  state.capsLock = true;
  getElementsByDataAttribute('active', '⇑').forEach(key => key.classList.add('highLight'));
  setMobileKeysView('caps');
};
