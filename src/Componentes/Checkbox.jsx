const Checkbox = (props) => {
  const { name = "example", label = "EXAMPLE", checked, setChecked } = props;

  return (
    <div className="flex ml-[20dvg] sm:ml-[40dvg]">
      <label className="inline-flex items-center cursor-pointer relative">
        <input
          name={name}
          type="checkbox"
          className="sr-only peer"
          onChange={() => setChecked(!checked)}
        />
        <div className="w-4 h-4 bg-stone-200 rounded-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        {checked && (
          <img
            src="/icon/check.svg"
            className="absolute w-5 h-5 bottom-0.5 left-0.5"
            alt="check"
          />
        )}
        <span className="ml-6 text-neutral-700 text-sm font-medium">
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
