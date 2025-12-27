export const APIEndpoint = {
    base_url: process.env.BASE_URL || "http://127.0.0.1:8000/api/v1",

    // Category API endpoints - Only for Category Page
    category: {
        getById: (id: number, include?: string) => `${APIEndpoint.base_url}/categories/${id}?include=${include || ''}`, // include: position_contents,subcategories
        getBySlug: (slug: string, include?: string) => `${APIEndpoint.base_url}/categories/slug/${slug}?include=${include || ''}`, // include: position_contents,subcategories
    },

    // Category API endpoints - Only for Category Page
    subCategory: {
        getBySlug: (slug: string, include?: string) => `${APIEndpoint.base_url}/subcategories/slug/${slug}?include=${include || ''}`, // include: contents,category
    },

    // Content API endpoints
    content: {
        getByCategoryId: (id: number, page?: number, limit?: number) =>
            `${APIEndpoint.base_url}/contents/?for=category&id=${id}&page=${page}&limit=${limit}`,
        getBySubCategoryId: (id: number, page?: number, limit?: number) =>
            `${APIEndpoint.base_url}/contents/?for=subcategory&id=${id}&page=${page}&limit=${limit}`,
        getByDivisionId: (id: number, page?: number, limit?: number) =>
            `${APIEndpoint.base_url}/contents/?for=division&id=${id}&page=${page}&limit=${limit}`,
    },

    // Division API endpoints
    division: {
        getAll: () => `${APIEndpoint.base_url}/divisions`,
        getBySlug: (slug: string, include?: string) => `${APIEndpoint.base_url}/divisions/slug/${slug}?include=${include || ''}`, // include: contents,districts
    },

    // Division API endpoints
    disctrict: {
        // getAll: () => `${APIEndpoint.base_url}/divisions`,
        // getBySlug: (slug: string, include?: string) => `${APIEndpoint.base_url}/subcategories/slug/${slug}?include=${include || ''}`, // include: contents,category
    },
};