export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cartitems: {
        Row: {
          created_at: string
          id: number
          product: number | null
          quantity: number | null
          totalPrice: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          product?: number | null
          quantity?: number | null
          totalPrice?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          product?: number | null
          quantity?: number | null
          totalPrice?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cartitems_product_fkey"
            columns: ["product"]
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      product: {
        Row: {
          created_at: string
          id: number
          imgURL: string
          name: string
          price: number
        }
        Insert: {
          created_at?: string
          id?: number
          imgURL?: string
          name?: string
          price: number
        }
        Update: {
          created_at?: string
          id?: number
          imgURL?: string
          name?: string
          price?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
