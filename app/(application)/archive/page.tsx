import ArchivePage from "@/lib/features/archive";
import { getAllDivisionsAction } from "@/app/actions/division";
import { getAllCategoriesAction } from "@/app/actions/category";
import { getSearchArchiveAction } from "@/app/actions/archive";

const Page = async () => {
  const divisionList = await getAllDivisionsAction();
  const categoryList = await getAllCategoriesAction();
  const archiveSearchResult = await getSearchArchiveAction(1, 12);

  return (
    <ArchivePage
      divisionList={divisionList}
      categoryList={categoryList}
      archiveSearchResult={archiveSearchResult}
    />
  );
};

export default Page;
