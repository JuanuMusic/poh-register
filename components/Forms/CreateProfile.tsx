import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

import { useForm } from "react-hook-form";

export default function CreateProfile({ formStep, nextFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Complete your profile</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="displayName">Display Name*</label>
          <input type="text" {...register("displayName", { required: true })} />
          {errors.displayName && <span>This field is required</span>}
        </div>

        <div className={styles.formRow}>
          <label htmlFor="bio">Short Bio</label>
          <input type="text" {...register("bio")} />
        </div>

        <button type="submit">
          Next
        </button>
      </form>
    </div>
  );
}
