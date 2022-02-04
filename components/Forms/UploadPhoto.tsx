import styles from "../../styles/styles.module.scss";
import React, { useState } from "react";
import { useFormData } from "../../context";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Image from 'next/image';
import StepUpPh from "../../components/StepUpPh";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import FormCTA from "./FormCTA";
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
      <div >
        <StepUpPh />
      </div>  
    
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
              <Grid container style={{flexDirection: 'column'}} spacing={2} className={formStep === 2 ? styles.showForm : styles.hideForm} item xs={12} md={12}>
                <ul>
                  <li style={{fontSize: "16px", color: "#979797", justifyContent: "center", position:"relative", display:"flex", top:"-20px", left: "41px"}}>Make sure you are facing the camera</li>
                  <Grid container spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                        style={{position: "relative", left: "117px", marginBottom: "20px"}}>
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
                    <li style={{fontSize: "16px", color: "#979797", position:"relative", display: "flex", justifyContent: "center"}}>All facial features must be visible</li>
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
                
                <form style={{display: "block", marginBottom: '1rem'}} onSubmit={handleSubmit(onSubmit)}>
                  <div {...getRootProps()}>
                  {/* <input type="file" {...register("photo")}/> */}
                   <input  {...getInputProps()}   />
                    
                    <p className={styles.dragndrop}>
                      <ListItemText disableTypography style={{display: "flex", justifyContent: "center", fontWeight:"600", fontFamily: "Open Sans, sans-serif", marginTop: "15px"}}>Browse your file </ListItemText>
                      <ListItemText disableTypography style={{display: "flex", justifyContent: "center", fontFamily: "Open Sans, sans-serif" }}>(Max Size: XMB | PNG or JPG) </ListItemText>
                      <ListItemText disableTypography style={{display: "flex", justifyContent: "center", fontFamily: "Open Sans, sans-serif" }}>Drag your file or click here. </ListItemText>
                    </p>
                     
                  </div>

                  {/* <div className={styles.formRow}>
                    <label htmlFor="photo">Your Photo</label>
                    <input type="file" {...register("photo")} />
                  </div> */}

              <FormCTA formStep={formStep} prevFormStep={prevFormStep} />
            </form>
          </Grid>  
        </Grid>
    </List>
  );
}
