import React from "react";

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
  data: {
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

const SkeletonRow = () => (
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

const UserTable: React.FC<Props> = ({ data, loading }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <h2 style={{ color: "var(--foreground)", fontWeight: "700", marginBottom: "1rem" }}>
        Lista de Usuários
      </h2>
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
          {loading
            ? Array(5)
                .fill(0)
                .map((_, idx) => <SkeletonRow key={idx} />)
            : data?.results.map((user) => (
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
                  <td style={{ padding: "12px 16px" }}>
                    {`${user.name.title} ${user.name.first} ${user.name.last}`}
                  </td>
                  <td style={{ padding: "12px 16px", textTransform: "capitalize", color: "var(--text-secondary)" }}>
                    {user.gender}
                  </td>
                  <td style={{ padding: "12px 16px", color: "var(--link)" }}>{user.email}</td>
                  <td style={{ padding: "12px 16px", color: "var(--text-secondary)" }}>
                    {new Date(user.dob.date).toLocaleDateString()}
                  </td>
                  <td style={{ padding: "12px 16px" }}>{user.dob.age}</td>
                  <td style={{ padding: "12px 16px", color: "var(--text-secondary)" }}>{user.location.country}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
