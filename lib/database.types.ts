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
      cars: {
        Row: {
          car_name: string | null
          created_at: string
          Drive: string | null
          EngineSize: string | null
          FuelType: string | null
          id: string
          ImageUrls: string | null
          Transmission: string | null
          type: string | null
          user_id: string
        }
        Insert: {
          car_name?: string | null
          created_at?: string
          Drive?: string | null
          EngineSize?: string | null
          FuelType?: string | null
          id?: string
          ImageUrls?: string | null
          Transmission?: string | null
          type?: string | null
          user_id: string
        }
        Update: {
          car_name?: string | null
          created_at?: string
          Drive?: string | null
          EngineSize?: string | null
          FuelType?: string | null
          id?: string
          ImageUrls?: string | null
          Transmission?: string | null
          type?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cars_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
