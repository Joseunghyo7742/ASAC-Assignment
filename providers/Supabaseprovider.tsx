"use client"

import {Database} from '@/types_db';
import {useState} from "react";

interface SupabaseProviderProps{
  children: React.ReactNode;
};
const SupabaseProviderProps: React.FC<SupabaseProviderProps>=({
  children
})=>{
  const [supabaseClient] = useState
}