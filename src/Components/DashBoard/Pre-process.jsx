import React, { useState } from 'react';
import './Pre-process.css';
import Footer from '../Home/Footer';
import Grid from '../../Grid';
import Defaultbars from './Defaultbars';
import { storage, db } from '../../firebase'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { FaUpload, FaTrashAlt } from 'react-icons/fa';

function Preprocess() {
  const vid = {
    vid1: 'Gradient 2.mp4',
    pre: "pre-process.png",
  };

  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [option, setOption] = useState('');
  const [customOption, setCustomOption] = useState('');
  const [analysisType, setAnalysisType] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(''); // State to store ChatGPT response

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const fetchChatGPTResponse = async () => {
    // Simulate a call to ChatGPT API and set the response
    // Replace this with actual API call if needed
    const simulatedResponse = 'This is a simulated response from MeanAs.';
    setResponse(simulatedResponse);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (images.length > 0) {
      const imageUrls = await Promise.all(images.map(async (image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        return getDownloadURL(storageRef);
      }));

      await addDoc(collection(db, 'imageRequests'), {
        imageUrls,
        description,
        option: option === 'other' ? customOption : option,
        analysisType, 
      });

      setImages([]);
      setDescription('');
      setOption('');
      setCustomOption('');
      setAnalysisType('FEA');
      setLoading(false);

      alert('Images uploaded successfully!');
      fetchChatGPTResponse(); // Fetch the ChatGPT response after successful upload
    } else {
      setLoading(false);
      alert('Please select images to upload.');
    }
  };

  return (
    <div>
      <video id="background-video" src={vid.vid1} controls loop autoPlay muted></video>
      <Grid />
      <Defaultbars />
      <div className='current'>
        <div><img src={vid.pre} alt="Pre-process" /></div>
        <h2>Clarity & Accuracy For Pre-Processing</h2>
      </div>
      <div className="preprocess">
        <form onSubmit={handleSubmit} className="image-form">
          <div className="form-group">
            <label htmlFor="imageUpload">Upload 3D Images of Your Model:</label>
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
            <label htmlFor="description">What Are You Trying To Achieve?</label>
            <textarea
              type='text'
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Please describe your project, goals and objectives... MeanAs can assist you throughout your specific project.'
              required
            />
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
            <label htmlFor="option">Select A Preferred Analysis Software For Your Project:</label>
            <select id="option" value={option} onChange={(e) => setOption(e.target.value)} required>
              <option value="">Select an analysis software</option>
              <option value="ansys">Ansys</option>
              <option value="abaqus">Abaqus</option>
              <option value="comsol">Comsol</option>
              <option value="solidworks">Solidworks</option>
              <option value="openfoam">OpenFoam</option>
              <option value="fusion360">Fusion 360</option>
              <option value="other">Other</option>
            </select>
            {option === 'other' && (
              <input
                type='text'
                id="texti"
                value={customOption}
                onChange={(e) => setCustomOption(e.target.value)}
                placeholder='Type your custom option...'
                required
              />
            )}
          </div>
          <button type="submit" disabled={loading} id='newbut'>
            {loading ? 'Generating...' : 'Generate Clarity'}
          </button>
        </form>
      </div>
      {/* {response && ( */}
        <div className="response-container">
          <div className="response">{response}</div>
        </div>
      {/* )} */}
      <button className='report'>
            Generate Report
      </button>
      <Footer />
    </div>
  );
}

export default Preprocess;
