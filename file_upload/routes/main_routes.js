import { Router } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({dest:'../uploads/'});

const router = Router();

router.get('/', (req, res)=>{
    res.render('home');
});

router.post('/',
    upload.single('file_field_name'),
    (req, res) => {
        console.log(req.path);
        const filename = JSON.stringify(req.file);
    res.send(`POST request to the homepage #####${filename}`);
});

export default router;