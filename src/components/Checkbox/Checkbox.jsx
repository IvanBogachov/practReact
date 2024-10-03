const Checkbox = ({ hasAccepted, handleChangeChecbox }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChangeChecbox}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};
export default Checkbox;
