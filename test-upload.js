const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ktezajwbhdwswdvlsdqw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXphandiaGR3c3dkdmxzZHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MTgwOTIsImV4cCI6MjA0NTM5NDA5Mn0.LGW-6m_OUB-TdMCKyPF0nY-9ZCgjBPCu-4sNPwn51DY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testUpload() {
  // Create a simple test file
  const testData = Buffer.from('test image data');
  
  const { data, error } = await supabase.storage
    .from('site-images')
    .upload('test-' + Date.now() + '.txt', testData, {
      contentType: 'text/plain',
      cacheControl: '3600'
    });
  
  if (error) {
    console.error('Upload error:', JSON.stringify(error, null, 2));
  } else {
    console.log('Upload success:', data);
    
    // Get public URL
    const { data: urlData } = supabase.storage
      .from('site-images')
      .getPublicUrl(data.path);
    
    console.log('Public URL:', urlData.publicUrl);
  }
}

testUpload();
