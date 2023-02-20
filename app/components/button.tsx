import Link from "next/link";

export default function Button({ name }: any) {
  return (
    <Link
      href={`/${name.toLowerCase()}`}
      className="w-full md:w-1/3 py-3 md:py-4 button"
    >
      <p className="button-text text-lg">{name}</p>
    </Link>
  );
}
