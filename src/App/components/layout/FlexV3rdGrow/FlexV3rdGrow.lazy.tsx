import React, { lazy, Suspense } from 'react';

const LazyFlexW3rdGrow = lazy(() => import('./FlexW3rdGrow'));

const FlexW3rdGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexW3rdGrow {...props} />
  </Suspense>
);

export default FlexW3rdGrow;
