import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

import { useForm } from "react-hook-form";

export default function UploadVideo({ formStep, nextFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>Upload your video</h2>

      <ul>
        <li>The sign should display in a readble manner the full Ethereum address of the submitted (No ENS; no ellipsis)</li>
        <li>The sign can be a screen. The submitted must show the sign in the right orientation to be read on the video</li>
        <li>The submitter must say (in English), "I certify that I am a real human and that I am not already registered in this registry".</li>
        <li>Speak in your normal voice</li>
        <li>Make sure you're facing the camera</li>
        <li>Make sure you're facial features are visible</li>
      </ul>

      <h3>Video Requirements</h3>
      <ul>
        <li>Less than 2 minutes long</li>
        <li>video/webm, video/mp4, video/avi or video/mov format</li>
        <li>Vertical (portrait), horizontal (landscape), or square</li>
      </ul>

      <h3>Minimum size Requirements</h3>
      <ul>
        <li>Minimum height: equal to or higher than 352 pixels</li>
        <li>Minimum width: equal to or higher than 352 pixels</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="video">Address</label>
          <input type="file" {...register("video")} />
        </div>
        <button type="submit">
          Next
        </button>
      </form>
    </div>
  );
}