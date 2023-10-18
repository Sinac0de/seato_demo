"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Card from "@/components/Card/Card";
import { Fragment } from "react";
import Modal from "@/components/Modal/Modal";
import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Pagination from "@/components/Pagination/Pagination";
import { scrollToTopFunction } from "@/utils/usefulFunctions";

const Salons = () => {
  const [salonList, setSalonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  /* === Pagination === */
  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 8;
    const lastPageIndex = firstPageIndex + 8;
    scrollToTopFunction();
    return salonList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, salonList]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchSalonsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.npoint.io/7f8fef079b5d7d778da1"
      );
      if (!response.ok) {
        // throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformed = data.map((salonData) => ({
        id: salonData.id,
        name: salonData.name,
        address: salonData.address,
        photo: salonData.photo_links[0],
        rating: salonData.rating,
      }));
      setSalonList(transformed);
      setIsLoading(false);
    } catch (error) {
      // alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchSalonsHandler();
  }, [fetchSalonsHandler]);

  return (
    <Fragment>
      {/* Loading modal */}
      <Modal isOpen={isLoading}>
        <div className="flex flex-col items-center gap-2">
          <h4>درحال دریافت اطلاعات سالن ها...</h4>
          <Spinner />
        </div>
      </Modal>
      {/* salons list section */}
      <section className="p-7 lg:p-14 min-h-screen">
        {salonList.length ? (
          <>
            {/* List caption and filter button */}
            <div className="w-full relative mb-5 p-3 gap-3 flex justify-between flex-col lg:flex-row">
              <h1 className="font-bold absolute mx-auto top-0 right-0 left-0 w-fit text-[22px]">
                لیست سالن های زیبایی
              </h1>

              {/* filters */}
              <div className="flex gap-2 order-2 lg:order-1 h-fit md:mt-10">
                <Button className="bg-[#DADBDC9C] text-base font-bold shadow-none hover:shadow-none rounded-full text-black flex gap-2 items-center">
                  استان
                  <IconContext.Provider value={{ size: 13 }}>
                    <FaChevronDown />
                  </IconContext.Provider>
                </Button>
                <Button className="bg-[#DADBDC9C] text-base font-bold shadow-none hover:shadow-none rounded-full text-black flex gap-2 items-center">
                  شهر
                  <IconContext.Provider value={{ size: 13 }}>
                    <FaChevronDown />
                  </IconContext.Provider>
                </Button>
              </div>
              <Button className="bg-[#DADBDC9C] mt-10 text-base font-bold shadow-none hover:shadow-none rounded-full text-black lg:order-1 w-fit">
                فیلتر
              </Button>
            </div>
            {/* List of salons */}
            <div className="grid grid-flow-row gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 my-5">
              {currentPageData.map((salon) => (
                <Card salon={salon} key={salon.id} />
              ))}
              <div className="pb-5" dir="ltr">
                <Pagination
                  className="flex gap-2 mx-auto p-3 w-fit absolute left-0 right-0"
                  currentPage={currentPage}
                  totalCount={salonList.length}
                  pageSize={10}
                  onPageChange={(page) => handlePageChange(page)}
                />
              </div>
            </div>
          </>
        ) : null}
      </section>
    </Fragment>
  );
};

export default Salons;
