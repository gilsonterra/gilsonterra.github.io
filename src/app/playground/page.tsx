'use client'

import { Special_Elite } from "next/font/google";
import Link from "next/link";
import { StarIcon, ExclamationTriangleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import Spinner from "../components/Spinner/Spinner";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

const pages = [
  {
    href: "/performance-percebida",
    label: "Performance Percebida",
    icon: <Spinner size={34} />,
  },
  {
    href: "/error-boundary",
    label: "Error Boundary",
    icon: <ExclamationTriangleIcon color="#b45309" height={38} />,
  },
  {
    href: "/optimistic-ui",
    label: "Optimistic UI",
    icon: <StarIcon color="#ca8a04" height={38} />,
  },
  {
    href: "/tanstack-query",
    label: "TanStack Query",
    icon: <ArrowPathIcon color="#2563eb" height={38} />,
  },
] as const;

const PlaygroundPage = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", width: "100%" }}>
      {pages.map(({ href, label, icon }) => (
        <Link
          key={href}
          href={href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            minHeight: "64px",
            padding: "0.9rem 1.1rem",
            borderRadius: "4px",
            border: "1px solid rgba(135, 122, 97, 0.35)",
            background:
              "linear-gradient(180deg, rgba(252, 250, 244, 0.98) 0%, rgba(240, 235, 225, 0.96) 100%)",
            boxShadow: "0 8px 18px rgba(70, 58, 36, 0.08)",
            color: "var(--foreground)",
            fontSize: "1.02rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: "6px",
              border: "1px dashed rgba(135, 122, 97, 0.22)",
              borderRadius: "2px",
              pointerEvents: "none",
            }}
          />
          {icon}
          <span
            className={specialElite.className}
            style={{ position: "relative", zIndex: 1, letterSpacing: "0.02em" }}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PlaygroundPage;
