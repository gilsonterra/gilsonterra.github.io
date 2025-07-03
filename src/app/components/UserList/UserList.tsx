import React from 'react';

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
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      height: 60,
    }}
  >
    {Array(7)
      .fill(0)
      .map((_, i) => (
        <td key={i} style={{ padding: '12px 16px' }}>
          <div
            style={{
              backgroundColor: '#ddd',
              borderRadius: '4px',
              height: '20px',
              width: i === 0 ? 50 : '100%',
              margin: 'auto',
            }}
          />
        </td>
      ))}
  </tr>
);

const UserTable: React.FC<Props> = ({ data, loading }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <h2 style={{ color: '#222', fontWeight: '700', marginBottom: '1rem' }}>
        Lista de Usuários
      </h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: '0 12px',
          minWidth: '700px',
          backgroundColor: '#fefefe',
          color: '#111',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          fontSize: '14px',
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#e8f0fe',
              color: '#1a237e',
              textAlign: 'left',
              fontWeight: '600',
              fontSize: '15px',
            }}
          >
            <th style={{ padding: '12px 16px' }}>Foto</th>
            <th style={{ padding: '12px 16px' }}>Nome</th>
            <th style={{ padding: '12px 16px' }}>Gênero</th>
            <th style={{ padding: '12px 16px' }}>Email</th>
            <th style={{ padding: '12px 16px' }}>Data de Nascimento</th>
            <th style={{ padding: '12px 16px' }}>Idade</th>
            <th style={{ padding: '12px 16px' }}>País</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? // Mostra 3 skeleton rows enquanto carrega (você pode ajustar a quantidade)
            Array(5)
              .fill(0)
              .map((_, idx) => <SkeletonRow key={idx} />)
            : data?.results.map((user) => (
              <tr
                key={user.login.uuid}
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)',
                  borderRadius: '2px',
                  fontWeight: '500',
                }}
              >
                <td style={{ padding: '12px 16px' }}>
                  <img
                    src={user.picture.thumbnail}
                    alt="Foto"
                    style={{ borderRadius: '10px', width: 50, height: 50, objectFit: 'cover' }}
                  />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  {`${user.name.title} ${user.name.first} ${user.name.last}`}
                </td>
                <td style={{ padding: '12px 16px', textTransform: 'capitalize' }}>
                  {user.gender}
                </td>
                <td style={{ padding: '12px 16px', color: '#1565c0' }}>{user.email}</td>
                <td style={{ padding: '12px 16px' }}>
                  {new Date(user.dob.date).toLocaleDateString()}
                </td>
                <td style={{ padding: '12px 16px' }}>{user.dob.age}</td>
                <td style={{ padding: '12px 16px' }}>{user.location.country}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
