import { getCars, getCar, createCar, updateCar, deleteCar } from "../service/serviceCar.js";

export const getCarsCont = async (req, res) => {
    try {
      const { brand, model, minPrice, maxPrice, orderby, order, limit=10, page=1 } = req.query;
      const offset = (page - 1) * limit;
      const cars = await getCars(brand, model, minPrice, maxPrice, orderby, order, offset, limit, page);
      res.status(200).json({status: "success", menssage: "car list", data:cars});
    } catch (error) {
      console.log(error);
      res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const getCarCont = async (req, res) => {
    try {
      const id = req.params.id;
      const car = await getCar(id);
      if (!car) {
        return res.status(400).json({status: "failed", menssage: "car not found", data:{}});
      }
      res.status(200).json({status: "success", menssage: "car found", data:car});
    } catch (error) {
      res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const createCarCont = async (req, res) => {
    try {
      const { brand, model, color, year, description, price, urlToImage, user } = req.body;
      if (!brand || !model || !color || !year || !description || !price || !urlToImage || !user) {
        return res.status(400).json({status: "failed", menssage: "missing data", data:{}});
      }
      const car = await createCar(brand, model, color, year, description, price, urlToImage, user);
      return res.status(201).json({status: "success", menssage: "car created", data:car});
    } catch (error) {
      console.log(error);
      return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const updateCarCont = async (req, res) => {
    try {
      const id = req.params.id;
      const { brand, model, color, year, description, price, urlToImage } = req.body;
      const car = await updateCar(id, brand, model, color, year, description, price, urlToImage);
      res.status(200).json({status: "success", menssage: "car updated", data:car});
    } catch (error) {
      return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const deleteCarCont = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await deleteCar(id);
        res.status(200).json({status: "success", menssage: "car removed", data:car});
    } catch (error) {
        return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};