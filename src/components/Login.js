import { useState } from 'react';

const CORRECT_PASSWORD = process.env.REACT_APP_DASHBOARD_PASSWORD || 'oasis2025';

export default function Login({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('mirage_auth', '1');
      onSuccess();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => setError(false), 2000);
    }
  }

  return (
    <div style={styles.root}>
      <div style={styles.card} className={shaking ? 'shake' : ''}>
        <div style={styles.brand}>
          <span style={styles.wordmark}>Oasis</span>
          <span style={styles.sub}>MIRAGE INTELLIGENCE</span>
        </div>
        <p style={styles.tagline}>Internal dashboard portal — authorized access only.</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ ...styles.input, ...(error ? styles.inputError : {}) }}
            autoFocus
          />
          {error && <p style={styles.errorMsg}>Incorrect password. Try again.</p>}
          <button type="submit" style={styles.btn}>
            Enter
          </button>
        </form>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
        .shake { animation: shake 0.4s ease; }
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    minHeight: '100vh',
    background: '#0D1B2A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'DM Sans', sans-serif",
  },
  card: {
    background: '#fff',
    borderRadius: 14,
    padding: '40px 44px',
    width: 380,
    boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
    textAlign: 'center',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    marginBottom: 20,
  },
  wordmark: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 32,
    color: '#0D1B2A',
    letterSpacing: '0.01em',
  },
  sub: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: '#868E96',
    textTransform: 'uppercase',
  },
  tagline: {
    fontSize: 13,
    color: '#868E96',
    marginBottom: 28,
    lineHeight: 1.5,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    borderRadius: 8,
    border: '1.5px solid #E9ECEF',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.15s',
    fontFamily: "'DM Sans', sans-serif",
    color: '#212529',
    background: '#F8F9FA',
  },
  inputError: {
    borderColor: '#DC2626',
    background: '#FEE2E2',
  },
  errorMsg: {
    fontSize: 12,
    color: '#DC2626',
    textAlign: 'left',
    marginTop: -4,
  },
  btn: {
    width: '100%',
    padding: '12px',
    background: '#0D1B2A',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    marginTop: 4,
    transition: 'background 0.15s',
  },
};
