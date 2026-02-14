
export interface Article {
    title: string;
    description: string;
    url: string;
    imageUrl?: string;
    category: string;
    author?: string;
    readTime: string;
    publishedAt: string;
    source: string;
}

const FALLBACK_NEWS: Article[] = [
    {
        title: "AI Models Now Predict Global Supply Chain Disruption with 94% Accuracy",
        description: "Researchers at MIT have developed a new transformer-based architecture that outperforms traditional logistics models by a significant margin.",
        url: "#",
        category: "AI",
        readTime: "4 min read",
        publishedAt: "2 hours ago",
        source: "MIT Tech Review"
    },
    {
        title: "The Silent Rise of Web Assembly in Enterprise Applications",
        description: "Why major tech companies are quietly rewriting their core services using Wasm for better performance and security.",
        url: "#",
        category: "DEVELOPMENT",
        readTime: "6 min read",
        publishedAt: "5 hours ago",
        source: "TheNewStack"
    },
    {
        title: "Cybersecurity Alert: New Zero-Day Vulnerability Found in Open Source Libraries",
        description: "Security experts warn of a critical flaw affecting millions of devices. Patch Tuesday brings urgent updates.",
        url: "#",
        category: "CYBER",
        readTime: "3 min read",
        publishedAt: "8 hours ago",
        source: "Hacker News"
    },
    {
        title: "Quantum Computing Hardware Reaches New Stability Milestone",
        description: "Google's Quantum AI team reports lower error rates in new Sycamore processor iterations.",
        url: "#",
        category: "HARDWARE",
        readTime: "5 min read",
        publishedAt: "1 day ago",
        source: "Nature"
    },
    {
        title: "Next.js 15: What You Need to Know About the Latest Features",
        description: "Vercel announces major updates including partial prerendering and improved caching strategies.",
        url: "#",
        category: "WEB",
        readTime: "7 min read",
        publishedAt: "2 days ago",
        source: "Vercel Blog"
    }
];

export async function fetchNews(): Promise<Article[]> {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    if (!apiKey) {
        console.warn("No API key provided using fallback data");
        return FALLBACK_NEWS;
    }

    try {
        let url = '';
        let isNewsDataIo = apiKey.startsWith('pub_');

        if (isNewsDataIo) {
            // newsdata.io endpoint
            url = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=technology&language=en`;
        } else {
            // newsapi.org endpoint
            url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=10&apiKey=${apiKey}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
            console.error(`API Error: ${res.status} ${res.statusText}`);
            return FALLBACK_NEWS;
        }

        const data = await res.json();

        if (isNewsDataIo) {
            if (!data.results || data.results.length === 0) return FALLBACK_NEWS;
            return data.results.map((item: any) => ({
                title: item.title,
                description: item.description ? (item.description.length > 150 ? item.description.substring(0, 150) + "..." : item.description) : "No description available",
                url: item.link,
                imageUrl: item.image_url,
                category: (item.category && item.category[0]) ? item.category[0].toUpperCase() : "TECH",
                author: item.creator ? item.creator[0] : "Editor",
                readTime: "5 min read",
                publishedAt: item.pubDate,
                source: item.source_id
            }));
        } else {
            // NewsAPI.org
            if (!data.articles || data.articles.length === 0) return FALLBACK_NEWS;
            return data.articles.map((item: any) => ({
                title: item.title,
                description: item.description || "No description available",
                url: item.url,
                imageUrl: item.urlToImage,
                category: "TECH",
                author: item.author,
                readTime: "5 min read",
                publishedAt: new Date(item.publishedAt).toISOString().split('T')[0],
                source: item.source.name
            }));
        }

    } catch (error) {
        console.error("Failed to fetch news:", error);
        return FALLBACK_NEWS;
    }
}
