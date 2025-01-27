import { createClient } from '@supabase/supabase-js';

// التأكد من أن هذه القيم تم تحميلها بشكل صحيح من ملف البيئة
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// إنشاء عميل Supabase باستخدام هذه القيم
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
