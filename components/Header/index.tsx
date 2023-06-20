"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Logo from "@/public/next.svg";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <Image src={Logo} alt={"메인로고"} width={100} priority />
      <ul className={styles.header_ul}>
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/sub")}>Sub Page</li>
        <li onClick={() => router.push("/store")}>Store Example</li>
        <li onClick={() => router.push("/i18n")}>I18n Example</li>
        <li onClick={() => router.push("/fetch")}>Data Fetch</li>
        <li onClick={() => router.push("/image")}>Image import</li>
        <li onClick={() => router.push("/qwer1234")}>404 page</li>
      </ul>
    </header>
  );
}

export default Header;
