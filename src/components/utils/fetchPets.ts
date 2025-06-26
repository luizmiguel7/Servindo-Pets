export const fetchAllPets = async () => {
  try {
    const response = await fetch(
      "https://mini-projeto-m4-am8g.onrender.com/pets"
    );
    if (!response.ok) throw new Error("Erro ao buscar pets");
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar pets:", error);
    return [];
  }
};

export const fetchAvailablePets = async () => {
  try {
    const response = await fetch(
      "https://mini-projeto-m4-am8g.onrender.com/pets/listAvailable"
    );
    if (!response.ok) throw new Error("Erro ao buscar pets disponíveis");
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar pets disponíveis:", error);
    return [];
  }
};

export const fetchPetByName = async (nome: string) => {
  try {
    const response = await fetch(
      `https://mini-projeto-m4-am8g.onrender.com/pets/listOne/${encodeURIComponent(
        nome
      )}`
    );
    if (!response.ok) throw new Error("Erro ao buscar pet");
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar pet:", error);
    return null;
  }
};
