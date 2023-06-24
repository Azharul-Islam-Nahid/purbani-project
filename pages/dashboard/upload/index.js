import React, { useState } from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import { useRouter } from "next/router";
import styles from "../../../styles/upload.module.css";
import upimg from "../../../public/assets/images/upload.png";
import Image from "next/image";
import { baseUrl, getHeaders } from "../../../api/api";

const Upload = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // initialize form fields
  });
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      pdfFile: file,
    }));

    // Generate preview URL
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    console.log("🚀 ~ file: index.js:29 ~ handleFileChange ~ file:", file)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("pdf", formData.pdfFile);
    // Append other form fields to the FormData object
    try {

      fetch(`http://localhost:5000/api/v1/common/upload-notice-pdf`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);

        })
    }

    catch (error) {
      // Handle error
    }
  };

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit} className={`${styles.uploadCon} w-3/4`}>
        <div>
          <h2>Upload File</h2>
        </div>
        <div className={`${styles.uploadContent}`}>
          <label htmlFor="file1">
            {/* <Image
              src={upimg}
              alt="img of the upload"
              width={100}
              height={100}
            /> */}
            {previewUrl && (
              <div className={`${styles.previewContainer}`}>
                <embed src={previewUrl} width="100%" height="500px" />
              </div>
            )}
          </label>
          <label htmlFor="file1">
            <h3>Browse File to Upload</h3>
          </label>
          <button>
            <label htmlFor="file1">Browse</label>
          </button>
          <input
            id="file1"
            type="file"
            name="pdfFile"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </DashboardLayout>
  );
};

Upload.auth = {
  adminOnly: true,
};
export default Upload;
