export const formatPrice = (amount: number) => {
  // return new Intl.NumberFormat('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL'
  // }).format(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}