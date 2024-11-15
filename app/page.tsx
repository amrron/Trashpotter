"use client";

import Image from "next/image";
import Title from "./components/elements/Title";
import SampahOrganik from "./components/elements/SampahOrganik";
import SampahAnorganik from "./components/elements/SampahAnorganik";
import Plastik from "./components/elements/Plastik";
import Organik from "./components/elements/Organik";
import Kertas from "./components/elements/Kertas";
import Berbahaya from "./components/elements/Berbahaya.jsx";
import BankSampah from "./components/components/BankSampah";
import ScanFloating from "./components/elements/ScanFloating";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mb-4 flex gap-8 rounded-md bg-hijau p-4">
        <div className="">
          <h1 className="mb-3 text-sm font-black text-putih">
            Scan Sampahmu yuk!
          </h1>
          <p className="mb-3 font-poppins text-xs text-putih">
            Scan semua sampah yang kamu pegang pada fitur scan traspoter ya!
          </p>
          <Link
            href={"/scan-sampah"}
            className="inline-flex items-center gap-3 font-poppins text-xs text-putih"
          >
            <span>Mulai Scan</span>
            <svg
              className="size-6 text-putih"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
        <Image
          src="/images/Component 1.png" // path ke gambar
          alt="Scan sampah"
          width={132} // lebar gambar
          height={132} // tinggi gambar
        />
      </div>

      <div className="">
        <Title text="Sampah Terbaru" />
        <div className="flex justify-around p-8">
          <SampahOrganik />
          <SampahAnorganik />
        </div>
      </div>

      <div className="">
        <Title text="Kategori Sampah" />
        <div className="flex w-full justify-between p-4">
          <Plastik />
          <Organik />
          <Kertas />
          <Berbahaya />
        </div>
      </div>

      <div className="">
        <Title text="Bank Sampah" />
        <div className="mt-4 flex w-full flex-col">
          <BankSampah />
          <BankSampah />
          <BankSampah />
          <BankSampah />
        </div>
      </div>
      <Link
        href={"/scan-sampah"}
        className="fixed bottom-5 left-1/2 -translate-x-1/2"
      >
        <ScanFloating />
      </Link>
    </>
  );
}
