import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

import { useForm } from "react-hook-form";

export default function ReviewProfile({ formStep, nextFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 3 ? styles.showForm : styles.hideForm}>
      <h2>Review your profile</h2>
      <p>Make sure you meet all the requirements for your profile picture and video submission.
        Failing to do so can lead to challenges and you may lose your deposit.
      </p>

      <h3>Your picture</h3>
      <ul>
        <li>Are you facing the camera?</li>
        <li>Is your face uncovered and fully visible?</li>
        <li>Are your facial features visible?</li>
      </ul>

      <h3>Your video</h3>
      <ul>
        <li>Is your Address the same you used to register?</li>
        <li>Is the Address the right direction and easily readable?</li>
        <li>Is the audio quality good enough to clearly hear you?</li>
        <li>Is your face visible as per the image requirements?</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="confirm">
            <input type="checkbox" {...register("confirm")} />
            I confirm that my picture and video submissions meet all the requirements.
          </label>
        </div>

        <button type="submit">
          Next
        </button>
      </form>
    </div>
  );
}
