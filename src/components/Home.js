import { useNavigate } from 'react-router-dom';

const DASHBOARDS = [
  {
    id: 'command-center',
    title: 'Command Center',
    subtitle: 'Sales & Job Overview',
    description: 'Live job status across all active projects — progress, billing, labor burn, and rep performance at a glance.',
    icon: '⚡',
    accent: '#185FA5',
    accentLight: '#E6F1FB',
    path: '/command-center',
    tags: ['Monday.com', 'QuickBooks', 'TSheets'],
  },
  {
    id: 'ar-billing',
    title: 'A/R & Billing',
    subtitle: 'Accounts Receivable',
    description: 'Outstanding invoices, aging buckets, collections status, and payment tracking by client and job.',
    icon: '💳',
    accent: '#27500A',
    accentLight: '#EAF3DE',
    path: '/ar-billing',
    tags: ['QuickBooks'],
  },
  {
    id: 'orders',
    title: 'Orders & Purchasing',
    subtitle: 'Procurement Tracker',
    description: 'Parts on order, lead times, PO status by vendor, and inventory needs across all open jobs.',
    icon: '📦',
    accent: '#C2410C',
    accentLight: '#FFF7ED',
    path: '/orders',
    tags: ['Monday.com', 'QuickBooks'],
  },
  {
    id: 'profitability',
    title: 'Profitability',
    subtitle: 'CFO View',
    description: 'Gross margin, labor efficiency, overhead recovery, and project-level P&L across the portfolio.',
    icon: '📊',
    accent: '#3C3489',
    accentLight: '#EEEDFE',
    path: '/profitability',
    tags: ['QuickBooks', 'TSheets'],
  },
  {
    id: 'tech-field',
    title: 'Tech Field',
    subtitle: 'Field Operations',
    description: 'Technician schedules, job assignments, hours logged, callbacks, and field productivity metrics.',
    icon: '🔧',
    accent: '#854F0B',
    accentLight: '#FAEEDA',
    path: '/tech-field',
    tags: ['Monday.com', 'TSheets'],
  },
  {
    id: 'sales-pipeline',
    title: 'Sales Pipeline',
    subtitle: 'Opportunity Tracker',
    description: 'Weighted pipeline by stage, rep, and close date — with win rates, proposal volume, and forecast.',
    icon: '🎯',
    accent: '#0A8754',
    accentLight: '#E1F5EE',
    path: '/sales-pipeline',
    tags: ['Monday.com'],
  },
];

export default function Home({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
        .dash-card { transition: box-shadow 0.18s, transform 0.18s; }
        .dash-card:hover { box-shadow: 0 8px 28px rgba(13,27,42,0.13) !important; transform: translateY(-2px); }
        .dash-card:active { transform: translateY(0); }
        .tag { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 20px; background: #F1F3F5; color: #495057; letter-spacing: 0.03em; }
        .enter-btn { transition: background 0.15s; }
        .enter-btn:hover { background: #1a2f47 !important; }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.headerBrand}>
            <img
              src={process.env.PUBLIC_URL + '/logo.jpg'}
              alt="Oasis Luxury Smart Homes"
              style={styles.headerLogo}
            />
            <div style={styles.headerSub}>MIRAGE INTELLIGENCE PORTAL</div>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.liveRow}>
              <span style={styles.liveDot} />
              <span style={styles.liveText}>Live data</span>
            </div>
            <button onClick={onLogout} style={styles.logoutBtn}>
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.heroTitle}>Dashboards</h1>
          <p style={styles.heroSub}>
            Six live views across sales, operations, field, and finance — all pulling from Monday.com, QuickBooks, and TSheets.
          </p>
        </div>
      </div>

      {/* Dashboard grid */}
      <main style={styles.main}>
        <div style={styles.grid}>
          {DASHBOARDS.map(d => (
            <div
              key={d.id}
              className="dash-card"
              onClick={() => navigate(d.path)}
              style={styles.card}
            >
              <div style={{ ...styles.cardAccent, background: d.accentLight }}>
                <span style={styles.cardIcon}>{d.icon}</span>
              </div>
              <div style={styles.cardBody}>
                <div style={styles.cardTitleRow}>
                  <div>
                    <div style={styles.cardTitle}>{d.title}</div>
                    <div style={styles.cardSubtitle}>{d.subtitle}</div>
                  </div>
                  <div style={{ ...styles.cardDot, background: d.accent }} />
                </div>
                <p style={styles.cardDesc}>{d.description}</p>
                <div style={styles.cardFooter}>
                  <div style={styles.tagsRow}>
                    {d.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <button
                    className="enter-btn"
                    style={styles.enterBtn}
                    onClick={e => { e.stopPropagation(); navigate(d.path); }}
                  >
                    Open →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={styles.footer}>
        <span>Oasis Luxury Smart Homes · Internal Use Only · {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

const styles = {
  root: {
    minHeight: '100vh',
    background: '#F4F6F8',
    fontFamily: "'DM Sans', sans-serif",
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    background: '#0D1B2A',
    padding: '0 32px',
    height: 72,
    display: 'flex',
    alignItems: 'center',
  },
  headerInner: {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBrand: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  headerLogo: {
    height: 48,
    width: 'auto',
    objectFit: 'contain',
  },
  headerSub: {
    fontSize: 9,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginTop: 2,
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  liveRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#1D9E75',
    display: 'inline-block',
  },
  liveText: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: '0.04em',
  },
  logoutBtn: {
    background: 'rgba(255,255,255,0.08)',
    border: 'none',
    color: 'rgba(255,255,255,0.6)',
    padding: '5px 12px',
    borderRadius: 6,
    fontSize: 12,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
  },
  hero: {
    background: '#0D1B2A',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    padding: '28px 32px 32px',
  },
  heroInner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  heroTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 36,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 400,
  },
  heroSub: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
    maxWidth: 560,
    lineHeight: 1.6,
  },
  main: {
    flex: 1,
    padding: '32px 32px',
  },
  grid: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: 16,
  },
  card: {
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #E9ECEF',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(13,27,42,0.06)',
    display: 'flex',
    flexDirection: 'column',
  },
  cardAccent: {
    padding: '20px 20px 16px',
    display: 'flex',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 28,
  },
  cardBody: {
    padding: '0 20px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    flex: 1,
  },
  cardTitleRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 600,
    color: '#212529',
    lineHeight: 1.2,
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#868E96',
    marginTop: 2,
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
  cardDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    marginTop: 6,
    flexShrink: 0,
  },
  cardDesc: {
    fontSize: 13,
    color: '#495057',
    lineHeight: 1.55,
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: 4,
  },
  tagsRow: {
    display: 'flex',
    gap: 5,
    flexWrap: 'wrap',
  },
  enterBtn: {
    background: '#0D1B2A',
    color: '#fff',
    border: 'none',
    padding: '6px 14px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    flexShrink: 0,
  },
  footer: {
    padding: '16px 32px',
    textAlign: 'center',
    fontSize: 11,
    color: '#ADB5BD',
    borderTop: '1px solid #E9ECEF',
    background: '#fff',
  },
};
