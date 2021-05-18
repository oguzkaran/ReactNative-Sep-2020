let count = 0;
let previous = 0;

const incProc = () => ++count;
const decProc = () => --count;
const resetProc = () => {
  previous = count;
  count = 0;
};
const reloadProc = () => (count = previous);

export default function (state = count, action) {
  switch (action.type) {
    case 'inc':
      incProc();
      break;
    case 'dec':
      decProc();
      break;
    case 'reset':
      resetProc();
      break;
    case 'reload':
      reloadProc();
      break;
  }

  return count;
}
