import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavItem from "./Navitem";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col items-start ">
          {/* {navItems.map((item, index) => (
            <Button
              key={index}
              variant="link"
              onClick={() => {
                setOpen(false);
              }}
            >
              <div className="text-red-500">logo</div>
              <div>{item.element}</div>

              <div>
                <p>search</p>
              </div>
            </Button>
          ))} */}
          <div
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavItem></NavItem>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
