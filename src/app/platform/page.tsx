import PlatformPage from "@/components/PlatformPage";

import { DataProvider } from "@/context/data.context";

const Platform = () => {
  return (
    <DataProvider>
      <PlatformPage />
    </DataProvider>
  );
};

export default Platform;
