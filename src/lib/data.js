export async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}
export async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}

export const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();

  const news = await getNewsByCategoryId(id);
};
