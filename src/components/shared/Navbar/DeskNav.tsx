import { Button } from "@/components/ui/button";

const DeskNav = () => {
  const navItems = ["A", "B", "C"];
  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {navItems.map((item, index) => (
        <Button key={index} variant="link">
          {item}
        </Button>
      ))}
    </div>
  );
};

export default DeskNav;
