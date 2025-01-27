/**
 * Extracts the values from the update booking form
 * @returns the Updated booking form
 */
export function getUpdateBknFormData() {
  const activities = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((checkbox) =>
    parseInt((checkbox as HTMLInputElement).value)
  );

  console.log(activities);

  const activityType = [
    {
      id: 1,
      name: "STORIA DI CASCINA Carla e Bruno CACCIA",
      description: "Un racconto avvincente della storia della Cascina e del suo impegno contro le mafie",
    },
    {
      id: 2,
      name: "BRUNO CACCIA",
      description: " Laboratorio sulla figura di Bruno Caccia sotto il profilo istituzionale e umano",
    },
    {
      id: 3,
      name: "INTRODUZIONE AL TEMA MAFIA",
      description: "Attività introduttiva volta a definire, conoscere e far conoscere il fenomeno mafioso",
    },
    {
      id: 4,
      name: "I BENI CONFISCATI",
      description: "Attività di approfondimento sui beni confiscati, delle leggi sulla confisca dei beni e delle novità legislative",
    },
    {
      id: 5,
      name: "LE MAFIE IN PIEMONTE",
      description: " Attività di approfondimento sulla presenza delle mafie sul territorio piemontese",
    },
    {
      id: 6,
      name: "SOSTENIBILITÀ AMBIENTALE",
      description:
        "Approfondimenti sui temi della sostenibilità ambientale e della disuguaglianza con riflessioni sui problemi e la ricerca delle possibili soluzioni.",
    },
    {
      id: 7,
      name: "LA MAFIA ATTRAVERSO IL CINEMA",
      description:
        "Riflessioni sui modelli mafiosi presentati dal cinema per comprendere il loro impatto sulla società e migliorare la comprensione critica (e su quanto siano rappresentativi della realtà oggettiva e del sentire comune).",
    },
    {
      id: 8,
      name: "IL GIOCO NON È UN AZZARDO (6-14 anni)",
      description:
        "L'attività mira a esplorare le varie tipologie di gioco e le loro caratteristiche e a riflettere sulla correttezza dei giochi a cui si prende parte",
    },
    {
      id: 9,
      name: "CHI NON GIOCA VINCE",
      description:
        "Considerazioni per sensibilizzare ai rischi e alla dipendenza del gioco d'azzardo e ai collegamenti tra mafia e gioco d'azzardo illegale",
    },
  ];

  const selectedActivities = activityType
    .filter((activity) => activities.includes(activity.id))
    .map((activity) => ({
      id: activity.id,
      name: activity.name,
      description: activity.description,
    }));

  console.log(selectedActivities);

  return {
    startDate: (document.getElementById("startDate") as HTMLInputElement).value,
    endDate: (document.getElementById("endDate") as HTMLInputElement).value,
    name: (document.getElementById("name") as HTMLInputElement).value,
    surname: (document.getElementById("surname") as HTMLInputElement).value,
    email: (document.getElementById("boking-form-email") as HTMLInputElement).value,
    association: (document.getElementById("association") as HTMLInputElement).value,
    phoneNumber: (document.getElementById("phoneNumber") as HTMLInputElement).value,
    nChildren: parseInt((document.getElementById("nChildren") as HTMLInputElement).value),
    nAdults: parseInt((document.getElementById("nAdults") as HTMLInputElement).value),
    additionalInfo: (document.getElementById("additionalInfo") as HTMLTextAreaElement).value,
    activityType: selectedActivities,
  };
}
