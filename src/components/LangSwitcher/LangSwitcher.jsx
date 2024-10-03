import styles from "./LangSwitcher.module.css";
import { useId } from "react";

const LangSwitcher = ({ lang, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={lang}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
export default LangSwitcher;
