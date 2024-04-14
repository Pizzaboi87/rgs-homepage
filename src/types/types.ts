export type ArticleType = {
    articleBg: string;
    authorFirstName: string;
    authorLastName: string;
    authorImage: string;
    date: string;
    title: string;
    text: string;
    hashTags: string[];
    slug: string;
}

export type ArticleCardProps = {
    isSwiper: boolean;
    articleData: ArticleType;
}

export type CardProps = {
    index: number;
    cardData: {
        icon: string;
        title: string;
        text: string;
        bottomText: string;
        link: string;
    };
}

export type ValueProps = {
    index: number;
    valueData: {
        title: string;
        text: string;
    };
}

export type PartnerProps = {
    partnerData: {
        link: string;
        image: string;
    };
}

export type TagProps = {
    handleTagClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, tag: string) => void;
    tag: string;
}

export type ContentProps = {
    content: {
        type: string;
        image: string;
        alt: string;
        title?: string;
        list?: string[];
        text?: string;
        columns?: {
            title: string;
            text?: string;
            list?: string[];
        }[];
    };
}

export type ContactFormType = {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    interestedIn: string[];
}

export type ReferenceType = {
    reference: string;
    link: string;
}

export type ArticleContentType = {
    [key: string]: {
        type: string;
        title?: string;
        text?: string[];
        image?: string;
        alt?: string;
        caption?: string;
        references?: ReferenceType[] | undefined;
        list?: string[][];
    }[];
}

export type MemberType = {
    name: string;
    position: string;
    about: string[];
    image: string;
    linkedin: string;
    twitter: string;
    slug: string;
}

export type ErrorType = {
    error: Error & { digest?: string };
    reset: () => void;
};

export type PortfolioType = {
    isin: string;
    ticker: string;
    exchange: string;
    bbg_ticker: string;
    bbg_exchange: string;
    year: number;
    company_name: string;
    dom_region: string;
    dom_country: string;
    economic_sector: string;
    industry: string;
    product_category: string;
    product_category_revenues: number;
    total_revenues: number;
    human_mobility: boolean;
    mental_wellbeing: boolean
}

export type AllPortfolioType = {
    [key: string]: PortfolioType[];
}

export type DataContextType = {
    allPortfolio: AllPortfolioType,
    firstSelector: string | null,
    setFirstSelector: React.Dispatch<React.SetStateAction<string | null>>,
    secondSelector: string | null,
    setSecondSelector: React.Dispatch<React.SetStateAction<string | null>>,
    updatePortfolio: (selector: string, isFirst: boolean) => void,
    firstPortfolio: PortfolioType[],
    secondPortfolio: PortfolioType[],
    firstYears: number[],
    secondYears: number[],
    options: {
        value: string;
        label: string;
    }[],
}

export type RevenueByYearType = {
    [key: number]: number;
};

export type MovingCardProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export type GetDataCondition = (data: PortfolioType, dataKey: string) => boolean;

export type RevenueType = {
    getDataCondition: GetDataCondition;
    dataKey: string;
    portfolio: PortfolioType[] | undefined;
    years: number[] | undefined;
    setRevenue: React.Dispatch<React.SetStateAction<number[]>>;
}

export type CorrectedRevenueType = {
    portfolio: PortfolioType[];
    years: number[];
    getDataCondition: GetDataCondition;
    dataKey: string;
}

export type SectorData = {
    [sector: string]: number;
}
export type SectorRevenueMap = {
    [year: number]: SectorData;
}

export type RevenueByCompany = {
    name: string;
    revenue: number;
}

export type RevenueByCountry = {
    country: string;
    normalRevenue: number;
    greenRevenue: number;
}