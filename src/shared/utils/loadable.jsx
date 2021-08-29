import React, { Supense, lazy } from 'react';
import Loading from 'shared/components/Loading';

const loadable = importFunc => {
  const LazyComponent = lazy(() => importFunc);
  return (
    <Supense fallback={<Loading />}>
      <LazyComponent />
    </Supense>
  );
};

export default loadable;
