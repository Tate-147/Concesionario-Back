import { getCars, getCar, createCar, updateCar, deleteCar } from "../service/serviceCar.js";
export const getCarsCont = async (req, res) => {
    try {
      const cars = await getCars();
      res.status(200).json({status: "success", menssage: "vehiculos obtenidos", data:cars});
    } catch (error) {
      console.log(error);
      res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
};

export const getCarCont = async (req, res) => {
    try {
      const id = req.params.id;
      const car = await getCar(id);
      if (!car) {
        return res.status(400).json({status: "error", menssage: "vehiculo no encontrado", data:{}});
      }
      res.status(200).json({status: "success", menssage: "vehiculo encontrado", data:car});
    } catch (error) {
      res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
};

export const createCarCont = async (req, res) => {
    try {
      const { brand, model, color, year, description, price, urlToImage } = req.body;
      if (!brand || !model || !color || !year || !description || !price || !urlToImage) {
        return res.status(400).json({status: "error", menssage: "faltan datos", data:{}});
      }
      const car = await createCar(brand, model, color, year, description, price, urlToImage);
      return res.status(201).json({status: "success", menssage: "vehiculo creado", data:car});
    } catch (error) {
      console.log(error);
      return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
};

export const updateCarCont = async (req, res) => {
    try {
      const id = req.params.id;
      const { brand, model, color, year, description, price, urlToImage } = req.body;
      const car = await updateCar(id, brand, model, color, year, description, price, urlToImage);
      res.status(200).json({status: "success", menssage: "vehiculo actualizado", data:car});
    } catch (error) {
      return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
};

export const deleteCarCont = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await deleteCar(id);
        res.status(200).json({status: "success", menssage: "vehiculo borrado", data:car});
    } catch (error) {
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
};