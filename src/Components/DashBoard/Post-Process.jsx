import React, { useState } from 'react';
import "./Post-process.css"
import Footer from "../Home/Footer";
import Grid from "../../Grid";
import Defaultbars from "./Defaultbars";
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { FaUpload, FaTrashAlt } from 'react-icons/fa';


function Postprocess(){
    const vid ={
        vid1:"Gradient 2.mp4",
        post:"post-process.png",
    }

    const [images, setImages] = useState([]);
    const [goal, setGoal] = useState('');
    const [response, setResponse] = useState('');
    const [analysisType, setAnalysisType] = useState('');
  
    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...files]);
    };
  
    const handleDeleteImage = (index) => {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (images.length > 0 && goal && analysisType) {
        try {
          const imageUrls = await Promise.all(images.map(async (image) => {
            const storageRef = ref(storage, `errors/${image.name}`);
            await uploadBytes(storageRef, image);
            return getDownloadURL(storageRef);
          }));
  
          await addDoc(collection(db, 'errorGoals'), {
            goal,
            analysisType,
            imageUrls,
            timestamp: new Date(),
          });
  
          setImages([]);
          setGoal('');
          setAnalysisType('');
          alert('Images uploaded successfully!');
        } catch (error) {
          console.error("Error uploading file or sending data", error);
        }
      } else {
        alert('Please upload images, enter your goal, and select an analysis type.');
      }
    };
    return(
        <div>
            <video id="background-video"
                  src={vid.vid1} controls loop autoPlay muted>
           </video>
            <Grid/>
            <Defaultbars/>
            <div className='current'>
                <div><img src={vid.post} alt="Post-process" /></div>
                <h2>Clarity & Accuracy For Post-Processing</h2>
            </div>
            <div className="errorcheck">
        <form onSubmit={handleSubmit} className="image-form">
          <div className="form-group">
            <label htmlFor="imageUpload">Upload Images/Plots of Your Outcomes for Interpretation:</label>
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
                <button type="button" onClick={() => handleDeleteImage(index)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="analysisType">Select Analysis Type:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="FEA"
                  checked={analysisType === 'FEA'}
                  onChange={(e) => setAnalysisType(e.target.value)}
                />
                FEA
              </label>
              <label>
                <input
                  type="radio"
                  value="CFD"
                  checked={analysisType === 'CFD'}
                  onChange={(e) => setAnalysisType(e.target.value)}
                />
                CFD
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Provide the materials used for your FEA/CFD Analysis: </label>
            <textarea
              id="description"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder='Please provide all the materials used for your specific FEA/CFD analysis from pre-processing...'
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


export default Postprocess;