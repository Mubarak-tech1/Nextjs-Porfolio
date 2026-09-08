export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
         bg-(--background)
      ">
      <div
        className="
          absolute
          left-1/2
          top-0
          h-150
          w-150
          -translate-x-1/2
          rounded-full
          bg-white/60
          blur-3xl
        "
      />
    </div>
  );
}
