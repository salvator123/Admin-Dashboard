import AnalyticsChart from "@/components/ui/dashboard/AnalyticsChart";
import DashboardCard from "@/components/ui/dashboard/DashboardCard";
import PostTable from "@/components/ui/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";

export default function Home() {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
      <DashboardCard
        title="Posts"
        count={100}
        icon={<Newspaper className="text-slate-500" size={72} />}
      />
      <DashboardCard
        title="Categories"
        count={12}
        icon={<Folder className="text-slate-500" size={72} />}
      />
      <DashboardCard
        title="Users"
        count={280}
        icon={<Users className="text-slate-500" size={72} />}
      />
      <DashboardCard
        title="Comments"
        count={1000}
        icon={<MessageCircle className="text-slate-500" size={72} />}
      />
    </div>
    <AnalyticsChart />

    <PostTable title="Latest Posts" limit={5} />

    
    </>
  );
}
