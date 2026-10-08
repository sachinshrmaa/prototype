import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-page py-24 md:py-36">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">This page doesn&apos;t exist.</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        It may have moved when we rebuilt the website. These links should help you find what you need.
      </p>
      <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
        <li><Link href="/" className="link-arrow">Home <ArrowRight /></Link></li>
        <li><Link href="/services" className="link-arrow">Services <ArrowRight /></Link></li>
        <li><Link href="/contact" className="link-arrow">Contact <ArrowRight /></Link></li>
      </ul>
    </section>
  );
}
