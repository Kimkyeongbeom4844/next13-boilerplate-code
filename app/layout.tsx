import "@/assets/reset.css";
import "@/assets/global.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provider from "@/stores/Provider";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Provider>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
