export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category?: "allgemein" | "studierende" | "aerzte" | "praxis";
};

export const homepageFaqs: FaqItem[] = [
  {
    id: "faq-wann-finanzberatung-studierende",
    question: "Ab wann lohnt sich eine Finanzberatung für Medizinstudierende?",
    answer:
      "Bereits im Studium lassen sich Weichen stellen, die später deutlich aufwändiger oder teurer werden. Besonders die Absicherung der Arbeitskraft und der Umgang mit der Krankenversicherung sind Themen, bei denen ein früher Überblick helfen kann. Eine Beratung muss kein umfassendes Finanzkonzept liefern – häufig reicht es, die relevanten Fragen zu sortieren und die wirklich dringlichen Punkte zu klären. Welche das in deiner Situation sind, lässt sich am besten in einem ersten Gespräch herausfinden.",
    category: "studierende",
  },
  {
    id: "faq-berufshaftpflicht-pj",
    question: "Benötige ich im Praktischen Jahr eine eigene Berufshaftpflicht?",
    answer:
      "Im Praktischen Jahr sind Studierende in der Regel in den Haftpflichtschutz der Ausbildungsklinik einbezogen – ob und in welchem Umfang, hängt jedoch vom konkreten Ausbildungsvertrag und der jeweiligen Einrichtung ab. Wer zur Sicherheit eine eigene Absicherung möchte oder spezifische Tätigkeiten außerhalb dieser Einbindung plant, sollte die eigene Situation individuell prüfen. Das gilt besonders für Auslandsaufenthalte und Famulaturen, die außerhalb des regulären Studienrahmens stattfinden.",
    category: "studierende",
  },
  {
    id: "faq-gkv-pkv-wahl",
    question: "Wann können Ärztinnen und Ärzte zwischen GKV und PKV wählen?",
    answer:
      "Als angestellte Ärztin oder angestellter Arzt besteht grundsätzlich Versicherungspflicht in der gesetzlichen Krankenversicherung, sofern das Einkommen unter der gesetzlichen Jahresarbeitsentgeltgrenze liegt. Wer darüber liegt, kann sich von der GKV befreien lassen und in die PKV wechseln. Selbstständige und niedergelassene Ärztinnen und Ärzte sind grundsätzlich nicht versicherungspflichtig und können frei wählen. Die geltenden Grenzwerte werden jährlich angepasst – bitte aktuelle Zahlen individuell prüfen. (Stand: bitte vor Veröffentlichung aktualisieren.)",
    category: "aerzte",
  },
  {
    id: "faq-bu-versorgungswerk",
    question: "Warum kann eine Berufsunfähigkeitsversicherung trotz Versorgungswerk relevant sein?",
    answer:
      "Das Versorgungswerk bietet eine berufsständische Altersvorsorge und in vielen Fällen auch Leistungen bei Berufsunfähigkeit. Allerdings unterscheiden sich die Bedingungen und Leistungshöhen je nach Versorgungswerk und individuellem Beitragsstand erheblich. Ob die Leistungen ausreichen, um den gewohnten Lebensstandard zu sichern, sollte individuell geprüft werden. Zusätzlich gibt es beim Versorgungswerk häufig Wartezeiten und besondere Voraussetzungen. Eine ergänzende Absicherung kann deshalb sinnvoll sein – das hängt von der persönlichen Situation ab.",
    category: "aerzte",
  },
  {
    id: "faq-vermögensaufbau-start",
    question: "Wie beginnt man als Mediziner sinnvoll mit dem Vermögensaufbau?",
    answer:
      "Ein strukturierter Einstieg beginnt damit, laufende Einnahmen und Ausgaben zu kennen, eine ausreichende Notfallreserve aufzubauen und bestehende Absicherungen zu kennen. Erst danach macht es Sinn, langfristig zu sparen oder zu investieren. Welche Beträge und Anlageformen passen, hängt von Zielen, Zeithorizont und persönlicher Risikobereitschaft ab. Es gibt keine allgemein gültige Reihenfolge – aber eine strukturierte Bestandsaufnahme hilft, die Prioritäten zu setzen.",
    category: "aerzte",
  },
  {
    id: "faq-liquiditaet-praxis",
    question: "Was gehört zum Liquiditätsmanagement einer Arzt- oder Zahnarztpraxis?",
    answer:
      "Zu einem funktionierenden Liquiditätsmanagement gehören neben dem Überblick über laufende Einnahmen und Ausgaben auch geplante Rücklagen für Steuern, Investitionen und Personalkosten. Schwankende Abrechnungszyklen, unterschiedliche Kostenarten und die Trennung privater und betrieblicher Zahlungsströme machen eine strukturierte Planung notwendig. Dieser Bereich berührt auch steuerliche und betriebswirtschaftliche Fragen – eine enge Abstimmung mit einem Steuerberater ist dabei sinnvoll.",
    category: "praxis",
  },
  {
    id: "faq-digital-beratung",
    question: "Ist die Beratung auch digital möglich?",
    answer:
      "Ja. Eine Beratung ist sowohl persönlich in Hannover als auch über eine sichere digitale Verbindung möglich. Das Format richtet sich nach deiner Situation und deinen Präferenzen. Für ein erstes Kennenlerngespräch empfehlen sich beide Wege gleichermaßen. Unterlagen können vorab sicher übermittelt werden, sodass das Gespräch effizient und gut vorbereitet stattfinden kann.",
    category: "allgemein",
  },
  {
    id: "faq-erstgespraech-ablauf",
    question: "Wie läuft ein erstes Gespräch ab?",
    answer:
      "Im ersten Gespräch steht das Kennenlernen im Vordergrund: deine aktuelle Situation, deine Ziele und die Themen, die für dich relevant sind. Es geht nicht darum, sofort Lösungen zu präsentieren, sondern zunächst ein klares Bild deiner Lage zu bekommen. Darauf aufbauend erhältst du eine Einschätzung, welche Themen Priorität haben sollten – und in welchen Bereichen kein oder kaum Handlungsbedarf besteht. Das erste Gespräch dauert in der Regel zwischen 30 und 60 Minuten.",
    category: "allgemein",
  },
];

export const studyFaqs: FaqItem[] = [
  {
    id: "faq-stud-berufshaftpflicht",
    question: "Brauche ich als Medizinstudierender eine eigene Berufshaftpflicht?",
    answer:
      "In der Regel sind Studierende während Pflichtveranstaltungen und Pflichtfamulaturen über die Universität oder das Lehrkrankenhaus haftpflichtversichert. Für freiwillige Famulaturen, Auslandsaufenthalte oder Praktika außerhalb des regulären Studienrahmens kann eine eigene Absicherung sinnvoll sein. Es lohnt sich, die eigene Situation konkret zu prüfen, bevor man auf einen Versicherungsschutz vertraut, der möglicherweise nicht greift.",
    category: "studierende",
  },
  {
    id: "faq-stud-bu",
    question: "Warum sollte ich mich schon im Studium gegen Berufsunfähigkeit absichern?",
    answer:
      "Je früher eine Berufsunfähigkeitsversicherung abgeschlossen wird, desto geringer ist in der Regel der Beitrag – und desto einfacher ist meist die Gesundheitsprüfung. Im Studium besteht oft noch ein sehr guter Gesundheitszustand, während spätere Einträge im Krankenblatt die Absicherung teurer oder schwieriger machen können. Eine frühe Absicherung lässt sich später bei steigendem Einkommen häufig nachversichern, ohne erneute Gesundheitsprüfung.",
    category: "studierende",
  },
  {
    id: "faq-stud-kv",
    question: "Welche Krankenversicherung ist im Studium sinnvoll?",
    answer:
      "Die meisten Studierenden sind bis zum 25. Lebensjahr über die Eltern familienversichert (GKV) – das ist in der Regel die günstigste Option. Danach oder bei eigenem Einkommen über einer bestimmten Grenze ist eine eigene Versicherung notwendig. Für Studierende in der gesetzlichen Versicherung gibt es spezielle Studierendentarife. Ein Wechsel in die private Krankenversicherung kann für bestimmte Gruppen interessant sein, sollte aber langfristig betrachtet werden.",
    category: "studierende",
  },
];
