import DefaultTags from "@/app/layout/defaultTags";

import dataSubalurBelajar from "@/lib/subAlurBelajar.json";
import slugify from "@/lib/slugify";

export default function Head({ params }: { params: { alur: string } }) {
  const dataAlur = dataSubalurBelajar.find(
    (subAl) => slugify(subAl.alur) == params.alur
  );
  return (
    <>
      <title>{`${dataAlur?.alur} - RoadmapId`}</title>
      <DefaultTags />
    </>
  );
}
