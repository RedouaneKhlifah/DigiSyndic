import { Input } from "@material-tailwind/react";

interface InputDfPops {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  validationErrors: { field: string; message: string }[];
}

function InputDf({
  label,
  name,
  onChange,
  value,
  validationErrors,
}: InputDfPops) {
  const error = validationErrors.find((error) => error.field === name);

  return (
    <div className="w-full  text-xs relative">
      <Input
        error={!!error}
        onChange={onChange}
        label={label}
        name={name}
        value={value}
        crossOrigin={undefined}
        size="md"
        className="min-w-[100px] text-sm"
      />
      {error && (
        <p className="absolute top-[-25px]  text-xs text-red-600">
          {label + " " + error.message}
        </p>
      )}
    </div>
  );
}

export default InputDf;
