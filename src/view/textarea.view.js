import { state } from '../data/keyboard.js';
import { getElementById } from '../utilities.js';

export const updateTextField = () => (getElementById('mainTextArea').value = state.content);
