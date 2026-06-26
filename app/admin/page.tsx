import type { Metadata } from "next";
import { AdminPipeline } from "@/components/AdminPipeline";

export const metadata: Metadata = {
  title: "Admin Iris | LQF Farmacêutica",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return <AdminPipeline />;
}
