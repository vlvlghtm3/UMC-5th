import React from 'react';
import AdPage from '../Components/AdPage'; 
import axios from 'axios';

function Home() {
  const fetchData = async () => {
    try {
      const endpoint = 'http://localhost:8080/user/payload';
  
      // axios를 사용하여 GET 요청 보내기
      const response = await axios.get(endpoint, {

        headers: {
          'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVtY3dlYiIsInVzZXJuYW1lIjoiVU1DIOybuSDtjIzsnbTtjIUiLCJpYXQiOjE3MDAzMTk0MTgsImV4cCI6MTcwMDMyMDMxOCwiaXNzIjoiVU1DIFdlYiBXQiJ9.x6lv9hPLqtIw2h4Uvt4bUOLDCyOKw-JeqLwXOlN0HjI", 
        },
      });

      // 응답 데이터 확인
      console.log(response.data);
    } catch (error) {
      // 오류 처리
      console.error('Error during GET request:', error);
    }
  };
  return (
    <div>
      <AdPage />
      <button onClick={fetchData}>토큰 인증</button>
    </div>
  );
}

export default Home;

