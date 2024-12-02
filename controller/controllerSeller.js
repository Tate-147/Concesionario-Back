import { getSellers, getSeller, createSeller, updateSeller, deleteSeller } from "../service/serviceSeller.js";
export const getSellersCont = async (req, res) => {
    try {
      const sellers = await getSellers();
      res.status(200).json({status: "success", menssage: "seller list", data:sellers});
    } catch (error) {
      console.log(error);
      res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const getSellerCont = async (req, res) => {
    try {
      const id = req.params.id;
      const seller = await getSeller(id);
      if (!seller) {
        return res.status(400).json({status: "failed", menssage: "seller not found", data:{}});
      }
      res.status(200).json({status: "success", menssage: "seller found", data:seller});
    } catch (error) {
      res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const createSellerCont = async (req, res) => {
    try {
      const { lastname, name, address, postcode, city, province, country, phone, cellphone, email } = req.body;
      if (!lastname || !name || !address || !postcode || !city || !province || !country || !cellphone || !email) {
        return res.status(400).json({status: "failed", menssage: "missing data", data:{}});
      }
      const seller = await createSeller(lastname, name, address, postcode, city, province, country, phone, cellphone, email);
      return res.status(201).json({status: "success", menssage: "seller created", data:seller});
    } catch (error) {
      console.log(error);
      return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const updateSellerCont = async (req, res) => {
    try {
      const id = req.params.id;
      const { lastname, name, address, postcode, city, province, country, phone, cellphone, email } = req.body;
      const seller = await updateSeller(id, lastname, name, address, postcode, city, province, country, phone, cellphone, email);
      res.status(200).json({status: "success", menssage: "seller updated", data:seller});
    } catch (error) {
      return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const deleteSellerCont = async (req, res) => {
    try {
        const id = req.params.id;
        const seller = await deleteSeller(id);
        res.status(200).json({status: "success", menssage: "seller removed", data:seller});
    } catch (error) {
        return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};