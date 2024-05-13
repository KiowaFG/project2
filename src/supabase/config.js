import { SupabaseClient, createClient } from "@supabase/supabase-js";

const api_url= import.meta.env.VITE_SUPABASE_URL
const api_key= import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(api_url, api_key)

export default supabase
