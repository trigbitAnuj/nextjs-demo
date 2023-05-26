export const generateStaticParams = async () => {
  const products = [
    { category: "a", item: "1" },
    { category: "b", item: "2" },
    { category: "c", item: "3" },
  ];

  return products.map((product) => {
    return {
      tag: product.category,
      item: product.item,
    };
  });
};

type Props = {
  params: {
    tag: "string";
    item: "string";
  };
};

const ExampleClientComponent: React.FC<Props> = ({ params }) => {
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air
  // `params` -> { tag: 'shoes', item: 'nike-air' }
  console.log(params);

  return (
    <>
      {params.tag}
      <br />
      {params.item}
    </>
  );
};
export default ExampleClientComponent;
