import CategoryList from "./CategoryList";
import Title from "./Title";

const Category = ({ catg }) => {
  return (
    <>
      <Title>Popular Categories</Title>
      <CategoryList catg={catg} />
    </>
  );
};

export default Category;
