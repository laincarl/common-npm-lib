import React, { Suspense } from "react";
const RemoteButton = React.lazy(() => import("base/Button"));
// import RemoteButton from "base/Button";

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <Suspense fallback="Loading Button">
      <RemoteButton />
    </Suspense>
  </div>
);

export default App;
