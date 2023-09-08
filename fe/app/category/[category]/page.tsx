import PaginatedViewer from "@/components/views/paginated.view";
import { FunctionComponent } from "react";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const GenerateTitle = (category: string) => {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  // pluralize, ignore if it's already plural
  if (capitalized.charAt(capitalized.length - 1) !== "s") {
    return capitalized + "s";
  }

  return capitalized;
};

const CategoryPage: FunctionComponent<CategoryPageProps> = (props) => {
  return (
    <main>
      <div className="flex flex-col h-screen w-full  mt-24 ml-8">
        <h1 className="text-2xl font-bold">
          Latest {GenerateTitle(props.params.category)}
        </h1>

        <PaginatedViewer category={props.params.category} />
      </div>
    </main>
  );
};

export default CategoryPage;
