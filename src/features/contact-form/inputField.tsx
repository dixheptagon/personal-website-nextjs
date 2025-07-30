// Reusable Input Component
export function InputField({
  label,
  id,
  type = "text",
  className = "",
  name = "",
  value,
  onChange,
  error,
  touched,
}: {
  label: string;
  id: string;
  type?: string;
  className?: string;
  name?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  touched?: boolean;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-900 dark:text-slate-100"
      >
        {label}
      </label>
      <input
        className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 dark:bg-slate-800 dark:text-slate-100 dark:outline-slate-700"
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && touched ? <div className="text-red-500">{error}</div> : null}
    </div>
  );
}
