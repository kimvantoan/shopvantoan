import cloudinary from "cloudinary";

const connectCloudinary = () => {
  try {
     cloudinary.v2.config({
          cloud_name: process.env.CLOUDINARY_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_SECRET_KEY,
      });
      console.log("connect cloudinary successfull");
      
  } catch (error) {
    console.log(error);
  }
};

export default connectCloudinary;
