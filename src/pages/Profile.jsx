import React, { useEffect, useState } from 'react';
import { profileUser } from '../API/authAPI';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const data = await profileUser();
        setUser(data);        
      } catch (err) {
        console.error('❌ Erreur lors du chargement du profil :', err);
        navigate('/profile');
      }
    };


    fetchUser()

  }, []);

 
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800">{user?.username}</h2>
        <p className="text-gray-600">{user?.email}</p>
        <p className="text-gray-600">{user?.bio || "Non defint"}</p>
      </div>
    </div>
  );
};

export default Profile;
