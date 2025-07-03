'use client'

import Link from "next/link";
import BrokenNeonText from "../components/BrokenNeonText/BrokenNeonText";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import Spinner from "../components/Spinner/Spinner";
import { StarIcon, ExclamationTriangleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

const PlaygroundPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DottedShadowText text="Playground" size="3rem" />
      </div>
      <ul
        style={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "1fr",
        }}
      >
        <li>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span>Efeitos em texto</span>
            <DottedShadowText text="Efeito sombra animada" />
            <BrokenNeonText />
          </div>
        </li>
        <li>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <span>Páginas</span>
            <Link href='/performance-percebida' style={{ padding: "5px" }}>
              <div style={{ fontSize: '1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Spinner size={40} />Performance Percebida
              </div>
            </Link>
            <Link href='/error-boundary' style={{ padding: "5px" }}>
              <div style={{ fontSize: '1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ExclamationTriangleIcon color="red" height={50} /> Error Boundary
              </div>
            </Link>
            <Link href='/optimistic-ui' style={{ padding: "5px" }}>
              <div style={{ fontSize: '1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <StarIcon color="yellow" height={50} /> Optimistic UI
              </div>
            </Link>
            <Link href='/tanstack-query' style={{ padding: "5px" }}>
              <div style={{ fontSize: '1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ArrowPathIcon color="purple" height={50} /> TanStack Query
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div >
  );
};

export default PlaygroundPage;
