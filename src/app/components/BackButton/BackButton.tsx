"use client";

import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  text: string;
};

const BackButton: React.FC<BackButtonProps> = ({ text }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        width: "fit-content",
        padding: "0.7rem 0.9rem",
        borderRadius: "999px",
        border: "1px solid var(--border)",
        background: "var(--background-elevated)",
        color: "var(--text-secondary)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <ArrowLeftIcon width={18} height={18} />
      {text}
    </button>
  );
};

export default BackButton;
