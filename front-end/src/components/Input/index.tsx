"use client";

import { useState, forwardRef, InputHTMLAttributes } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPassword ? "text" : type;

    return (
      <div>
        <label htmlFor={id}></label>
        <input ref={ref} type={inputType} id={id} {...rest} />
        {type === "password" && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
          </button>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
