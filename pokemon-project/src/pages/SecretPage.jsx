import "../styles/SecretPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

const SecretPage = () => {
  const [journalData, setJournalData] = useState([]); // variabler för att hämta information från journal-API
  const [patientData, setPatientData] = useState([]); // variabler för att hämta information från patient-API
  const [loading, setLoading] = useState(true); // variabel för laddning
  const [error, setError] = useState(null); // variabler för error

  useEffect(() => {
    const fetchData = async () => {
      // REFERENS: chatGPT användes som stöd för att generera kod från rad 13-30
      try {
        // hämta journaldata
        const journalResponse = await fetch(
          "https://informatik12.ei.hv.se/JournalAPI/api/Journal/" //API för journal
        );
        if (!journalResponse.ok) {
          throw new Error("Something went wrong fetching journal data");
        }
        const journalResult = await journalResponse.json();

        // hämta patientdata
        const patientResponse = await fetch(
          "https://informatik12.ei.hv.se/PatientAPI/api/Patient/" //API för patient
        );
        if (!patientResponse.ok) {
          throw new Error("Something went wrong fetching patient data");
        }
        const patientResult = await patientResponse.json();

        // uppdatera state med data
        setJournalData(journalResult);
        setPatientData(patientResult);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //REFERENS: chatGPT användes som stöd för att generera kod från rad 46-51
  const getPatientName = (personnummer) => {
    const patient = patientData.find((p) => p.personnummer === personnummer);
    return patient
      ? `${patient.fornamn} ${patient.efternamn}`
      : "Unknown patient";
  };

  if (loading) {
    return (
      <div className="loading-container">
        <img src="gif.gif" alt="Loading Pokémon" className="loading-gif" />
        <p className="loading-text">Loading data...</p>
      </div>
    );
  }

  if (error) return <p className="fw-bold">Error: {error}</p>;

  return (
    <div className="secret-container">
      <h1 className="secret-title">Welcome to the Secret Page</h1>
      <p>What does this page show?</p>
      <p>
        Anything! This page can show a little bit off anything, but right now
        the page shows information from a custom made API. This has nothing to
        do with Pokémon though, but had to be included in order for me (the
        creator of Pokémon Finder) to be approved by my teacher.
      </p>

      <div className="journal-list">
        <h2>Journal notes</h2>
        {journalData.map((journal) => (
          <div key={journal.journalId} className="journal-entry">
            <h3>Patient: {getPatientName(journal.personnummer)}</h3>
            <p>
              First name: {journal.fornamn} Last name: {journal.efternamn}
            </p>
            <p>Personal number: {journal.personnummer}</p>
            <p>Note: {journal.anteckning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecretPage;
