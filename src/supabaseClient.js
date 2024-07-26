///Users/samsimmons/Desktop/website stuff/react/vite-test copy/src/supabaseClient.js
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = "https://qlnixgxdfazozghesomi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsbml4Z3hkZmF6b3pnaGVzb21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NzE1NzAsImV4cCI6MjAzNzU0NzU3MH0.-g9I9lMZQqz3rCM2z9_IePdK7HCZEIlMhliMTpbiR68";

export const supabase = createClient(supabaseUrl, supabaseKey);