import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main role="main" className="flex-1 h-full overflow-y-scroll px-2 py-3"></main>
    </div>
  );
}
