import LeftSide from "@/components/homepage/news/LeftSide";
import RightSide from "@/components/homepage/news/RightSide";
import Image from "next/image";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);

  return (
    <div className="grid grid-cols-12 container mx-auto gap-5 my-16">
      <div className="col-span-3">
        <LeftSide categories={categories}></LeftSide>
      </div>

      <div className="font-bold text-3xl bg-purple-300 col-span-6">
        all news
      </div>
      <div className=" col-span-3">
       <RightSide></RightSide>
      </div>
    </div>
  );
}
