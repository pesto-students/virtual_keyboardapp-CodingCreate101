import { state } from '../data/keyboard.data.js';
import { getElementById } from '../utilities.js';

export const updateTextField = () => (getElementById('mainTextArea').value = state.content);
