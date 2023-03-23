const PAGE_INDEX_KEY = "FORM_PAGE_INDEX";

export const getFormIndexPage = () => {
  try {
    const stringifiedValue = localStorage.getItem(PAGE_INDEX_KEY);

    if (stringifiedValue) return JSON.parse(stringifiedValue) || [];
  } catch (error) {
    return [];
  }
};

export const saveFormIndexPage = (num: number) => {
  localStorage.setItem(PAGE_INDEX_KEY, JSON.stringify(num));
};
