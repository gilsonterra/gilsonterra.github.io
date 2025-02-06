export const parseDatePtBr = (date: string, mask = "DD/MM/YYYY"): string => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    throw new Error("Formato de data inválido. Use o formato YYYY-MM-DD.");
  }

  const [year, month, day] = date.split("-");

  const dataFormatada = mask
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day);

  return dataFormatada;
};
