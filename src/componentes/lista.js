function lista() {
  const Mercado = [
    { id: 1, name: "arroz", price: 12.5 },
    { id: 2, name: "Feijao", price: 17.5 },
    { id: 3, name: "Acucar", price: 2.5 },
    { id: 4, name: "Cafe", price: 5.5 },
  ];
  return (
    <>
      <h1> Renderizacao de listas </h1>
      {Mercado.map((Mercado) => (
        <p key={Mercado.id}>
          {Mercado.name} possui o preco R$ {Mercado.price}
        </p>
      ))}
    </>
  );
}
export default lista;
