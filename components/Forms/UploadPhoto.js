import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

export default function UploadPhoto({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Upload your picture</h2>

      <ul>
        <li>Make sure you are facing the camera</li>
        <li>All facial features must be visible</li>
      </ul>

      <form>
        <div className={styles.formRow}>
          <label htmlFor="address">Address</label>
          <input type="address" name="address" id="address" />
        </div>
        <button type="button" onClick={nextFormStep}>
          Next
        </button>
      </form>
    </div>
  );
}
