import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

import { useForm } from "react-hook-form";

export default function SubmitProfile({ formStep, nextFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 4 ? styles.showForm : styles.hideForm}>
      <h2>Submit Profile</h2>

      <form onClick={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <p>
            Are you ready to submit? Pay here.
          </p>
        </div>
        <button type="button">
          Submit Profile
        </button>
      </form>
    </div>
  );
}
