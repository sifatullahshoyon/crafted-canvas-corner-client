import { useState } from "react";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import BlogsCard from "@/components/shared/Card/BlogsCard";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setVisibleBlogs(blogs.length);
    setShowAll(true);
  };
  const handleViewLess = () => {
    setVisibleBlogs(3);
    setShowAll(false);
  };

  return (
    <div className="mt-24">
      <Container>
        <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] pb-6">
          Latest Blog
        </h1>
        <hr className="w-24 h-[3px] bg-[#EF6291]" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-6">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <BlogsCard key={blog.id} blog={blog} />
          ))}
        </div>
        {!showAll ? (
          <div className="text-center">
            <Button
              className="bg-[#EF6291] font-roboto hover:bg-[#D84C7D] text-white"
              onClick={handleViewMore}
            >
              View More
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <Button
              className="bg-[#EF6291] font-roboto hover:bg-[#D84C7D] text-white"
              onClick={handleViewLess}
            >
              View Less
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Blogs;

const blogs = [
  {
    id: 1,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 July, 2024",
    image:
      "https://codezeel.com/opencart/OPC03/OPC030069/image/cache/catalog/blog-6-897x600.jpg",
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC...",
  },
  {
    id: 2,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 June, 2018",
    image:
      "https://codezeel.com/opencart/OPC03/OPC030069/image/cache/catalog/blog-5-897x600.jpg",
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC...",
  },
  {
    id: 3,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "16 February, 2025",
    image:
      "https://codezeel.com/opencart/OPC03/OPC030069/image/cache/catalog/blog-4-897x600.jpg",
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC...",
  },
  {
    id: 4,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 June, 2023",
    image:
      "https://codezeel.com/opencart/OPC03/OPC030069/image/cache/catalog/blog-5-897x600.jpg",
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC...",
  },
  {
    id: 5,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 February, 2018",
    image:
      "https://codezeel.com/opencart/OPC03/OPC030069/image/cache/catalog/blog-4-897x600.jpg",
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC...",
  },
  {
    id: 6,
    name: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    date: "28 July, 2024",
    image:
      "https://codezeel.com/opencart/OPC03/OPC030069/image/cache/catalog/blog-6-897x600.jpg",
    comment: "Stationery",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC...",
  },
];
