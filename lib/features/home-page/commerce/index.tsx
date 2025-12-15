import React from "react";
import { newsJson } from "@/lib/data"; // Temporary
import Container from "@/lib/components/common/container";
import SectionHeaderBase from "@/lib/components/common/section-headers/base";
import NewsItemVertical from "@/lib/components/common/news-elements/news-item-vertical";
import GradientHeader from "@/lib/components/common/section-headers/gradient";

const HomeCommercePantholokChoose = () => {
  return (
    <div className="py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* বাণিজ্য লোক */}
          <div className="space-y-2">
            <GradientHeader
              title="বাণিজ্য লোক"
              color="red"
              showReadMoreBtn
              href="/"
            />
            {/* News contents */}
            <div className="space-y-2">
              {/* First item (large) */}
              {newsJson.slice(8, 9).map((newsItem, idx) => (
                <NewsItemVertical
                  key={idx}
                  titleSize="large"
                  newsItem={newsItem}
                />
              ))}

              {/* Next two items in a 2-column grid */}
              <div className="grid grid-cols-2 gap-2">
                {newsJson.slice(3, 5).map((newsItem, idx) => (
                  <NewsItemVertical key={idx} newsItem={newsItem} />
                ))}
              </div>
            </div>
          </div>

          {/* পান্থলোক */}
          <div className="space-y-2">
            <GradientHeader
              title="পান্থলোক"
              color="gray"
              showReadMoreBtn
              href="/"
            />
            {/* News contents */}
            <div className="space-y-2">
              {/* First item (large) */}
              {newsJson.slice(19, 20).map((newsItem, idx) => (
                <NewsItemVertical
                  key={idx}
                  titleSize="large"
                  newsItem={newsItem}
                />
              ))}

              {/* Next two items in a 2-column grid */}
              <div className="grid grid-cols-2 gap-2">
                {newsJson.slice(13, 15).map((newsItem, idx) => (
                  <NewsItemVertical key={idx} newsItem={newsItem} />
                ))}
              </div>
            </div>
          </div>

          {/* বাছাইকৃত */}
          <div className="space-y-2">
            <GradientHeader
              title="বাছাইকৃত"
              color="indigo"
              showReadMoreBtn
              href="/"
            />
            {/* News contents */}
            <div className="space-y-2">
              {/* First item (large) */}
              {newsJson.slice(1, 2).map((newsItem, idx) => (
                <NewsItemVertical
                  key={idx}
                  titleSize="large"
                  newsItem={newsItem}
                />
              ))}

              {/* Next two items in a 2-column grid */}
              <div className="grid grid-cols-2 gap-2">
                {newsJson.slice(6, 8).map((newsItem, idx) => (
                  <NewsItemVertical key={idx} newsItem={newsItem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeCommercePantholokChoose;
