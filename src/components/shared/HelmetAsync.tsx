import { Helmet } from "react-helmet-async";

const HelmetAsync = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{title} | Crafted Canvas Corner</title>
    </Helmet>
  );
};

export default HelmetAsync;
