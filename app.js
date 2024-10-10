import React, { Suspense } from 'react';
//import ObjectsMap from './components/ObjectsMap';

const ObjectsMap = React.lazy(() => import('./components/ObjectsMap'));
import './styles.css';

export default function App() {
  return (
    <main>

      <Suspense fallback={<div>Loading...</div>}>
        <ObjectsMap />
      </Suspense>
    </main>
  );
}
