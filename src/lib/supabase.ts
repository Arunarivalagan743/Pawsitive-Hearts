import { createClient } from '@supabase/supabase-js'

// Note: User needs to connect to Supabase and set up environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      dogs: {
        Row: {
          id: string
          name: string
          breed: string
          age: number
          gender: 'male' | 'female'
          size: 'small' | 'medium' | 'large'
          description: string
          image_url: string
          adoption_status: 'available' | 'pending' | 'adopted'
          medical_info: string
          personality: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          breed: string
          age: number
          gender: 'male' | 'female'
          size: 'small' | 'medium' | 'large'
          description: string
          image_url: string
          adoption_status?: 'available' | 'pending' | 'adopted'
          medical_info: string
          personality: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          breed?: string
          age?: number
          gender?: 'male' | 'female'
          size?: 'small' | 'medium' | 'large'
          description?: string
          image_url?: string
          adoption_status?: 'available' | 'pending' | 'adopted'
          medical_info?: string
          personality?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      adoption_applications: {
        Row: {
          id: string
          dog_id: string
          applicant_name: string
          applicant_email: string
          applicant_phone: string
          address: string
          living_situation: string
          experience: string
          motivation: string
          status: 'pending' | 'approved' | 'rejected'
          created_at: string
        }
        Insert: {
          id?: string
          dog_id: string
          applicant_name: string
          applicant_email: string
          applicant_phone: string
          address: string
          living_situation: string
          experience: string
          motivation: string
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
        }
        Update: {
          id?: string
          dog_id?: string
          applicant_name?: string
          applicant_email?: string
          applicant_phone?: string
          address?: string
          living_situation?: string
          experience?: string
          motivation?: string
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          date: string
          location: string
          image_url: string
          max_attendees: number
          current_attendees: number
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          date: string
          location: string
          image_url: string
          max_attendees: number
          current_attendees?: number
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          date?: string
          location?: string
          image_url?: string
          max_attendees?: number
          current_attendees?: number
          created_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          author: string
          image_url: string
          published: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          author: string
          image_url: string
          published?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          author?: string
          image_url?: string
          published?: boolean
          created_at?: string
        }
      }
    }
  }
}