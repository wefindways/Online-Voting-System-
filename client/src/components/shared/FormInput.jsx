export default function FormInput({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <div className="mb-5">
      <label htmlFor="id" className="block text-lg font-semibold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
 