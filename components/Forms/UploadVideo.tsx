import React, { useEffect, useState } from "react";
import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";
import { useForm } from "react-hook-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import StepUpVd from "../../components/StepUpVd";
import "../../node_modules/video-react/dist/video-react.css";
import FormCTA from "./FormCTA";
import { useDropzone } from "react-dropzone";



export default function UploadVideo({ formStep, nextFormStep, prevFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "video/*",
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
        <StepUpVd />
      </div>
    
      <Grid container spacing={1}
            variant="fullWidth"
            direction="row"
            justifyContent="center"
            alignItems="flex-start" style={{marginTop: '4px'}}>
              <Grid direction="row" item xs={12} md={12}>
                <ListItem style={{flexDirection: 'column'}}>
                  <ListItemText disableTypography className={styles.titleProfVideo}>Upload Video</ListItemText>
                </ListItem>
              </Grid>
              <Grid container spacing={2} className={formStep === 3 ? styles.showForm : styles.hideForm} item xs={12} md={12}
                        direction="column"
                        justifyContent="center"
                        alignItems="center" 
                        style={{flex: "inherit",display: "flex", width: "auto",alignItems: "flex-start", flexDirection: 'column'}}>
                          <ListItemText disableTypography style={{display: "flex", justifyContent: "center", fontWeight:"600", fontFamily: "Open Sans, sans-serif", marginBottom: "15px"}}> Instructions to record the video: </ListItemText>
                          <ul>
                            <li>• The sign should display in a readble manner the full Ethereum address of the submitted (No ENS; no ellipsis)</li>
                            <li>• The sign can be a screen. The submitted must show the sign in the right orientation to be read on the video</li>
                            <li>• The submitter must say (in English), "I certify that I am a real human and that I am not already registered in this registry".</li>
                            <li>• Speak in your normal voice</li>
                            <li>• Make sure you're facing the camera</li>
                            <li>• Make sure you're facial features are visible</li>
                          </ul>
                          <ListItemText  style={{color: "#FF9900", marginBottom: "20px", marginTop: "-5px"}}> Check example 1, and exmple 2 </ListItemText> 


                          <h3>Video Requirements</h3>
                          <ul style={{color: "#979797"}}>
                            <li>• Less than 2 minutes long</li>
                            <li>• Video/webm, video/mp4, video/avi or video/mov format</li>
                            <li>• Vertical (portrait), horizontal (landscape), or square</li>
                          </ul>

                          <h3>Minimum size Requirements</h3>
                          <ul style={{color: "#979797"}}>
                            <li>• Minimum height: equal to or higher than 352 pixels</li>
                            <li>• Minimum width: equal to or higher than 352 pixels</li>
                          </ul>
              
                <form style={{display: "flex", flexDirection: "column", margin: "auto"}} onSubmit={handleSubmit(onSubmit)}>
                  <div {...getRootProps()}>
                  {/* <input type="file" {...register("photo")}/> */}
                   <input  {...getInputProps()}   />
                    
                    <p className={styles.dragndrop}>
                      <ListItemText disableTypography style={{display: "flex", justifyContent: "center", fontWeight:"600", fontFamily: "Open Sans, sans-serif", marginTop: "15px"}}>Browse your file </ListItemText>
                      <ListItemText disableTypography style={{display: "flex", justifyContent: "center", fontFamily: "Open Sans, sans-serif" }}>(Max Size: XMB | video/webm, video/MP4, video/avi or video/mov format) </ListItemText>
                      <ListItemText disableTypography style={{display: "flex", justifyContent: "center", fontFamily: "Open Sans, sans-serif" }}>Drag your file or click here. </ListItemText>
                    </p>
                     
                  </div>

                  {/* <div className={styles.formRow}>
                    <label htmlFor="photo">Your Photo</label>
                    <input type="file" {...register("photo")} />
                  </div> */}

                  <FormCTA formStep={formStep} prevFormStep={prevFormStep} />
                </form>  
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formRow}>
                    <label htmlFor="video">Address</label>
                    <input type="file"  {...register("video")}/>
                  </div>
                  <button type="submit">
                    Next
                  </button>
                  {/* a_ guardarlo en una variable b_  */}
                  
                {/* </form> */}
                </Grid>
      </Grid>
    </List>
  );
}
