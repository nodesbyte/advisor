import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getFirestore, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../services/firebaseConfig";

const TrainingPage = () => {
  const navigate = useNavigate();
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .replace(/\s+/g, "-") // spaces → hyphens
      .replace(/-+/g, "-") // multiple hyphens → single
      .replace(/^-|-$/g, ""); // trim hyphens
  };

  useEffect(() => {
    const firestore = getFirestore(firebaseApp);
    const trainingsCollection = collection(firestore, "trainings");

    const unsubscribe = onSnapshot(trainingsCollection, async (snapshot) => {
      const data = await Promise.all(
        snapshot.docs.map(async (docSnap) => {
          const docData = docSnap.data();
          let slug = docData.slug;

          // ✅ Auto-generate slug if missing
          if (!slug && docData.title) {
            slug = generateSlug(docData.title);
            const docRef = doc(firestore, "trainings", docSnap.id);
            await updateDoc(docRef, { slug }); // update Firestore
          }

          return { id: docSnap.id, slug, ...docData };
        })
      );

      // sort newest → oldest
      data.sort((a, b) => {
        if (!a.createdAt) return 1;
        if (!b.createdAt) return -1;
        return b.createdAt.seconds - a.createdAt.seconds;
      });

      setTrainings(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCardClick = (slug) => {
    navigate(`/trainings/${slug}`);
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">Loading trainings...</p>
      </div>
    );
  }

  if (trainings.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">No trainings found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0f1e3c]">
        Explore Our Trainings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {trainings.map((training, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(training.slug)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {training.image && (
              <img
                src={training.image}
                alt={training.title}
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#0f1e3c] mb-2">
                {training.title}
              </h3>
              <p className="text-sm text-gray-700">{training.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPage;
