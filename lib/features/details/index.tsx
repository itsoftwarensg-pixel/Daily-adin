import React from "react";
import { Category } from "@/lib/types/category.page";
import { ContentDetailsType } from "@/lib/types/details.page";
import InfiniteArticleList from "./infinite-article-list";
import { getLastestPopularDataAction } from "@/app/actions/content";

// Props
interface Props {
  contentDetails: ContentDetailsType;
  category: Category;
}

const DetailsPage = async ({ contentDetails, category }: Props) => {
  const latestPopularData = await getLastestPopularDataAction();

  return (
    <div className="my-6">
      <InfiniteArticleList
        key={contentDetails.id}
        initialContent={contentDetails}
        category={category}
        latestPopularData={latestPopularData}
      />
    </div>
  );
};

export default DetailsPage;
