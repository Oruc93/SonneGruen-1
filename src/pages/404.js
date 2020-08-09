import React from "react";

import Layout from "../components/layout";

function NotFoundPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center align-center justify-center text-fold">
        <h1 className="text-5xl">Not Found</h1>
        <p>You just hit a page that doesn't exist...</p>
      </div>
    </>
  );
}

export default NotFoundPage;
