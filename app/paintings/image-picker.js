'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {
  const [pickedImage, setImage] = useState();
  const imageInput = useRef();
  
  function handlePickImage() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file=event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

    return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}> 
          {!pickedImage && <p>No image picked</p>}
          {pickedImage && <Image src={pickedImage} fill/>}
        </div>
        <input 
            className={classes.input}
            type="file" 
            id="image" 
            accept="image/png, image/jpeg" 
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required //make an image required
        /> 
        <button 
          className={classes.button}
          type="button"
          onClick={handlePickImage}>
            Add an image
        </button>

      </div>
    </div>
    );
}