export interface User {
  login: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  location?: string
  blog?: string
  twitter_username?: string
  company?: string
  created_at: string
  avatar_url: string
}