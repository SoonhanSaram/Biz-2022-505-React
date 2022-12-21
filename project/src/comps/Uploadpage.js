import { useState } from "react";
import "../css/Upload.css";
const Uploadpage = () => {
  const [file, setFile] = useState({
    url: "",
    type: "video",
  });
  const saveFile = (e) => {
    const videoType = e.target.files[0].type.includes("video");
    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      video: videoType,
    });
    console.log(file);
  };

  return (
    <div>
      <form className="upload">
        <input
          className="uploadFile"
          type="file"
          accept="video/mp4, video/webm video/ogv"
          onChange={saveFile}
        />
        {file.video && (
          <video
            className="preview"
            src={file.url}
            autoPlay={true}
            controls
            width="300px"
            height="300px"
          />
        )}
        <button type="button">파일 업로드</button>
      </form>
    </div>
  );
};

export default Uploadpage;
