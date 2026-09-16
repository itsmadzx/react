function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Barbixas</h1>

        <nav>
          <ul style={styles.navList}>
            <li><a href="#home" style={styles.navLink}>Início</a></li>
            <li><a href="#agendamento" style={styles.navLink}>Agendamento</a></li>
            <li><a href="#servicos" style={styles.navLink}>Serviços</a></li>
            <li><a href="#contato" style={styles.navLink}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'rgb(15, 23, 42, 0.8)',
    color: '#ffffff',
    padding: '20px 30px',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  logo: {
    margin: 0,
    fontSize: '2rem',
    color: '#60a5fa',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '25px',
  },
  navLink: {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
  },
};

export default Header;