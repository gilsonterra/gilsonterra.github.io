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
      style={{
        width: "18rem",
        padding: "0.85rem 1rem",
        fontSize: "var(--text-sm)",
        borderRadius: "16px",
        border: "1px solid var(--border)",
        background: "var(--background-elevated)",
        color: "var(--foreground)",
        boxShadow: "var(--shadow-sm)",
      }}
    />
  );
};

export default Input;
