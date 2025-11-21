-- Create contests table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contests (
    id BIGSERIAL PRIMARY KEY,
    img TEXT,
    title TEXT NOT NULL,
    no TEXT,
    remaining TEXT,
    prize TEXT,
    price TEXT DEFAULT 'JOIN',
    timer TEXT DEFAULT '290603',
    link TEXT,
    highlights TEXT[] DEFAULT '{}',
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contests_created_at ON contests(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON contests
    FOR SELECT
    TO anon
    USING (true);

-- Create policy to allow authenticated users (admins) to do everything
CREATE POLICY "Allow authenticated full access" ON contests
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Insert default contests (optional)
INSERT INTO contests (img, title, no, remaining, prize, price, timer, link, highlights, description)
VALUES 
(
    'contest-1.png',
    'First BTC Lottery',
    'Big Win',
    'Buy Unlimited',
    '$300,000,000/month',
    'JOIN',
    '290603',
    'https://firstbtclottery.com/site/referral?code=v6zIr7Yg',
    ARRAY['No KYC', 'Crypto'],
    'Odds of winning a jackpot: 1 in 16,777,216'
),
(
    'https://watcher.guru/news/wp-content/uploads/2023/09/a2-4.png',
    'Stake',
    '10% Rakeback — Lifetime duration',
    '--',
    '$50,000.000',
    'Join',
    '290603',
    'https://stake.com/Lottery/home/?c=AA0NC0iw&clickId=fdc-0a53cb9b-bffc-438e-97c1-335fd7e5dfa4',
    ARRAY[]::TEXT[],
    NULL
),
(
    'https://cdn.prod.website-files.com/6659430ddebf16a696c96358/66b566c96d71c360fdc5d7b8_Home%20Opengraph.jpg',
    'CloudBet',
    'Up to 30% Rakeback - All Cash, No Rollover',
    'Get up to 2500 USDT + 200 FS',
    '$2500.000',
    'Join',
    '290603',
    'https://www.cloudbet.com/en/landing/cryptomaniaks/?af_token=97ab6f554e12167d3dd796c1487c78b4',
    ARRAY[]::TEXT[],
    NULL
);

COMMIT;

