import LeftSide from "@/components/homepage/news/LeftSide";
import RightSide from "@/components/homepage/news/RightSide";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

 

export default async function Home() {
  const categories = await getCategories();
  const news = await getNewsByCategoryId('01')
  console.log(categories.news_category, news);

  return (
    <div className="grid grid-cols-12 container mx-auto gap-5 my-16">
      <div className="col-span-3">
        <LeftSide categories={categories} activeId={"01"}></LeftSide>
      </div>

      <div className="col-span-6">
        <h2 className="text-xl font-bold mb-2">News by category</h2>
        <div className="space-y-4 font-semibold">
          {news.map((n) => (
            <div className="p-6 rounded-md border" key={n._id}>
              {n.title}
            </div>
          ))}
        </div>
      </div>

      <div className=" col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
}
