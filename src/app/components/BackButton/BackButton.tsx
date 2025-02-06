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
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "10px 0",
      }}
    >
      <ArrowLeftIcon width={18} height={18} />
      {text}
    </button>
  );
};

export default BackButton;
