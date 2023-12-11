function lista2() {
  const nomes = ["Juan", "Caio", "Luiza", "Helena"];
  return (
    <>
      <h1> Lista de nomes legais</h1>
      {nomes.map((nomes) => (
        <p>{nomes}</p>
      ))}
    </>
  );
}
export default lista2;
