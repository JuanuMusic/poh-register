import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Image from 'next/image';
import FormCTA from "./FormCTA";
import StepPr from "../../components/StepPr";

export default function ReviewProfile({ formStep, nextFormStep, prevFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <List>
      <StepPr />
      <Grid container spacing={1}
            variant="fullWidth"
            direction="column"
            justifyContent="center"
            alignItems="flex-start" style={{marginTop: '4px'}}>
        <Grid direction="row" item xs={12} md={12} style={{margin: 'auto'}}>
          <ListItem style={{flexDirection: 'column'}}>
            <ListItemText disableTypography className={styles.titleProfRev}>Preview</ListItemText>
          </ListItem>
        </Grid>
        <p className={styles.reviewProfileDescription}>
          Make sure you meet all the requirements for your profile picture and video submission.
          Failing to do so can lead to challenges and you may lose your deposit.
        </p>

        <div className={styles.reviewSubmitOverview}>
          <div className={styles.editReviewSubmit}>
            <Image src="/images/edit.svg" alt="Edit" width="16" height="13.91" />
            <span>Edit</span>
          </div>
          <div className={styles.reviewSubmitProfile}>
            <Image src="/images/person-icon.svg" alt="Name" width="13.94" height="16" />
            <span className={styles.reviewSubmitName}>Vitalik Buterin</span>
            <span className={styles.reviewSubmitDesc}>Sofware Engineer, Solidity Expert, Blockchain, Crypto.</span>
          </div>
          <div className={styles.reviewSubmitAddress}>
            <Image src="/images/eth-icon.svg" alt="Address" width="10.69" height="18" />
            <span className={styles.reviewSubmitAddrVal}>0x3333333333333333333333333333333333333333</span>
          </div>
        </div>

        <div className={styles.reviewSubmitSection}>
          <h3>Your picture</h3>
          <ul className={styles.reviewSubmitList}>
            <li>Are you facing the camera?</li>
            <li>Is your face uncovered and fully visible?</li>
            <li>Are your facial features visible?</li>
          </ul>
          <div className={styles.uploadContent}>
            <Image src="/images/upload-outlined.svg" alt="Upload photo" width="16" height="16" />
            <span>Upload new photo</span>
          </div>
        </div>
        <div className={styles.reviewSubmitSection}>
          <h3>Your video</h3>
          <ul className={styles.reviewSubmitList}>
            <li>Is your Address the same you used to register?</li>
            <li>Is the Address the right direction and easily readable?</li>
            <li>Is the audio quality good enough to clearly hear you?</li>
            <li>Is your face visible as per the image requirements?</li>
          </ul>
          <div className={styles.uploadContent}>
            <Image src="/images/upload-outlined.svg" alt="Upload video" width="16" height="16" />
            <span>Upload new video</span>
          </div>
        </div>

        <form style={{margin: "auto"}} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formRow} style={{display: "none"}}>
            <label htmlFor="confirm">
              <input type="checkbox" {...register("confirm")} />
              I confirm that my picture and video submissions meet all the requirements.
            </label>
          </div>
          <FormCTA formStep={formStep} prevFormStep={prevFormStep} />
        </form>
      </Grid>
    </List>
  );
}
