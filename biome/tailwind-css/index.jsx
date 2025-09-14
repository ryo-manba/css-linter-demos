import clsx from 'clsx';

export function Example() {
  return (
    <>
      {/* Regular className */}
      <div className="text-white px-4 bg-blue-500 py-2" />

      {/* Using clsx */}
      <div className={clsx("text-white px-4", "bg-blue-500 py-2")} />
    </>
  );
}