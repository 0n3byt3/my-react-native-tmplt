//external dependencies
import { useMemo } from "react";
import { useTypedSelector } from "@store";
//external types dependencies
//internal dependencies
//internal types dependencies

/** get selected language by user hook */
export const useLang = () => {
  const data = useTypedSelector((state) => state.config.lang);

  return useMemo(() => data, [data]);
};