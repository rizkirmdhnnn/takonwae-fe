"use client";
import Navbar from "@/components/landingPage/navbar";
import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const router = useRouter();
  const [messages, setMessages] = React.useState([]);

  useEffect(() => {
    const token = Cookies.get("takonwae-token");

    async function fetchData() {
      const res = await fetch("http://localhost:8080/api/messages", {
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) {
        router.push("/auth/login");
      }

      const data = await res.json();
      console.log(data.Data);
      setMessages(data.Data);
      // Lakukan sesuatu dengan data
    }

    fetchData();
  }, [router]);
  return (
    <div>
      <Navbar />
      <div className="px-6 py-3 md:px-[100px] xl:px-[250px]">
        <div className="flex flex-col gap-2 my-3">
          <h1 className="text-2xl font-bold">Daftar Pertanyaan</h1>
          <p className="text-muted-foreground">
            Lihat daftar pernyanaan masuk yang tersedia
          </p>
        </div>
        <Separator className="my-5" />
        <div className="flex gap-5 flex-col md:flex-row xl;flex-row">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-l font-medium">
                Total kunjungan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342.324</div>
              <p className="text-xs text-muted-foreground">
                kunjungan hari ini bertambah 2345+
              </p>
            </CardContent>
          </Card>
          <Card className="md:max-w-[300px] xl:max-w-[300px] ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-l font-medium">
                Link untuk kamu share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-l font-bold overflow-hidden">
                <a href="https://takonwae.id/rizkirmdhn" className="underline">
                  https://takonwae.id/rizkirmdhn
                </a>
              </div>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={"/p/rizkirmdhn"}
              >
                Salin Link
              </Link>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={"/p/rizkirmdhn"}
              >
                Buka halaman pertanyaan
              </Link>
            </CardContent>
          </Card>
        </div>
        <h1 className="text-2xl font-bold mt-10 mb-3">
          Ada Pertanyaan yang belum dijawab
        </h1>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
          {messages.map((message) => (
            <Card key={message.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">
                  {message.id}
                </CardTitle>
                <CardDescription>{message.created_at}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center ">
                <p className="text-l">{message.content}</p>
                <Button variant={"outline"}>Sudah dibaca</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-center my-5">
          <Button>Lihat selengkapnya</Button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
