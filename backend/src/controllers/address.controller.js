import Address from "../models/address.model.js";

export const createAddress = async (req, res) => {
  const userId = req.user.id;
  const { name, phone, city, district, commune, detail } = req.body;

  if (!name || !phone || !city || !district || !commune || !detail) {
    return res.status(400).json({ message: "Điền đầy đủ thông tin" });
  }
  const newAddress = new Address({
    userId,
    name,
    phone,
    city,
    district,
    commune,
    detail,
  });

  try {
    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating address", error: error.message });
  }
};

export const getAllAddresses = async (req, res) => {
  const userId = req.user.id;
  try {
    const addresses = await Address.find({ userId });
    res.status(200).json(addresses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving addresses", error: error.message });
  }
};

export const getAddressById = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  try {
    const address = await Address.findOne({ userId, _id: id });
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json(address);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving address", error: error.message });
  }
};

export const updateAddress = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  try {
    const updatedAddress = await Address.findOneAndUpdate(
      { userId, _id: id },
      req.body,
      { new: true }
    );
    if (!updatedAddress) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json(updatedAddress);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating address", error: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  try {
    const deletedAddress = await Address.findOneAndDelete({
      userId,
      _id: id,
    });
    if (!deletedAddress) {
      return res.status(404).json({ message: "Địa chỉ không tồn tại" });
    }
    res.status(200).json({ message: "Địa chỉ đã được xóa thành công" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi trong việc xóa địa chỉ", error: error.message });
  }
};
