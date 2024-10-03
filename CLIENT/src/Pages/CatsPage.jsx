import React, { useEffect, useState } from 'react';



import axiosInstance from '../../axiosInstance';
import PostForm from '../components/createCatForm';
import Post from '../components/Cat';
import CatForm from '../components/createCatForm';

function CatPage({user}) {
    const [cats, setCats] = useState([]);
    
    async function loadPosts() {
        try {
            const response = await axiosInstance.get('/cats');
            // console.log(response, '1111')
            if (response.status === 200) {
                setCats(response.data.cats);
            }
        } catch (error) {
            console.log('Error', error.message);
        }
    }

    useEffect(() => {
        loadPosts();
      }, []);
      return (


        <div>
          <CatForm user={user} setCats={setCats} />

          {
            cats.map((cat) => (
              <Post cat={cat} setCats={setCats} key={cat.id}/>
            ))
          }
        </div>
      );
    }
    export default CatPage;

