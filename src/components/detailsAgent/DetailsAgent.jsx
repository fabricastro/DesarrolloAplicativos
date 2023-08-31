export const DetailsAgent = ({ agenteUuid }) => {
  const [agenteUuid, setAgenteUuid] = useState("");
  useEffect(() => {
    if (agenteUuid) {
      fetch(`https://valorant-api.com/v1/agents/${agenteUuid}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("La solicitud no fue exitosa.");
          }
          return res.json();
        })
        .then((res) => {
          setDatosAgente(res.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [agenteUuid]);
};
