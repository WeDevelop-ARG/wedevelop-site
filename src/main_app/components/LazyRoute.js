import { Suspense } from 'react';
import { Route } from 'react-router-dom';

export function LazyRoute({ children, ...props }) {
  return (
    <Route {...props}>
      <Suspense fallback={() => null}>
        {children}
      </Suspense>
    </Route>
  );
}
