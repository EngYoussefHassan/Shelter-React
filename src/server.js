import express from "express";
import multer from "multer";
import { storage } from "./firebase.js"; // Import the storage instance
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Endpoint for uploading files
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file; // The file to upload
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  // Create a storage reference
  const storageRef = ref(storage, `images/${file.originalname}`);
  const metadata = { contentType: file.mimetype };

  // Upload the file
  const uploadTask = uploadBytesResumable(storageRef, file.buffer, metadata);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      // Optional: Track upload progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    },
    (error) => {
      console.error("Upload failed:", error);
      res.status(500).send("Upload failed.");
    },
    () => {
      // Get the download URL on success
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at:", downloadURL);
        res.send({ imageUrl: downloadURL });
      });
    }
  );
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
