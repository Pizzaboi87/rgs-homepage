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