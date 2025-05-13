import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Notes = () => {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchStatus, setFetchStatus] = useState("");

  const user = useSelector((state) => state.user.userData);

  const username = user?.userName;

  const fetchNotes = async () => {
    try {
      const notes = await axios.get("http://localhost:6969/notes/getFiles");

      if (notes.data.data.length > 0) {
        setNotesList(notes.data.data);
        setFetchStatus("Found");
      } else {
        setNotesList([]);
        setFetchStatus("Not-Found");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      setFetchStatus("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const showPDF = (fileName) => {
    window.open(`http://localhost:6969/files/${fileName}`, "_blank", "noreferrer");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <p>Loading notes...</p>
      </div>
    );
  }

  return (
    <div className="h-heightWithoutNavbar flex flex-col items-center justify-start p-4">
      <h2 className="mb-6 text-2xl font-bold">Your Notes</h2>

      <div className="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {fetchStatus === "Found" && notesList.map((note) => (
          <div
            key={note._id}
            className="flex w-full max-w-[300px] flex-col items-center justify-between rounded-xl bg-[#374151] p-4 text-white shadow-lg"
          >
            <p className="mb-2 text-sm">
              <span className="font-bold">File name: </span>
              <span>{note.fileName}</span>
            </p>
            <button
              onClick={() => showPDF(note.files)}
              className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
            >
              View PDF
            </button>
          </div>
        ))}

        {fetchStatus === "Not-Found" && (
          <div className="text-gray-600 dark:text-gray-400">
            No notes available.
          </div>
        )}
        {fetchStatus === "Error" && (
          <div className="text-red-500">
            Something went wrong while fetching notes.
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
