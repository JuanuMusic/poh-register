
import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import Image from 'next/image';
import StepCrPf from "../StepCrPf";

export default function CreateProfile({ formStep, nextFormStep, prevFormStep, currentStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();
    
  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };
  


  return (
    <List>
      <StepCrPf  />
      <Grid container spacing={1}
          variant="fullWidth"
          direction="row"
          justifyContent="center"
          alignItems="flex-start" style={{marginTop: '4px'}}>
            <Grid direction="row" item xs={12} md={12}>
              <ListItem style={{flexDirection: 'column'}}>
                <ListItemText disableTypography className={styles.titlecmpProf}>Create Profile</ListItemText>
              </ListItem>
            </Grid>
            <Grid className={formStep === 1 ? styles.showForm : styles.hideForm} item xs={12} md={12}>
               <form onSubmit={handleSubmit(onSubmit)}>
                 <a className={styles.dispName}>Display Name</a>
                <div className={styles.formRow}>
                  {/* <label htmlFor="displayName">Name in which you are known</label> */}
                  <input className={styles.pdispName} placeholder="Name in which you are known" type="text" {...register("displayName", { required: true })} />
                  {errors.displayName && <span>This field is required</span>}
                </div>
                <a className={styles.shortBio}>Short Bio</a>
                <div className={styles.formRowBio}>
                  {/* <label htmlFor="bio">short bio(ex: Cypherpunk, smart contract developer)</label> */}
                  <input className={styles.pshortBio} placeholder="short bio(ex: Cypherpunk, smart contract developer)" style={{height: "132px"}} type="text" {...register("bio")} />
                </div>
                <div>
                {/* {currentStep < 5 && (
                   <>
                      {currentStep > 0 && (
                        <Button
                            className={styles.back}
                            onClick={prevFormStep}
                            type="button"
                          >
                            Return
                          </Button>
                        )}
                    </>
                  )} */}
                  <Button  className={styles.btnSaCcmpProf} type="submit" >
                    <div className={styles.btnSave}>
                      <Image  src="/images/logopohforbutton.png" alt="me" width="13" height="15"/>
                    </div>
                    <a>Save & Continue</a>
                  </Button>
                  
                </div>
              </form>
            </Grid>
      </Grid>
    </List>
  );
}
