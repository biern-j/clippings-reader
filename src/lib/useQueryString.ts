import { useState, useCallback } from "react";
import { getQueryStringValue, setQueryStringValue } from "./queryString";

export const useQueryString = (key: string, value: string) => {
  const [urlValue, setUrlValue] = useState(getQueryStringValue(key));
  console.log("key", key, "value", value);
  setQueryStringValue(key, value);
  return [urlValue];
};
