const FAVORITES_KEY = "FORM_PAGE_INDEX";

export const getFormIndexPage = () => {
  try {
    const stringifiedValue = localStorage.getItem(FAVORITES_KEY);

    if (stringifiedValue) return JSON.parse(stringifiedValue) || [];
  } catch (error) {
    return [];
  }
};

export const saveFormIndexPage = (num: number) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(num));
};
