import React, { Suspense, lazy } from 'react';
import Loading from 'shared/components/Loading';

const loadable = (importFunc, { fallback } = { fallback: <Loading /> }) => {
  const LazyComponent = lazy(() => importFunc);
  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
