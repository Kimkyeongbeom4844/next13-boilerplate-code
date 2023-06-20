import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Go Home</Link>
      </p>
    </div>
  );
}
