import React, { useEffect, useState } from 'react'
import Header from '../HEADER/Header'
import Footer from '../FOOTER/Footer'
import { Table, Button, Container } from 'react-bootstrap';
import { historyDeleteAPI, historyFetchAPI } from '../../services/Allapi';

function History() {
  const [userId, setUserId] = useState(localStorage.getItem('userid'));
  const [allHistory, setAllHistory] = useState([]);

  const historyFetch = async () => {
    const result = await historyFetchAPI(userId);
    console.log(result);
    if (result.data) {
      setAllHistory(result.data);
    } else {
      alert(result.response.data);
    }
  }

  useEffect(() => {
    if (userId) {
      historyFetch();
    }
  }, [userId]);

  console.log(allHistory);



  const deleteHistory = async (id) => {
    const result = await historyDeleteAPI(id); // call the delete API
    if (result.status === 200) {
        setAllHistory(prevHistory => prevHistory.filter(item => item.id !== id));
        alert('History deleted');
        historyFetch();
    } else {
        alert(result.response.data.message || 'Failed to delete history');
    }
}


  return (
    <div>
      <Header />
      <Container className="mt-5 mb-5 pb-5">
        <h1>Search History</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Search Keyword</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allHistory.length > 0 ? (
              allHistory.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.searchKeyword}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  <td><Button variant="danger" onClick={() => deleteHistory(item._id)}>
                    Clear History
                  </Button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No history found.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  )
}

export default History
