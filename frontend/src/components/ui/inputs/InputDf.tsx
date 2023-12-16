import { Input } from "@material-tailwind/react";

interface InputDfPops {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function InputDf({ label, name, onChange, value }: InputDfPops) {
  return (
    <div className="w-full  text-xs  ">
      <Input
        onChange={onChange}
        label={label}
        name={name}
        value={value}
        crossOrigin={undefined}
        size="md"
        className="min-w-[100px] text-sm"
      />
    </div>
  );
}

export default InputDf;
