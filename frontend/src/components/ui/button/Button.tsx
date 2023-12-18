interface buttonProps {
  text: string;
  styling: string;
}
function Button({ text, styling }: buttonProps) {
  return (
    <>
      <button className={`${styling} drop-shadow-inset-black-sm`}>
        {text}
      </button>
    </>
  );
}

export default Button;
