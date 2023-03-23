import { getFormIndexPage, saveFormIndexPage } from "@/services/formPage-api";
import { ReactElement, useState } from "react";

export default function useFormData(pages: ReactElement[]) {
  const [indexPage, setIndexPage] = useState<number>(getFormIndexPage() | 0);

  function goNext() {
    setIndexPage((prevIndx) => {
      if (prevIndx >= pages.length - 1) {
        saveFormIndexPage(prevIndx);
        return prevIndx;
      }
      saveFormIndexPage(prevIndx + 1);
      return prevIndx + 1;
    });
  }
  function goBack() {
    setIndexPage((prevIndx) => {
      if (prevIndx === 0) {
        saveFormIndexPage(prevIndx);
        return prevIndx;
      }
      saveFormIndexPage(prevIndx - 1);
      return prevIndx - 1;
    });
  }
  function reset() {
    setIndexPage(0);
  }

  return { page: pages[indexPage], goNext, goBack, reset, indexPage };
}
