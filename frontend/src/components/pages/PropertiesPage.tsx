// src/pages/PropertiesPage.tsx
import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import type { Property } from "../../types";

const PropertiesPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const email = "teste@mail.com"; // Query parameter

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get("/properties", { params: { email } });
        const properties: Property[] = response.data.map((p: any) => ({
          address: p.address,
          sizeM2: p.size_m2,
          cubNumber: p.cub_number,
          totalInstallments: p.total_installments,
          extra: p.extra ?? "", // convert null to empty string
        }));
        setProperties(properties);
      } catch (err) {
        setError("Failed to fetch properties");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [email]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <strong>Address:</strong> {property.address} <br />
            <strong>Size:</strong> {property.sizeM2} m² <br />
            <strong>Cub Number:</strong> {property.cubNumber} <br />
            <strong>Total Installments:</strong> {property.totalInstallments}{" "}
            <br />
            <strong>Extra Info:</strong> {property.extra} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesPage;
