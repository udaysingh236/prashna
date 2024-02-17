interface OptionProps {
  value: string;
  uiValue: string;
}

function Option({ value, uiValue }: OptionProps) {
  return <option value={value}>{uiValue}</option>;
}

export default Option;
