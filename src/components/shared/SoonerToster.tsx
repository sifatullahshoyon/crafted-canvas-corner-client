import { Button } from "../ui/button";
import { toast } from "sonner";

const SoonerToster = ({ text }: { text: string }) => {
  return (
    <Button
      variant="default"
      onClick={() =>
        toast(text, {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
};

export default SoonerToster;
