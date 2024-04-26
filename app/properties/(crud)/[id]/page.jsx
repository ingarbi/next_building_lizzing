"use client"

import { useParams, useSearchParams, usePathname } from "next/navigation";

const PropertyPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const name = searchParams.get("name");
  return (
    <div>PropertyPage, {params.id}, ---{name}, {pathName}</div>
  )
}

export default PropertyPage