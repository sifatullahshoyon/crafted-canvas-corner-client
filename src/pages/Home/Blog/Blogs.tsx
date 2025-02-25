import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import blogImg1 from "../../../assets/images/blog/blog-1-916x599.jpg";
import blogImg2 from "../../../assets/images/blog/blog-2-916x599.jpg";
import blogImg3 from "../../../assets/images/blog/blog-3-916x599.jpg";
import blogImg4 from "../../../assets/images/blog/blog-4-916x599.jpg";
import blogImg5 from "../../../assets/images/blog/blog-5-916x599.jpg";
import BlogsCard from "@/components/shared/Card/BlogsCard";

const Blogs = () => {
  return (
    <div className="mt-24">
      <Container>
        <>
          <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] pb-6 ">
            Latest Blog
          </h1>
          <hr className="w-24 h-[3px] bg-[#EF6291]" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
            {blogs?.slice(0, 3).map((blog) => (
              <BlogsCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-[#EF6291] font-roboto hover:bg-[#EF6291] text-white">
              View All Product
            </Button>
          </div>
        </>
      </Container>
    </div>
  );
};

export default Blogs;

const blogs = [
  {
    id: 1,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 February, 2018",
    image: { blogImg1 },
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..",
  },
  {
    id: 2,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 February, 2018",
    image: { blogImg2 },
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..",
  },
  {
    id: 3,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 February, 2018",
    image: { blogImg3 },
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..",
  },
  {
    id: 4,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 February, 2018",
    image: { blogImg4 },
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..",
  },
  {
    id: 5,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 February, 2018",
    image: { blogImg5 },
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..",
  },
];
