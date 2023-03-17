import { ReactElement, useState } from "react";

export default function useFormData(pages: ReactElement[]) {
  const [indexPage, setIndexPage] = useState(0);
  function goNext() {
    setIndexPage((prevIndx) => {
      if (prevIndx >= pages.length) return prevIndx;
      return prevIndx + 1;
    });
  }
  function goBack() {
    setIndexPage((prevIndx) => {
      if (prevIndx === 0) return prevIndx;
      return prevIndx - 1;
    });
  }

  return { page: pages[indexPage], goNext, goBack };
}
