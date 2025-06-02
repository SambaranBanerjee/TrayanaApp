import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tsyeltlchlpligmpzxmo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzeWVsdGxjaGxwbGlnbXB6eG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNTI1NzMsImV4cCI6MjA1NjkyODU3M30.q-J9sIEl_jxRX1YZBEZbMfeS7ueCs7Cgl95RIwWaHVE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);