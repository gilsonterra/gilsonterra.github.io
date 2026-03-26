'use client'
import { useQuery } from "@tanstack/react-query";
import TypewriterTitle from "../components/TypewriterTitle/TypewriterTitle";
import UserList from "../components/UserList/UserList";

const OptimisticUiPages: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const { data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
    staleTime: Infinity,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        padding: "1rem clamp(1rem, 4vw, 2rem) 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem 0",
          flexWrap: "wrap",
          gap: "0.5rem",
          textAlign: "center",
        }}
      >
        <TypewriterTitle text="TanStack Query" size="clamp(2rem, 8vw, 3rem)" />
      </div>

      <UserList data={data} loading={isPending} />
    </div>
  );
};

export default OptimisticUiPages;
