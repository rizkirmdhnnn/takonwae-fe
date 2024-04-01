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

function DashboardPage() {
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Pertanyaan #1
              </CardTitle>
              <CardDescription>23 Feb 2023, 12:34</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center ">
              <p className="text-l">Kamu udah punya pacar belum?</p>
              <Button variant={"outline"}>Sudah dibaca</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Pertanyaan #1
              </CardTitle>
              <CardDescription>23 Feb 2023, 12:34</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center ">
              <p className="text-l">Kamu udah punya pacar belum?</p>
              <Button variant={"outline"}>Sudah dibaca</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Pertanyaan #1
              </CardTitle>
              <CardDescription>23 Feb 2023, 12:34</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center ">
              <p className="text-l">Kamu udah punya pacar belum?</p>
              <Button variant={"outline"}>Sudah dibaca</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Pertanyaan #1
              </CardTitle>
              <CardDescription>23 Feb 2023, 12:34</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center ">
              <p className="text-l">Kamu udah punya pacar belum?</p>
              <Button variant={"outline"}>Sudah dibaca</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Pertanyaan #1
              </CardTitle>
              <CardDescription>23 Feb 2023, 12:34</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center ">
              <p className="text-l">Kamu udah punya pacar belum?</p>
              <Button variant={"outline"}>Sudah dibaca</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Pertanyaan #1
              </CardTitle>
              <CardDescription>23 Feb 2023, 12:34</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center ">
              <p className="text-l">Kamu udah punya pacar belum?</p>
              <Button variant={"outline"}>Sudah dibaca</Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center my-5">
          <Button>Lihat selengkapnya</Button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
