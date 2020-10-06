import qs from "qs";
const setQueryStringWithoutPageReload = (qsValue: string) => {
  const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${qsValue}`;

  window.history.pushState({ path: newUrl }, "", newUrl);
};

export const setQueryStringValue = (key: string, value: string) => {
  const queryString = window.location.search;
  const values = qs.parse(queryString); // parse string to object
  const newQsValue = qs.stringify({ ...values, [key]: value });
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};

export const getQueryStringValue = (key: string) => {
  const queryString: string = window.location.search;
  const values = qs.parse(queryString);
  return values[key];
};
