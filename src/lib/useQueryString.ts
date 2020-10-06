import { useState, useCallback } from "react";
import { getQueryStringValue, setQueryStringValue } from "./queryString";

export const useQueryString = (key: string, value: string) => {
  const [urlValue, setUrlValue] = useState(getQueryStringValue(key));
  setQueryStringValue(key, value);
  return [urlValue];
};
