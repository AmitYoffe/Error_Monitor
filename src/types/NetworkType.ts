
export interface Network {
    articles: Articles;
    sn: SocialNetworks;
}

// type LocationNames = "lebanon"
//     | "inter-arab"
//     | "west bank"
//     | "international"
//     | "gaza strip"
//     | "pro hezbollah"
//     | "anti hezbollah"

export type Articles = {
    [key: string]: Location;
};

export type SocialNetworks = {
    [key: string]: Location;
};

export interface DocsInfo {
    docs_count: number;
    docs_count_3_days?: number;
    last_time: string;
}

export interface Location extends DocsInfo {
    networks: Networks
}

export interface Networks {
    [key: string]: NetworkInfo;
}

export type Sources = {
    [key: string]: Source;
};

export interface Entity {
    entity_name: string
    doc_count: number
}

export interface Source extends DocsInfo {
    entity_names: Entity[]
}

export interface NetworkInfo {
    docs_count: number;
    last_time: string;
    sources?: Sources;
}
