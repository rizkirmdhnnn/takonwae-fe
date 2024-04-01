import React from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

function Hero() {
  return (
    <div className="px-6 py-3 md:px-[100px] xl:px-[250px]">
      <section className="w-full py-12">
        <div className="containermd:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/FFFFFF.png"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none text-primary">
                 Takonwae - Tempat bertanya tanpa takut ketahuan siapa kamu
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Kalo orang cupu make platform ini biasanya buat ngungkapin perasaan si, semoga kalian tidak
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className={buttonVariants({ variant: "default" })}
                  href={"/auth/login"}
                >
                  Klik ini untuk mencoba
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
