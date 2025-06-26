export const getPetCardColor = (raca = "") => {
  const colors = [
    "from-purple-400 to-pink-400",
    "from-blue-400 to-purple-400",
    "from-pink-400 to-red-400",
    "from-green-400 to-blue-400",
    "from-yellow-400 to-orange-400",
    "from-indigo-400 to-purple-400",
  ];
  const hash = raca
    ? raca.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    : 0;
  return colors[hash % colors.length];
};

export const getStatusBadge = (status = "") => {
  const statusMap: Record<string, { text: string; color: string }> = {
    disponivel: { text: "Disponível", color: "bg-green-100 text-green-800" },
    disponível: { text: "Disponível", color: "bg-green-100 text-green-800" },
    adotado: { text: "Adotado", color: "bg-gray-100 text-gray-800" },
    reservado: { text: "Reservado", color: "bg-yellow-100 text-yellow-800" },
  };
  return (
    statusMap[status.toLowerCase()] || {
      text: status || "N/A",
      color: "bg-gray-100 text-gray-800",
    }
  );
};
