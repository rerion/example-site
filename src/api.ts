
export type Pages = {
    id: string;
    url: string;
}[];

const pages: Pages = [
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

const page: Page = {
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

const baseUrl = "https://adchitects-cms.herokuapp.com";
const headers = new Headers();
    
headers.append("Authorization", "Basic YWRjaGl0ZWN0czpqc3J1bGV6eno=");
headers.append("Content-Type", "application/json");

export function fetchPages() {
    return fetch(baseUrl + '/pages', {
        headers, method: 'GET'
    }).then(req => req.json() as Promise<Pages>);
}

export function fetchPage(id: string) {
    return fetch(baseUrl + `/page/${id}`, {
        headers, method: 'GET'
    }).then(req => req.json() as Promise<Page>);
}

export function subscribeToNewsletter(email: string) {
    let status: number;
    return fetch(baseUrl + '/newsletter', {
        headers, method: 'POST', body: JSON.stringify({
            email
        })
    }).then(response => {
        status = response.status;
        return response.json()
    }).then(body => {
        return {
            status, body
        }
    });
}