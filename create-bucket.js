const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ktezajwbhdwswdvlsdqw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXphandiaGR3c3dkdmxzZHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTgxODA5MiwiZXhwIjoyMDQ1Mzk0MDkyfQ.c3y3bPX8QDXEHNvlwNFlr9p3AXhYJjBPlKvtGU_Uu3U';
const supabase = createClient(supabaseUrl, supabaseKey);

async function createBucket() {
  const { data, error } = await supabase.storage.createBucket('site-images', {
    public: true,
    fileSizeLimit: 5242880, // 5MB
    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp']
  });
  
  if (error) {
    console.log('Bucket might already exist or error:', error.message);
  } else {
    console.log('Bucket created successfully:', data);
  }
}

createBucket();
