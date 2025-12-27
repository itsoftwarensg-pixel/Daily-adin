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
        getByDistrictId: (id: number, page?: number, limit?: number) =>
            `${APIEndpoint.base_url}/contents/?for=district&id=${id}&page=${page}&limit=${limit}`,
        getByUpazilaId: (id: number, page?: number, limit?: number) =>
            `${APIEndpoint.base_url}/contents/?for=upazila&id=${id}&page=${page}&limit=${limit}`,
        getById: (id: number, include?: string) =>
            `${APIEndpoint.base_url}/contents/${id}?include=${include || ''}`,
    },

    // Division API endpoints
    division: {
        getAll: () => `${APIEndpoint.base_url}/divisions`,
        getBySlug: (slug: string, include?: string) => `${APIEndpoint.base_url}/divisions/slug/${slug}?include=${include || ''}`, // include: contents,districts
    },

    // District API endpoints
    disctrict: {
        getBySlug: (slug: string, include?: string) => `${APIEndpoint.base_url}/districts/slug/${slug}?include=${include || ''}`, // include: contents,upazilas,division
    },

    // Upazila API endpoints
    upazila: {
        getAll: (districtId: number) => `${APIEndpoint.base_url}/districts/${districtId}/upazilas`,
        getBySlug: (slug: string, include?: string) => `${APIEndpoint.base_url}/upazilas/slug/${slug}?include=${include || ''}`, // include: district,division,contents
    },
};