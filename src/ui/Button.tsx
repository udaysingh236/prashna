interface ButtonProps {
  type: string;
  isSubmit: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isActive?: boolean;
}

function Button({ type, children, isSubmit, onClick, disabled, isActive }: ButtonProps) {
  if (type === 'Primary') {
    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={`w-full cursor-pointer rounded-xl bg-chateau-green-900 px-2 py-1 text-center text-xl font-semibold text-black-100 shadow-md shadow-chateau-green-950 hover:bg-chateau-green-600`}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="flex items-center justify-center gap-2">{children}</div>
      </button>
    );
  }
  if (type === 'Secondary') {
    return (
      <button
        type="button"
        className="w-full rounded-xl bg-carrot-orange-900 px-2 py-1 text-center text-xl font-semibold text-persian-red-200 shadow-md shadow-chateau-green-950 hover:bg-carrot-orange-600"
        onClick={onClick}
        disabled={disabled}
      >
        <div className="flex items-center justify-center gap-2">{children}</div>
      </button>
    );
  }

  if (type === 'choice') {
    return (
      <button
        type="button"
        className={`w-full cursor-pointer gap-3 rounded-full   px-2  py-1 text-lg font-medium text-chateau-green-300 shadow-md shadow-black-950 hover:bg-black-950 active:bg-black-950 ${isActive ? `bg-black-950` : `bg-black-700`}`}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="flex items-center justify-start gap-2 p-1">{children}</div>
      </button>
    );
  }
}

export default Button;
