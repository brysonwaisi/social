import express from 'express'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import likeRoutes from './routes/likes.js'
import commentRoutes from './routes/comments.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// Middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true)
  next()
})
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
}))
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/comments', commentRoutes)

app.listen(8800, () => {
  console.log("API up and running!")
})