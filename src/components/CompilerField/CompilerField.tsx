import "./CompilerField.css";

import { UseFormRegisterReturn } from "react-hook-form";

type CompilerFieldProps = {
  label: string;
  readOnly?: boolean;
  value?: string;
  register?: UseFormRegisterReturn;
  error?: any;
};

export default function CompilerField({
  label,
  readOnly,
  value,
  register,
  error,
}: CompilerFieldProps) {
  return (
    <label className="compiler-field">
      <span className="compiler-field__label">{label}</span>
      <textarea
        {...register}
        className="compiler-field__field"
        style={error && { color: "red" }}
        readOnly={readOnly}
        value={error ? error.message : value}
      ></textarea>
    </label>
  );
}
