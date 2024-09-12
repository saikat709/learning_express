import { Router } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '9';
    cb(null, uniqueSuffix+'.jpg')
  }
})

const upload = multer({storage})//dest:'../uploads/'});


const router = Router();

router.get('/', (req, res)=>{
    res.render('home');
});

router.post('/',
    upload.single('file_field_name'),
    (req, res) => {
        console.log(req.path);
        const filename = req.file.filename;
      res.render('success', {abc: filename});
});

export default router;