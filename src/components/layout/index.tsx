import { ReactNode } from "react";
import Navbar from "../navbar";

import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}
