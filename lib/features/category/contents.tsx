import { getContentsByCategoryIdAction } from "@/app/actions/content";
import LoadMoreContent from "@/lib/components/load-more-content";
import { LOAD_MORE_TYPES } from "@/lib/config/constant";

const CategoryContents = async ({ categoryID }: { categoryID: number }) => {
  const contents = await getContentsByCategoryIdAction(categoryID, 1, 10);

  return (
    <LoadMoreContent
      id={categoryID}
      type={LOAD_MORE_TYPES.CATEGORY}
      loadMoreContents={{
        contents: contents.data,
        last_page: contents.last_page,
      }}
    />
  );
};

export default CategoryContents;
