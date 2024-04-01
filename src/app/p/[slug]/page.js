import Navbar from "@/components/landingPage/navbar";
import Image from "next/image";

export default function Page({ params }) {
  return (
    <div>
      <Navbar />

      <div>
        <main class="flex flex-col gap-6 items-center py-16 px-4 md:px-8">
          <div>
            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none border">
              <img
                class="aspect-square h-full w-full bg-white"
                alt="Achmad Rizki Ramadhan"
                src="https://lh3.googleusercontent.com/a/ACg8ocIVuNksp-oTNa26b7xAz-vbt1bRYBkvScHN7cYpYcTmMkAC=s96-c"
                width={200}
                height={200}
              />
            </span>
          </div>
          <h1 class="text-3xl font-extrabold text-center">
            Tanya ke Achmad Rizki Ramadhan
          </h1>
          <form class="w-full md:w-2/3 space-y-6">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for=":R1knnnkpda:-form-item"
              >
                Pertanyaan
              </label>
              <textarea
                class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tulis pertanyaan yang ingin disampaikan ke Achmad Rizki Ramadhan"
                rows="7"
                name="q"
                id=":R1knnnkpda:-form-item"
                aria-describedby=":R1knnnkpda:-form-item-description"
                aria-invalid="false"
              ></textarea>
              <p
                id=":R1knnnkpda:-form-item-description"
                class="text-sm text-muted-foreground flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-lock w-4 h-4"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>{" "}
                Pertanyaanmu akan disampaikan secara anonim
              </p>
            </div>
            <div class="flex justify-center items-center">
              <button
                class="inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-send-horizontal mr-2 h-4 w-4"
                >
                  <path d="m3 3 3 9-3 9 19-9Z"></path>
                  <path d="M6 12h16"></path>
                </svg>
                <span>Kirim pertanyaan</span>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
