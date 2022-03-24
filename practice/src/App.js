import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
  
const App = () => {
  
  useEffect(()=> {
    getDataFromAPI()
  }, [])
  
  const [isLoading, setIsLoading] = useState(true)
  
  // Sample API to fetch Data
  const getDataFromAPI = () => {
    console.log("API called!!")
    fetch('http://dummy.restapiexample.com/api/v1/employees')
     .then((response) => {
      return response.json()
    }).then((res) => {
      setTimeout(()=>{
        setIsLoading(false)
      }, 2000)
    })
  }
  
  return (
    <div style={{
      marginLeft: '40%',
    }}>
      <h2>How to use CircularProgress Component in ReactJS?</h2>
      {isLoading && <CircularProgress color="secondary" />} 
      {!isLoading && <h3>Successfully API Loaded Data</h3>}
    </div>
  );
}
  
export default App;