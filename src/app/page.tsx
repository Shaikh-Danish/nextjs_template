import { ROOT_PATH } from "@/lib/constants";

import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <Header path={ROOT_PATH} />
      <main role="main" className="flex-1 h-full overflow-y-scroll bg-white px-2 py-3"></main>
    </div>
  );
}
