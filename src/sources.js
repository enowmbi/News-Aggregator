export const newsSources = [
    {
        id: "abc-news-au",
        name: "ABC News (AU)",
        description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        url: "http://www.abc.net.au/news",
        category: "general",
        language: "en",
        country: "au"
    },

    {
        id: "cnn",
        name: "Cable News Network(CNN)",
        description: "This is the single source of truth. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        url: "http://www.cnn.com/news",
        category: "general",
        language: "en",
        country: "us"
    }

];

export function getSources(){
    return newsSources;
}
