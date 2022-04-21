import React, { useState, useEffect } from "react";
import { CarDTO } from "dtos/CarDTO";
import { api } from "services/api";

import { Container } from "./styles";
import { Alert } from "react-native";

export function MyCars() {
  const [cars, setCars] = useState<CarDTO>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("schedules_byuser?user_id=1");
        setCars(response.data);
      } catch (error) {
        Alert.alert("Ops, Deu problema aqui");
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return <Container></Container>;
}
