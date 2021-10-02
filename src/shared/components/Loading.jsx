import React from 'react';
import SVGIcon from './SVGIcon';

const Loading = () => {
  return (
    <div className="flex center2 h-screen">
      <span className="loading-page-icon">
        <SVGIcon icon="loading-page-icon" width={25} height={25} />
      </span>
    </div>
  );
};

export default Loading;
