// Lottery/Lottery data for the comparison site
export const Lotterys = [
    {
        id: 1,
        name: "FirstBTC Lottery",
        logo: "https://firstbtclottery.com/frontend/web/themes/bearnew/assets/PouriaSrc/SvgBears/loginMb.svg",
        rating: 4.9,
        bonus: "100% up to 1 BTC + 50 Free Spins",
        highlights: "Draws every 10 minutes, Instant BTC payouts",
        minDeposit: "0.001 BTC",
        founded: "2021",
        license: "Curacao eGaming",
        currencies: ["BTC", "ETH", "USDT", "LTC"],
        affiliateLink: "http://firstbtclottery.com/site/referral?code=v6zIr7Yg",
        featured: true,
        // provablyFair: true,
        withdrawalSpeed: "Instant",
        games: ["Lottery", "Slots", "Dice", "Crash"]
    },
    {
        id: 2,
        name: "Stake",
        logo: "https://bittrust.s3.amazonaws.com/1505244536.png",
        rating: 4.7,
        bonus: "10% Rakeback — Lifetime duration",
        highlights: "Blockchain verified, No KYC required",
        minDeposit: "0.0005 BTC",
        founded: "2017",
        license: "Stake INC",
        currencies: ["BTC", "ETH", "USDT", "BNB", "DOGE"],
        affiliateLink: "https://stake.com/Lottery/home/?c=AA0NC0iw&clickId=fdc-b85cb01f-ace6-4d90-80db-dda6ffe8066a",
        featured: true,
        // provablyFair: true,
        withdrawalSpeed: "< 30 minutes",
        games: ["Lottery", "Jackpot", "Poker", "Roulette"]
    },
    {
        id: 3,
        name: "Cloudbet",
        logo: "https://www.webopedia.com/wp-content/uploads/2025/09/coudbet.webp",
        rating: 4.7,
        bonus: "150% Welcome Bonus + 75 FS",
        highlights: "Smart contract draws, Transparent odds",
        minDeposit: "0.0008 BTC",
        founded: "2022",
        license: "Cloudbet",
        currencies: ["BTC", "ETH", "USDT"],
        affiliateLink: "https://www.cloudbet.com/en/landing/cryptomaniaks/?af_token=97ab6f554e12167d3dd796c1487c78b4",
        featured: true,
        // provablyFair: true,
        withdrawalSpeed: "Instant",
        games: ["Lottery", "Bingo", "Keno", "Scratch Cards"]
    }
];

export const bonuses = [
    {
        id: 1,
        Lottery: "FirstBTC Lottery",
        logo: "https://firstbtclottery.com/frontend/web/themes/bearnew/assets/PouriaSrc/SvgBears/loginMb.svg",
        offer: "100% up to 1 BTC + 50 Free Spins",
        code: "FIRST100",
        expiry: "2025-12-31",
        type: "Deposit Bonus",
        description: "New players only. Min deposit 0.001 BTC. Wagering 35x.",
        additionalBonuses: [
            {
                title: "Free Ticket",
                code: "Luckypanda7",
                description: "Get a free ticket with code: Luckypanda7"
            },
            {
                title: "LuckyHour",
                description: "Jackpot multiplies at 7pm Pacific Standard Time"
            }
        ]
    },
    {
        id: 2,
        Lottery: "Stake",
        logo: "https://bittrust.s3.amazonaws.com/1505244536.png",
        offer: "10% Rakeback — Lifetime duration",
        code: "STAKE10",
        expiry: "2025-11-30",
        type: "Rakeback",
        description: "Rakeback is a bonus that is given to players based on their losses."
    },
    {
        id: 3,
        Lottery: "Cloudbet",
        logo: "https://www.webopedia.com/wp-content/uploads/2025/09/coudbet.webp",
        offer: "50% Welcome Bonus + 75 FS",
        code: "NEWBONUS",
        expiry: "2025-12-15",
        type: "Deposit Bonus",
        description: "New users only. Wagering requirements apply."
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "What Is a Crypto Lottery? Complete Guide 2025",
        slug: "what-is-crypto-lottery-guide",
        image: "/images/blog/blog-1.jpg",
        excerpt: "Learn how blockchain lotteries work, why they're provably fair, and how to get started with crypto gambling.",
        author: "John Crypto",
        date: "2025-01-15",
        category: "Guides"
    },
    {
        id: 2,
        title: "Top 5 Bitcoin Lotteries with Instant Payouts",
        slug: "top-bitcoin-lotteries-2025",
        image: "/images/blog/blog-2.jpg",
        excerpt: "Discover the best BTC lotteries that offer instant withdrawals and provably fair draws.",
        author: "Sarah Bitcoin",
        date: "2025-01-10",
        category: "Reviews"
    },
    {
        id: 3,
        title: "How to Verify Provably Fair Lottery Draws",
        slug: "verify-provably-fair-draws",
        image: "/images/blog/blog-3.jpg",
        excerpt: "Step-by-step guide to checking if your lottery draw was truly random and fair using blockchain verification.",
        author: "Mike Blockchain",
        date: "2025-01-05",
        category: "Tutorials"
    }
];

