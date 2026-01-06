import { BASE_URL } from "../config/constant";
import { buildQueryString } from "../utils/helpers";

export const APIEndpoint = {
  base_url: BASE_URL || "http://127.0.0.1:8000/api/v1",

  // Utils API endpoints
  utils: {
    getBnDateTime: () =>
      `${APIEndpoint.base_url}/datetime-bn`,
    getMenu: () =>
      `${APIEndpoint.base_url}/menu`,
  },

  // Home API endpoints
  home: {
    getData: (include?: string) =>
      `${APIEndpoint.base_url}/home?include=${include || ""}`,
    // include: lead,scroll,trending_tag,special,recent,popular,national,politics
  },

  // Category API endpoints - Only for Category Page
  category: {
    getAll: () => `${APIEndpoint.base_url}/categories`,
    getById: (id: number, include?: string) =>
      `${APIEndpoint.base_url}/categories/${id}?include=${include || ""}`, // include: position_contents,subcategories
    getBySlug: (slug: string, include?: string) =>
      `${APIEndpoint.base_url}/categories/slug/${slug}?include=${include || ""
      }`, // include: position_contents,subcategories
  },

  // Category API endpoints - Only for Category Page
  subCategory: {
    getBySlug: (catSlug: string, subCatSlug: string, include?: string) =>
      `${APIEndpoint.base_url}/subcategories/slug/${catSlug}/${subCatSlug}?include=${include || ""
      }`, // include: contents,category
  },

  // Content API endpoints
  content: {
    getAll: (page?: number, limit?: number) =>
      `${APIEndpoint.base_url}/contents?page=${page}&limit=${limit}`,
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
    getByTopicId: (id: number, page?: number, limit?: number) =>
      `${APIEndpoint.base_url}/contents/?for=tag&id=${id}&page=${page}&limit=${limit}`,
    getById: (id: number, include?: string) =>
      `${APIEndpoint.base_url}/contents/${id}?include=${include || ""}`,
    getLatestPopular: () => `${APIEndpoint.base_url}/contents/latest-popular`,
  },

  // Division API endpoints
  division: {
    getAll: () => `${APIEndpoint.base_url}/divisions`,
    getDistrictByDivisionId: (divisionId: number) =>
      `${APIEndpoint.base_url}/divisions/${divisionId}/districts`,
    getBySlug: (slug: string, include?: string) =>
      `${APIEndpoint.base_url}/divisions/slug/${slug}?include=${include || ""}`, // include: contents,districts
  },

  // District API endpoints
  district: {
    getUpazilasByDistrictId: (districtId: number) =>
      `${APIEndpoint.base_url}/districts/${districtId}/upazilas`,
    getBySlug: (slug: string, include?: string) =>
      `${APIEndpoint.base_url}/districts/slug/${slug}?include=${include || ""}`, // include: contents,upazilas,division
  },

  // Upazila API endpoints
  upazila: {
    getAll: (districtId: number) =>
      `${APIEndpoint.base_url}/districts/${districtId}/upazilas`,
    getBySlug: (slug: string, include?: string) =>
      `${APIEndpoint.base_url}/upazilas/slug/${slug}?include=${include || ""}`, // include: district,division,contents
  },

  //Archive API endpoints
  archive: {
    getSearchArchive: (
      page?: number,
      limit?: number,
      date_start?: string,
      date_end?: string,
      category_id?: number,
      division_id?: number,
      district_id?: number,
      upazila_id?: number
    ) => {
      const query = buildQueryString({
        page,
        limit,
        date_start,
        date_end,
        category_id,
        division_id,
        district_id,
        upazila_id,
      });

      return `${APIEndpoint.base_url}/archive${query}`;
    },
  },

  // Video API endpoints - Video page and video details page
  video: {
    getAll: (page: number, limit: number) => `${APIEndpoint.base_url}/videos?page=${page}&limit=${limit}`,
    getById: (id: number) => `${APIEndpoint.base_url}/videos/${id}`,
  },

  // Photo API endpoints - photo page and photo details page
  photo: {
    getAllAlbums: (page: number, limit: number) => `${APIEndpoint.base_url}/photos?page=${page}&limit=${limit}`,
    getAlbumById: (id: number) => `${APIEndpoint.base_url}/photos/${id}`,
  },

  // Topic API endpoints - topic page with contents
  topic: {
    getBySlug: (slug: string) => `${APIEndpoint.base_url}/tags/slug/${slug}`,
  },
};
