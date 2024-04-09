"use client";

import { useEffect, useState } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const updateIsDektop = () => {
      if (window.innerWidth >= 1280) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    updateIsDektop();

    window.addEventListener("resize", updateIsDektop);

    return () => {
      window.removeEventListener("resize", updateIsDektop);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
