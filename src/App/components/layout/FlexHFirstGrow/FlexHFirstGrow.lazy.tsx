import React, { lazy, Suspense } from 'react';

const LazyFlexHFirstGrow = lazy(() => import('./FlexHFirstGrow'));

const FlexHFirstGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexHFirstGrow {...props} />
  </Suspense>
);

export default FlexHFirstGrow;
