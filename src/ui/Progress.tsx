interface IProgressProps {
  max: number;
  val: number;
  children: React.ReactNode;
}

function Progress({ max, val, children }: IProgressProps) {
  return (
    <div className=" flex items-center justify-between gap-2">
      <label className="text-lg text-carrot-orange-100" htmlFor="progress">{`${val}/${max}`}</label>
      <progress
        id="progress"
        className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  "
        max={max}
        value={val}
      >
        {children}
      </progress>
    </div>
  );
}

export default Progress;
