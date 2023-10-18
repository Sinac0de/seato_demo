"use client";

import { useState, useCallback, useEffect } from "react";
import RecentComments from "@/components/RecentComments/RecentComments";
import SalonDetail from "./_parts/SalonDetail/SalonDetail";
import { usePathname } from "next/navigation";

function Salon() {
  const path = usePathname();
  const [detail, setDetail] = useState({
    id: 0,
    name: "",
    address: "",
    photo_links: [],
    photos: [],
    opens: "",
    phone_number: "",
    created: "",
  });

  let url = path.split("/");
  const salonid = url[url.length - 1];

  const fetchSalonHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/7f8fef079b5d7d778da1/" + salonid
      );
      if (!response.ok) {
        // throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const detailData = {
        id: data.id,
        name: data.name,
        address: data.address,
        photo_links: data.photo_links,
        photos: data.photos,
        opens: data.opens,
        phone_number: data.phone_number,
        created: data.created,
        rating: data.rating,
        comments: data.comments.filter((comment) => comment.is_parent === true),
      };

      setDetail(detailData);
    } catch (error) {
      // alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchSalonHandler();
  }, []);

  return (
    <section>
      {/* salon detail characteristics */}
      <SalonDetail salon={detail} />
      {/* recent comments */}
      <RecentComments />
    </section>
  );
}

export default Salon;
