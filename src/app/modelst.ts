export interface Game{
    id: string;
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    metacritic: number;
    website: string;
    description: string;
    genres: Genre[];
    parent_platforms: Array<ParentPlatform>;
    publishers: Publisher[];
    ratings: Rating[];
    screenshots: Screenshots[];
    trailers: Trailer[];
}

export interface APIResponse<T>{
    results: T[];
}

interface Genre{
    name: string;
}

interface ParentPlatform{
    platform: {
        name: string;
    };
}

interface Publisher{
    name: string;
}

interface Rating{
    id: number;
    count: number;
    title: string;
}

interface Screenshots{
    image: string;
}

interface Trailer{
    data: {
        max: string;
    };
}