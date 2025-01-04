type InputProps = {
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  id: string;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  id,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-72 p-3 text-sm border rounded-lg shadow-sm 
               border-gray-300 focus:outline-none focus:ring-2 
               focus:ring-purple-500 focus:purple-blue-500 
               bg-white text-gray-700"
    />
  );
};

export default Input;
