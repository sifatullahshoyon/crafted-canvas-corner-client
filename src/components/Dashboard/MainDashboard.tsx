import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";

const MainDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const user = useAppSelector(useCurrentUser);
  if (user?.role == "admin") {
    setAdmin(admin);
  }
  return <div>{admin ? "" : ""}</div>;
};

export default MainDashboard;
