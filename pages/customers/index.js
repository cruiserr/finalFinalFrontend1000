import styles from "../../styles/customers.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.customers()
      .then((data) => {
        setCustomers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                  <td data-label="Name">{c.name}</td>
                  <td data-label="Email">{c.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Customers;
