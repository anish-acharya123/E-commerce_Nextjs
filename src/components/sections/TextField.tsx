import React, { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";

type TextFieldProps = ComponentProps<"input"> & {
  control: Control<any>;
  name: string;
  label?: string;
};

const TextField = ({ control, name, label, ...props }: TextFieldProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>label</label>
      <input
        id={name}
        {...props}
        {...control.register(name)}
        className={`border rounded-md p-2 ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors[name] && (
        <p className="text-red-500">{errors[name].message?.toString()}</p>
      )}
    </div>
  );
};

export default TextField;
