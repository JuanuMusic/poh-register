import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

export default function CreateProfile({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Complete your profile</h2>

      <form>
        <div className={styles.formRow}>
          <label htmlFor="displayname">Display Name*</label>
          <input type="text" name="displayname" id="displayname" />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="bio">Short Bio</label>
          <input type="text" name="bio" id="bio" />
        </div>
        <button type="button" onClick={nextFormStep}>
          Next
        </button>
      </form>
    </div>
  );
}
