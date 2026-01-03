import React from "react";
import { LiveVideo } from "@/lib/types/home.page";

interface Props {
  video: LiveVideo;
}

const LeadNewsItemVideoOverlay: React.FC<Props> = ({ video }) => {
  if (!video) return null;

  // Determine URL based on platform and live status
  const url =
    video.type === "youtube"
      ? `https://www.youtube.com/embed/${video.video_id}?${video.is_live ? "autoplay=1&mute=1" : "autoplay=0"}&rel=0&modestbranding=1`
      : `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.embed_code)}&autoplay=${video.is_live ? "true" : "false"}&mute=${video.is_live ? "true" : "false"
      }&show_text=false`;

  // Set iframe allow attribute
  const allowAttr =
    video.type === "youtube"
      ? "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      : "autoplay; clipboard-write; encrypted-media; picture-in-picture";

  return (
    <div className="block group relative rounded-md overflow-hidden">
      <div className="w-full aspect-[4/3] rounded overflow-hidden bg-black">
        <iframe
          src={url}
          title={video.heading ?? "Video"}
          allow={allowAttr}
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
};

export default LeadNewsItemVideoOverlay;
