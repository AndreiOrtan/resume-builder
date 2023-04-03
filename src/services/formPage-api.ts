const PAGE_INDEX_KEY = "FORM_PAGE_INDEX";

export const getFormIndexPage = () => {
  try {
    const stringifiedValue = localStorage.getItem(PAGE_INDEX_KEY);

    if (stringifiedValue) {
      console.log("ran from try block", stringifiedValue);
      return JSON.parse(stringifiedValue);
    }
  } catch (error) {
    console.log("ran from catch block");
    return [];
  }
};

export const saveFormIndexPage = (num: number) => {
  localStorage.setItem(PAGE_INDEX_KEY, JSON.stringify(num));
};
