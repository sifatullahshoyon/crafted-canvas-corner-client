import { Link, useLocation } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NavigationBreadCrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/" className="text-white font-roboto">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white" />
          <BreadcrumbItem>
            {paths.map((path, index) => {
              const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
              const isLast = index === paths.length - 1;
              return isLast ? (
                <BreadcrumbLink>
                  <Link
                    to={path}
                    key={index}
                    className="text-white font-roboto capitalize"
                    aria-current="page"
                  >
                    {path}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink>
                  <Link to={routeTo} key={index}>
                    {path}
                  </Link>
                </BreadcrumbLink>
              );
            })}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default NavigationBreadCrumb;
