export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '1rem',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Hello, Next.js!</h1>
      <p style={{ color: '#666' }}>This project has been migrated from Angular 14 to Next.js 15.</p>
    </main>
  );
}
