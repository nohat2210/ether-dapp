import React from 'react';
import SVGIcon from './SVGIcon';

const Loading = () => {
  return (
    <div className="flex center2 h-screen">
      <span className="animate-spin">
        <SVGIcon icon="loading-page-icon" width={40} height={40} />
      </span>
    </div>
  );
};

export default Loading;
