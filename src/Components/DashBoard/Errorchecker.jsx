import React, { useState } from 'react';
import './Errorchecker.css';
import Footer from '../Home/Footer';
import Grid from '../../Grid';
import Defaultbars from './Defaultbars';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { FaUpload, FaTrashAlt } from 'react-icons/fa';

function Errorchecker() {
  const vid = {
    vid1: 'Gradient 2.mp4',
    error: "error.png",
  };

  const [images, setImages] = useState([]);
  const [goal, setGoal] = useState('');
  const [response] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length > 0 && goal) {
      try {
        const imageUrls = await Promise.all(images.map(async (image) => {
          const storageRef = ref(storage, `errors/${image.name}`);
          await uploadBytes(storageRef, image);
          return getDownloadURL(storageRef);
        }));

        await addDoc(collection(db, 'errorGoals'), {
          goal,
          imageUrls,
          timestamp: new Date(),
        });

        setImages([]);
        setGoal('');
        alert('Images uploaded successfully!');
      } catch (error) {
        console.error("Error uploading file or sending data", error);
      }
    } else {
      alert('Please upload images and enter your goal.');
    }
  };

  return (
    <div>
      <video id="background-video" src={vid.vid1} controls loop autoPlay muted></video>
      <Grid />
      <Defaultbars />
      <div className='current'>
        <div><img src={vid.error} alt="Errorchecker" /></div>
        <h2>FEA/CFD Analysis Error Solutions</h2>
      </div>
      <div className="errorcheck">
        <form onSubmit={handleSubmit} className="image-form">
          <div className="form-group">
            <label htmlFor="imageUpload">Upload Images of Your Analysis Errors:</label>
            <div className="custom-file-upload">
              <label htmlFor="imageUpload" id='hov'>
                <FaUpload size={30} />
              </label>
              <input
                type="file"
                id="imageUpload"
                onChange={handleImageChange}
                multiple
                style={{ display: 'none' }}
                required
              />
            </div>
          </div>
          <div className="uploaded-images">
            {images.map((image, index) => (
              <div key={index} className="image-preview">
                <img src={URL.createObjectURL(image)} alt={`preview-${index}`} />
                <button type="button" onClick={() => handleDeleteImage(index)} id='buts'>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="description">What Are You Trying To Achieve?</label>
            <textarea
              id="description"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder='Please describe your project, goals and objectives... MeanAs is here to help you solve the error very fast and accurately.'
              required
            />
          </div>
          <button type="submit" id='newbut'>
            Generate Clarity
          </button>
        </form>
      </div>
      <div className="response-container">
        <div className="response">{response}</div>
      </div>
      <button className='report'>
        Generate Report
      </button>
      <Footer />
    </div>
  );
}

export default Errorchecker;
