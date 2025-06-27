import EventsList from "@/components/ui/EventsList";
import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideBar />
          <EventsList />
        </div>
      </div>
    </div>
  );
}
