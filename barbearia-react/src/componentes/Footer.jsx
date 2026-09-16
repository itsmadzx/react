function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.title}>Barbixas</h2>

      <div style={styles.info}>
        <span>📍 São Paulo - SP</span>
        <span>📞 (11) 99999-9999</span>
      </div>

      <small style={styles.copyright}>
        © 2026 Barbixas
      </small>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '30px 15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
    color: '#60a5fa',
  },
  subtitle: {
    margin: 0,
    fontSize: '0.95rem',
    color: '#cbd5e1',
  },
  info: {
    display: 'flex',
    gap: '20px',
    fontSize: '0.9rem',
    color: '#93c5fd',
    margin: '8px 0',
  },
  copyright: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
};

export default Footer;