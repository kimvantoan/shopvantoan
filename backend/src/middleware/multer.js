import multer from "multer";

const multerStorage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    }
})

const upload = multer({ storage: multerStorage });  

export default upload