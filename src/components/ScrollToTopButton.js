import React, { memo } from 'react';

const ScrollToTopButton = memo(({ onClickCallback }) => {
  console.log('created onClick aFresh');
  return (
    <button
      onClick={onClickCallback}
      className="bottom-4 right-4 fixed rounded-full hover:bg-slate-400 bg-slate-500 p-4"
    >
      <p className="leading-3 font-bold">↑</p>
    </button>
  );
});

export default ScrollToTopButton;
