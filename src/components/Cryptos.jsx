import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptos = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  

  if (isFetching) return "Loading...";

  return (
    <div>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptos"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    aria-label={`${currency.name}-image`}
                  />
                }
                hoverable
              >
                <p className="">Price:{millify(currency.price)}</p>
                <p className="">Market Cap:{millify(currency.marketCap)}</p>
                <p className="">Daily Change:{millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cryptos;
