import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarImg = ({ picture }) => {
  return (
    <Avatar>
      <AvatarImage src={picture} alt="img" />
      <AvatarFallback>IMG</AvatarFallback>
    </Avatar>
  );
};

export default AvatarImg;
