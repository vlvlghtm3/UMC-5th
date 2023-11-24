import React, { useEffect } from 'react';
import AdPage from '../Components/AdPage'; 
import axios from 'axios';

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'http://localhost:8000/user/payload';
    
        // axios를 사용하여 GET 요청 보내기
        const response = await axios.get(endpoint, {

          headers: {
            'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVtY3dlYiIsInVzZXJuYW1lIjoiVU1DIOybuSDtjIzsnbTtjIUiLCJpYXQiOjE3MDA4MTEwOTgsImV4cCI6MTcwMDgxMTk5OCwiaXNzIjoiVU1DIFdlYiBXQiJ9.ZfKfHgOAyQCruNDW8WVhzRk1Ct2zG0_S_uOJyRBwAF4", 
          },
        
});

        // 응답 데이터 확인
        console.log(response.data);
      } catch (error) {
        // 오류 처리
        console.error('Error during GET request:', error);
      }

    };

    // fetchData 함수 호출
    fetchData();
  }, []);
  return (
    <div>
      <AdPage />
    </div>
  );
}

export default Home;