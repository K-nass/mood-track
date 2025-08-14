import React from "react";
// import style from './FormInput.module.css'

export default function FormInput({
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
}) {
  return (
    <input
      className="my-4 h-12 rounded-[10px] border-[1px] border-blue-900 p-3 outline-0 focus:border-3 focus:border-blue-500"
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
}
