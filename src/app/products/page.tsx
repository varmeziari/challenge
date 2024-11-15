import FilterProducts from "@/components/FilterProducts";
import { promises as fs } from "fs";

export default async function Products() {
  const file = await fs.readFile(
    process.cwd() + "/public/mockData/ProductList.json",
    "utf8"
  );
  const data = JSON.parse(file);
  //----------------------------------

  return <FilterProducts data={data} />;
}
