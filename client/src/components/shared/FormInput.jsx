export default function FormInput({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  extraInfo,
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id || name}
        className="block text-lg font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {extraInfo && <p className="text-sm text-gray-500 mt-1">{extraInfo}</p>}
    </div>
  );
}
