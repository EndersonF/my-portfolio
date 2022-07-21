import logo from '../../public/gif.gif';

export default function Custom404() {
  return (
    <div
      style={{
        backgroundColor: '#0EE7B7',
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
      }}
    >
      <h1>404 - Página Não Encontrada</h1>
      <img className="logo404" src={logo} alt="logo404" />
    </div>
  );
}
