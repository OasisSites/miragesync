import { useNavigate } from 'react-router-dom';

export default function DashboardFrame({ src, title }) {
  const navigate = useNavigate();

  return (
    <div style={styles.root}>
      <div style={styles.topbar}>
        <div style={styles.left}>
          <button onClick={() => navigate('/')} style={styles.backBtn}>
            <span style={{ fontSize: 16, lineHeight: 1 }}>‹</span> All Dashboards
          </button>
          <span style={styles.divider} />
          <span style={styles.title}>{title}</span>
        </div>
        <div style={styles.right}>
          <span style={styles.liveDot} />
          <span style={styles.liveLabel}>LIVE</span>
        </div>
      </div>
      <iframe
        src={src}
        title={title}
        style={styles.frame}
        allowFullScreen
      />
    </div>
  );
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: "'DM Sans', sans-serif",
  },
  topbar: {
    height: 44,
    background: '#0D1B2A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    flexShrink: 0,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    color: '#fff',
    padding: '5px 12px',
    borderRadius: 6,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'background 0.15s',
  },
  divider: {
    width: 1,
    height: 18,
    background: 'rgba(255,255,255,0.2)',
    display: 'inline-block',
  },
  title: {
    fontSize: 13,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: '0.01em',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#1D9E75',
    display: 'inline-block',
    animation: 'pulse 2s infinite',
  },
  liveLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: '0.06em',
  },
  frame: {
    flex: 1,
    border: 'none',
    width: '100%',
  },
};
