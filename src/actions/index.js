import ADD_MESSAGE from '../constants/action-types';

export default function addMessage(payload) {
  return { type: ADD_MESSAGE, payload };
}
