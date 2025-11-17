const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ktezajwbhdwswdvlsdqw.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXphandiaGR3c3dkdmxzZHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTgxODA5MiwiZXhwIjoyMDQ1Mzk0MDkyfQ.c3y3bPX8QDXEHNvlwNFlr9p3AXhYJjBPlKvtGU_Uu3U';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupStorage() {
  // List existing buckets
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  
  if (listError) {
    console.error('Error listing buckets:', listError);
    return;
  }
  
  console.log('Existing buckets:', buckets.map(b => b.name));
  
  // Check if site-images bucket exists
  const existingBucket = buckets.find(b => b.name === 'site-images');
  
  if (!existingBucket) {
    console.log('Creating site-images bucket...');
    const { data, error } = await supabase.storage.createBucket('site-images', {
      public: true,
      fileSizeLimit: 5242880, // 5MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp']
    });
    
    if (error) {
      console.error('Error creating bucket:', error);
    } else {
      console.log('Bucket created successfully!', data);
    }
  } else {
    console.log('Bucket already exists');
    
    // Update bucket to be public
    const { data, error } = await supabase.storage.updateBucket('site-images', {
      public: true,
      fileSizeLimit: 5242880,
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp']
    });
    
    if (error) {
      console.error('Error updating bucket:', error);
    } else {
      console.log('Bucket updated successfully!');
    }
  }
}

setupStorage().then(() => {
  console.log('Storage setup complete');
  process.exit(0);
}).catch(err => {
  console.error('Setup failed:', err);
  process.exit(1);
});
