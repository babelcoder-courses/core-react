import { schema } from 'normalizr'

export const userSchema = new schema.Entity('users')

export const commentSchema = new schema.Entity('comments', {
  user: userSchema
})

export const articleSchema = new schema.Entity('articles', {
  comments: [commentSchema]
})

