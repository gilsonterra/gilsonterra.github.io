import React from "react";
import styled, { keyframes } from "styled-components";

type UserData = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    country: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
};

type Props = {
  data?: {
    results: UserData[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  };
  loading: boolean;
};

const shimmer = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const DesktopTable = styled.div`
  overflow-x: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileCards = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    gap: 1rem;
  }
`;

const MobileCard = styled.article`
  background: var(--background-elevated);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow-sm);
  padding: 1rem;
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
`;

const MobileGrid = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const MobileField = styled.div`
  display: grid;
  gap: 0.2rem;
`;

const MobileLabel = styled.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const MobileValue = styled.span`
  color: var(--foreground);
  overflow-wrap: anywhere;
`;

const SkeletonBlock = styled.div<{ $width?: string; $height?: string; $rounded?: string }>`
  background: linear-gradient(90deg, var(--border) 0%, var(--background-muted) 50%, var(--border) 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
  border-radius: ${(props) => props.$rounded ?? "10px"};
  height: ${(props) => props.$height ?? "18px"};
  width: ${(props) => props.$width ?? "100%"};
`;

const TableSkeletonRow = () => (
  <tr
    style={{
      backgroundColor: "var(--background-muted)",
      borderRadius: "16px",
      height: 60,
    }}
  >
    {Array(7)
      .fill(0)
      .map((_, i) => (
        <td key={i} style={{ padding: "12px 16px" }}>
          <div
            style={{
              backgroundColor: "var(--border)",
              borderRadius: "8px",
              height: "20px",
              width: i === 0 ? 50 : "100%",
              margin: "auto",
            }}
          />
        </td>
      ))}
  </tr>
);

const MobileSkeletonCard = () => (
  <MobileCard>
    <MobileHeader>
      <SkeletonBlock $width="56px" $height="56px" $rounded="16px" />
      <div style={{ display: "grid", gap: "0.45rem", width: "100%" }}>
        <SkeletonBlock $width="65%" />
        <SkeletonBlock $width="40%" />
      </div>
    </MobileHeader>
    <MobileGrid>
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <MobileField key={idx}>
            <SkeletonBlock $width="28%" $height="12px" />
            <SkeletonBlock $width={idx === 1 ? "82%" : "58%"} />
          </MobileField>
        ))}
    </MobileGrid>
  </MobileCard>
);

const formatName = (user: UserData) => `${user.name.title} ${user.name.first} ${user.name.last}`;

const formatBirthDate = (date: string) => new Date(date).toLocaleDateString();

const UserTable: React.FC<Props> = ({ data, loading }) => {
  const users = data?.results ?? [];
  const showSkeleton = loading && users.length === 0;

  return (
    <Wrapper>
      <h2 style={{ color: "var(--foreground)", fontWeight: "700", marginBottom: "1rem" }}>
        Lista de Usuários
      </h2>

      <DesktopTable>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 12px",
            minWidth: "700px",
            backgroundColor: "transparent",
            color: "var(--foreground)",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "var(--accent-soft)",
                color: "var(--accent-hover)",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              <th style={{ padding: "12px 16px" }}>Foto</th>
              <th style={{ padding: "12px 16px" }}>Nome</th>
              <th style={{ padding: "12px 16px" }}>Gênero</th>
              <th style={{ padding: "12px 16px" }}>Email</th>
              <th style={{ padding: "12px 16px" }}>Data de Nascimento</th>
              <th style={{ padding: "12px 16px" }}>Idade</th>
              <th style={{ padding: "12px 16px" }}>País</th>
            </tr>
          </thead>
          <tbody>
            {showSkeleton
              ? Array(5)
                  .fill(0)
                  .map((_, idx) => <TableSkeletonRow key={idx} />)
              : users.map((user) => (
                  <tr
                    key={user.login.uuid}
                    style={{
                      backgroundColor: "var(--background-elevated)",
                      boxShadow: "var(--shadow-sm)",
                      borderRadius: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <td style={{ padding: "12px 16px" }}>
                      <img
                        src={user.picture.thumbnail}
                        alt="Foto"
                        style={{ borderRadius: "14px", width: 50, height: 50, objectFit: "cover" }}
                      />
                    </td>
                    <td style={{ padding: "12px 16px" }}>{formatName(user)}</td>
                    <td style={{ padding: "12px 16px", textTransform: "capitalize", color: "var(--text-secondary)" }}>
                      {user.gender}
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--link)", overflowWrap: "anywhere" }}>{user.email}</td>
                    <td style={{ padding: "12px 16px", color: "var(--text-secondary)" }}>
                      {formatBirthDate(user.dob.date)}
                    </td>
                    <td style={{ padding: "12px 16px" }}>{user.dob.age}</td>
                    <td style={{ padding: "12px 16px", color: "var(--text-secondary)" }}>{user.location.country}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </DesktopTable>

      <MobileCards>
        {showSkeleton
          ? Array(5)
              .fill(0)
              .map((_, idx) => <MobileSkeletonCard key={idx} />)
          : users.map((user) => (
              <MobileCard key={user.login.uuid}>
                <MobileHeader>
                  <img
                    src={user.picture.thumbnail}
                    alt="Foto"
                    style={{ borderRadius: 16, width: 56, height: 56, objectFit: "cover", flexShrink: 0 }}
                  />
                  <div style={{ display: "grid", gap: "0.3rem", minWidth: 0 }}>
                    <strong style={{ color: "var(--foreground)", fontSize: "1rem" }}>{formatName(user)}</strong>
                    <span style={{ color: "var(--text-secondary)", textTransform: "capitalize" }}>{user.gender}</span>
                  </div>
                </MobileHeader>

                <MobileGrid>
                  <MobileField>
                    <MobileLabel>Email</MobileLabel>
                    <MobileValue style={{ color: "var(--link)" }}>{user.email}</MobileValue>
                  </MobileField>
                  <MobileField>
                    <MobileLabel>Data de Nascimento</MobileLabel>
                    <MobileValue>{formatBirthDate(user.dob.date)}</MobileValue>
                  </MobileField>
                  <MobileField>
                    <MobileLabel>Idade</MobileLabel>
                    <MobileValue>{user.dob.age}</MobileValue>
                  </MobileField>
                  <MobileField>
                    <MobileLabel>País</MobileLabel>
                    <MobileValue>{user.location.country}</MobileValue>
                  </MobileField>
                </MobileGrid>
              </MobileCard>
            ))}
      </MobileCards>
    </Wrapper>
  );
};

export default UserTable;
