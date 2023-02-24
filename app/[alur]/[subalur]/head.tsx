import DefaultTags from "@/app/layout/defaultTags";

import dataSubalurBelajar from "@/lib/subAlurBelajar.json";
import slugify from "@/lib/slugify";

export default function Head({
  params,
}: {
  params: { alur: string; subalur: string };
}) {
  const dataSubalur = dataSubalurBelajar.find(
    (subAl) =>
      slugify(subAl.alur) == params.alur &&
      slugify(subAl.subalur) == params.subalur
  );
  return (
    <>
      <title>{`${dataSubalur?.subalur} | ${dataSubalur?.alur} - RoadmapId`}</title>
      <DefaultTags />
    </>
  );
}
