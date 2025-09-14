import clsx from 'clsx';

export function Example() {
  return (
    <>
      {/* Regular className */}
      <div className="text-white px-4 bg-blue-500 py-2" />

      {/* Duplicate classes (will be removed) */}
      <div className="p-4 bg-blue-500 p-4 text-white p-4" />

      {/* Using clsx */}
      <div className={clsx("text-white px-4", "bg-blue-500 py-2")} />
    </>
  );
}
