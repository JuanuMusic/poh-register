import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import Image from 'next/image';
import StepUpPh from "../../components/StepUpPh";

export default function UploadPhoto({ formStep, nextFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <List>
    <StepUpPh />
    
      <Grid container spacing={1}
            variant="fullWidth"
            direction="row"
            justifyContent="center"
            alignItems="flex-start" style={{marginTop: '4px'}}>
              <Grid direction="row" item xs={12} md={12}>
                <ListItem style={{flexDirection: 'column'}}>
                  <ListItemText disableTypography className={styles.titlecmpProf}>Upload Photo</ListItemText>
                </ListItem>
              </Grid>

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
        </Grid>
    </List>
  );
}
