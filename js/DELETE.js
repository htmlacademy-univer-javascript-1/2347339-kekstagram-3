
const  createListener = (elem, event, cb) => {
  const changeListenerStatus = (change) => function() {
    elem.change(event, cb);
  };
  return {
    'add': changeListenerStatus(addEventListener),
    'remove': changeListenerStatus(removeEventListener)
  };
};

const elem = /** */
const submitListener = createListener(elem, 'click', console.log);
submitListener.add();
submitListener.remove();


