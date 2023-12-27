import express from 'express'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import likeRoutes from './routes/likes.js'
import commentRoutes from './routes/comments.js'
import relationshipRoutes from './routes/relationships.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true)
  next()
})
app.use(express.json())
app.use(cors({
  origin: process.env.BASE_URL,
}))
app.use(cookieParser())

// Multer 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename)
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/comments', commentRoutes)
app.use("/api/relationships", relationshipRoutes);

app.listen(8800, () => {
  console.log("API up and running!")
})