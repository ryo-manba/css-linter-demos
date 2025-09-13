import React from 'react';

export default function App() {
  return (
    <div>
      {/* Error: classnames-order - Wrong class order */}
      <div className="p-4 bg-blue-500 text-white" />

      {/* Error: no-contradicting-classname - Conflicting classes */}
      <div className="w-32 w-64" />

      {/* Error: no-unnecessary-arbitrary-value - Unnecessary arbitrary value */}
      <div className="p-[1rem]" />

      {/* Error: no-custom-classname - Unknown custom class */}
      <div className="my-custom-class" />

      {/* Error: enforces-shorthand - Should use shorthand */}
      <div className="pt-4 pr-4 pb-4 pl-4" />

      {/* Error: enforces-negative-arbitrary-values - Wrong negative syntax */}
      <div className="-top-[5px]" />
    </div>
  );
}