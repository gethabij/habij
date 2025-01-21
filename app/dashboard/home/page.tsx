import TodayFeed from "@/components/today-feed";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <main className="h-full flex flex-col justify-center container">
        <TodayFeed />
      </main>
    </div>
  );
}
