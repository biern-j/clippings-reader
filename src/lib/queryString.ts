import qs from "qs";
const setQueryStringWithoutPageReload = (qsValue: string) => {
  const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${qsValue}`;

  window.history.pushState({ path: newUrl }, "", newUrl);
  console.log("newUrl", newUrl);
};

export const setQueryStringValue = (key: string, value: string) => {
  const queryString = window.location.search;
  const values = qs.parse(queryString); // parse string to object
  const newQsValue = qs.stringify({ ...values, [key]: value });
  setQueryStringWithoutPageReload(`?${newQsValue}`);
  console.log(
    "queryString",
    queryString,
    "values",
    values,
    "newQsValue",
    newQsValue
  );
};

export const getQueryStringValue = (key: string) => {
  const queryString: string = window.location.search;
  const values = qs.parse(queryString);
  console.log("queryString", queryString, "getQueryStringValues", values);
  return values[key];
};
