import Layout from "@/components/layout/Layout";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.Js - Demo Meetups App",
  description: "Demo Next.JS Meetups APP",
};

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}
