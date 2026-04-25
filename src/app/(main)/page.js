import Image from "next/image";

async function getCategories(){
const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
const data = await res.json()
return data.data
}

export default async function Home() {
 
  const categories = await getCategories()
  console.log(categories.news_category);


 
  return (
    <div className="grid grid-cols-12 container mx-auto gap-5 my-16">
      <div className="col-span-3">
        <h1 className="font-bold text-lg">All Categories</h1>
        <ul className="flex flex-col gap-4 mt-3">
          {categories.news_category.map((category) => (
            <li
              className="bg-base-300 rounded text-center text-xl p-3"
              key={category.category_id}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="font-bold text-3xl bg-purple-300 col-span-6">
        all news
      </div>
      <div className="font-bold text-3xl bg-green-200 col-span-3">
        social icons
      </div>
    </div>
  );
}
