'use client'
import { useQuery } from "@tanstack/react-query";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import UserList from "../components/UserList/UserList";


const OptimisticUiPages: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ['users'],
    queryFn: fetchData,
    staleTime: Infinity,
    refetchInterval: 5000,
    refetchIntervalInBackground: true
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ display: "flex", justifyContent: "center", padding: '1rem 0', flexWrap: 'wrap', gap: '5px' }}>
        <DottedShadowText text="TanStack Query" size="3rem" />
      </div>

      <UserList data={data} loading={isLoading} />
    </div>
  );
};

export default OptimisticUiPages;
