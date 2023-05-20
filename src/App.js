import {useRef,useState,useEffect} from 'react';
import './App.css';
import  {uploadFile} from './services/api'

function App() {
  const [file,setFile] = useState('');
  const [result,setResult] = useState('');
  
  const fileInputRef = useRef();

   
  const logo = 'https://cutewallpaper.org/22/phone-technology-wallpapers/297164689.jpg'
   const onUploadClick =() =>
   {
     fileInputRef.current.click();
   }

   useEffect(()=>
   {
    const getImage = async() =>
    {
      if(file)
      {
        const data = new FormData();
        data.append('name',file.name);
        data.append('file',file);



       let response = await uploadFile(data);
       setResult(response.path);



      }

    }
    getImage();
   },[file])

  
  console.log(file)
  return (
      <div className = "container" >
         <img src= {logo} alt = "banner"></img>
        <div className="wrapper">
          <h1>File Sharing Application </h1>
          <p>Upload and Share the download link</p>
          <button  onClick={()=> onUploadClick()} >Upload</button>
            <input type="file"
            ref = {fileInputRef}
            style={{display:'none'}}
            onChange={(e)=>setFile(e.target.files[0])}
           
           /> 
           <a href={result} target="_blank">{result}</a>        </div>
      </div>
  );
}

export default App;
