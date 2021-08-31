import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

import { useForm } from "react-hook-form";

export default function UploadPhoto({ formStep, nextFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="photo">Your Photo</label>
          <input type="file" {...register("photo")} />
        </div>
        <button type="submit">
          Next
        </button>
      </form>
    </div>
  );
}
