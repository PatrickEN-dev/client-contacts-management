import { useState } from "react";
import { RegisterOptions } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  error?: string;
}

export default function Input({ id, type, error, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  return (
    <div>
      <label htmlFor={id}></label>
      <input type={inputType} id={id} {...rest} />
      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
        </button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
