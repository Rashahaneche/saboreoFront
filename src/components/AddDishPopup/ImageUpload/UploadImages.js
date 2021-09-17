import axios from 'axios';
import { useState } from 'react';

function UploadImage() {
  const [imageUrl, setImageUrl] = useState()
  const onFileChange = async (event) => {
    const file = event.target.files[0]
    const fd = new FormData()
    fd.append('file', file)
    const response = await axios.post('http://localhost:3000/upload', fd)
    console.log(response)
    setImageUrl(`http://localhost:3000${response.data.url}`)
  }
  return (
    <div>
      <input type='file' onChange={onFileChange} />
      { imageUrl && <img src={imageUrl} />}
    </div>
  );
}

export default UploadImage;
