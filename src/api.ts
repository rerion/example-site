
export type Pages = {
    id: string;
    url: string;
}[];

export const pages: Pages = [
    {
        "url": "/",
        "id": "MPz3uDxgKR"
    },
    {
        "url": "/solutions",
        "id": "BsX5PfVVxl"
    },
    {
        "url": "/about",
        "id": "RsQPoaZWdp"
    }
];

export type Section = {
    type: "hero";
    text: string;
    img: string;
} | {
    type: "testimonial";
    text: string;
    author: string;
} | {
    type: "newsletter";
}

export type Page = {
    id: string; 
    url: string;
    sections: Section[];
}

export const page: Page = {
    "url": "/",
    "id": "MPz3uDxgKR",
    "sections": [
        {
            "type": "hero",
            "text": "Excepteur sint occaecat cupidatat non proident sunt.",
            "img": "https://i.ibb.co/G9bfTPH/breally-img.png"
        },
        {
            "type": "testimonial",
            "text": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
            "author": "Jim Beam, American Bourbon"
        },
        {
            "type": "newsletter"
        }
    ]
};