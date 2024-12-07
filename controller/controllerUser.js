import { getUsers, getUser, createUser, updateUser, deleteUser, login, token } from "../service/serviceUser.js";

export const getUsersCont = async (req, res) => {
    try {
      const users = await getUsers();
      res.status(200).json({status: "success", menssage: "user list", data:users});
    } catch (error) {
      console.log(error);
      res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const getUserCont = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await getUser(id);
      if (!user) {
        return res.status(400).json({status: "failed", menssage: "user not found", data:{}});
      }
      res.status(200).json({status: "success", menssage: "user found", data:user});
    } catch (error) {
      res.status(500).json({status: "failed", menssage: "user error", data:{}});
    }
};

export const createUserCont = async (req, res) => {
    try {
      const { username, password, lastname, name, address, postcode, city, province, country, phone, cellphone, email } = req.body;
      if (!username || !password || !lastname || !name || !address || !postcode || !city || !province || !country || !cellphone || !email) {
        return res.status(400).json({status: "failed", menssage: "missing data", data:{}});
      }
      const user = await createUser(username, password, lastname, name, address, postcode, city, province, country, phone, cellphone, email);
      return res.status(201).json({status: "success", menssage: "user created", data:user});
    } catch (error) {
      console.log(error);
      return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const updateUserCont = async (req, res) => {
    try {
      const id = req.params.id;
      const { lastname, name, address, postcode, city, province, country, phone, cellphone, email } = req.body;
      const user = await updateUser(id, lastname, name, address, postcode, city, province, country, phone, cellphone, email);
      res.status(200).json({status: "success", menssage: "user updated", data:user});
    } catch (error) {
      return res.status(500).json({status: "failed", menssage: "user error", data:{}});
    }
};

export const deleteUserCont = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await deleteUser(id);
        res.status(200).json({status: "success", menssage: "user removed", data:user});
    } catch (error) {
        return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    }
};

export const loginCont = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { accesstoken, refreshtoken } = await login(username, password);
        if (!accesstoken || !refreshtoken) {
            return res.status(400).json({status: "failed", menssage: "credentials error", data:{}});
        }else{
            return res.status(200).json({status: "success", menssage: "user logued", data:{accesstoken, refreshtoken}});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    };
};

export const tokenCont = async (req, res) => {
    try {
        const token = req.headers["Token"]
        if (!token) {
            return res.status(400).json({status: "failed", menssage: "missing refresh token", data:{}});
        }
        const newtoken = await token(token);
        return res.status(200).json({status: "success", menssage: "token refresh", data:{newtoken}});
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "failed", menssage: "server error", data:{}});
    };
};