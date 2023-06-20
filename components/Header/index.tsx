"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/next.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <Link href={"https://nextjs.org/"} target={"_blank"}>
        <Image
          src={Logo}
          alt={"메인로고"}
          width={100}
          priority
          title={"메인로고"}
        />
      </Link>
      <ul className={styles.header_ul}>
        <Link href={"/"} prefetch={false}>
          Home
        </Link>
        <Link href={"/sub"} prefetch={false}>
          Sub Page
        </Link>
        <Link href={"/store"} prefetch={false}>
          Store Example
        </Link>
        {/* <Link href={"/i18n"} prefetch={false}>
          I18n Example
        </Link> */}
        <Link href={"/fetch"} prefetch={false}>
          Data Fetch
        </Link>
        <Link href={"/image"} prefetch={false}>
          Image import
        </Link>
        <ul>
          <li onClick={() => router.push("/children/Alpha")}>Alpha</li>
          <li onClick={() => router.push("/children/Bravo")}>Bravo</li>
          <li onClick={() => router.push("/children/Charlie")}>Charlie</li>
        </ul>
        <Link href={"/nextjs.org"} prefetch={false}>
          404 page
        </Link>
      </ul>
    </header>
  );
}
