import styles from "../../styles/styles.module.scss";
import React, { useState } from "react";
import { useFormData } from "../../context";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import Image from 'next/image';
import StepUpPh from "../../components/StepUpPh";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDropzone } from "react-dropzone";

export default function UploadPhoto({ formStep, nextFormStep, prevFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  

  return (
    <List>
    <StepUpPh />
    
      <Grid container spacing={1}
            variant="fullWidth"
            direction="row"
            justifyContent="center"
            alignItems="flex-start" style={{marginTop: '4px'}}>
              
                <ListItem style={{flexDirection: 'column'}}>
                  <ListItemText disableTypography className={styles.titlecmpProf}>Upload Photo</ListItemText>
                </ListItem>
              
              <Grid container spacing={2} className={formStep === 2 ? styles.showForm : styles.hideForm} item xs={12} md={12}>
                <ul style={{position: "relative", left: "253px"}}>
                  <li style={{fontSize: "16px", color: "#979797", justifyContent: "center", position:"relative", display:"flex", top:"-20px", left: "41px"}}>Make sure you are facing the camera</li>
                  <Grid container spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        style={{position: "relative", left: "124px", marginBottom: "20px"}}>
                    <Grid direction="column"
                          justifyContent="center"
                          alignItems="center"
                          style={{display:"flex", left: "-86px", position: "relative"}}>
                      <Image src="/images/validjrag.png" alt="v" width="99" height="96"/>
                      <CheckCircleIcon style={{color: "#00C42B"}} />
                    </Grid>
                   
                    <Grid direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{display:"flex", left: "-70px", position: "relative"}}>
                      <Image src="/images/invalidsideprof.png" alt="i" width="99" height="96"/>
                      <CancelIcon style={{color: "#F60C36"}}/>
                    </Grid>
                  </Grid>
                    <li style={{fontSize: "16px", color: "#979797", position:"relative", left: "119px"}}>All facial features must be visible</li>
                    <Grid container spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        style={{position: "relative", display:"flex", marginTop:"15px"}}>
                          <Grid direction="column"
                                justifyContent="center"
                                alignItems="center"
                                style={{display:"flex", left: "0px", position: "relative"}}>
                                  <Image src="/images/validpinkcoat.png" alt="v" width="99" height="96"/> 
                                  <CheckCircleIcon style={{color: "#00C42B"}} />
                          </Grid>
                          <Grid direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{display:"flex", left: "15px", position: "relative"}}>
                      <Image src="/images/invalidcoveredblackcoat.png" alt="i" width="99" height="96"/>
                      <CancelIcon style={{color: "#F60C36"}}/>
                    </Grid>
                    <Grid direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{display:"flex", left: "30px", position: "relative"}}>
                      <Image src="/images/validfrontglassesnonreflect.png" alt="v" width="99" height="96"/>
                      <CheckCircleIcon style={{color: "#00C42B"}} />
                    </Grid>
                    <Grid direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{display:"flex", left: "45px", position: "relative"}}>
                      <Image src="/images/invalidglassesreflect.png" alt="i" width="99" height="96"/>
                      <CancelIcon style={{color: "#F60C36"}}/>
                    </Grid>
                  </Grid>
                </ul>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div {...getRootProps()}>
                  {/* <input type="file" {...register("photo")}/> */}
                   <input  {...getInputProps()}   />
                    
                    <p className={styles.dragndrop}>
                      <ListItemText>Browse your file </ListItemText>
                      <ListItemText>(Max Size: XMB | PNG or JPG) </ListItemText>
                      <ListItemText>Drag your file or click here. </ListItemText>
                    </p>
                     
                  </div>

                  {/* <div className={styles.formRow}>
                    <label htmlFor="photo">Your Photo</label>
                    <input type="file" {...register("photo")} />
                  </div> */}
                  
                  <Button  className={styles.btnSaCcmpProf} type="submit" >
                    <div className={styles.btnSave}>
                      <Image  src="/images/logopohforbutton.png" alt="me" width="13" height="15"/>
                    </div>
                    <a>Save & Continue</a>
                  </Button>
                </form>
                
              </Grid>  
        </Grid>
    </List>
  );
}
