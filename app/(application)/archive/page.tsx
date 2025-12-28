import { getSearchArchiveAction } from "@/app/actions/archive";
import ArchivePage from "@/lib/features/archive";
import { getAllCategoriesAction } from "@/app/actions/category";
import { getAllDivisionsAction } from "@/app/actions/division";

export const dynamic = "force-dynamic";

const Page = async () => {
  const divisionListRequest = getAllDivisionsAction();
  const categoryListRequest = getAllCategoriesAction();
  const archiveSearchResultRequest = getSearchArchiveAction(1, 12);

  const [divisionList, categoryList, archiveSearchResult] = await Promise.all([
    divisionListRequest,
    categoryListRequest,
    archiveSearchResultRequest,
  ]);

  return (
    <ArchivePage
      divisionList={divisionList}
      categoryList={categoryList}
      archiveSearchResult={archiveSearchResult}
    />
  );
};

export default Page;
