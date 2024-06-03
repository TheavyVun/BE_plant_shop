const express = require("express");
const router = express.Router();
const {
  Product,
  PlantGift,
  PlantLifeStyle,
  PlantType,
  Care,
  Light,
  Size,
} = require("../models/associations");
const verifyToken = require("./auth");

// Helper function to find entities by name
const findEntityByName = async (Model, name, key) => {
  const entity = await Model.findOne({ where: { name } });
  return { [key]: entity ? entity.id : null };
};

// Helper function to map and find entity IDs
const mapEntities = async (items, Model, key) => {
  return Promise.all(items.map(async ({ name }) => findEntityByName(Model, name, key)));
};

router.post("/", async (req, res) => {
  try {
    const { items } = req.body;
    const payload = await Promise.all(
      items.map(async ({
        name,
        code,
        description,
        imageUrl,
        PlantGifts,
        PlantLifeStyles,
        PlantTypes,
        ProductCares,
        ProductImages,
        ProductLights,
        ProductSizes,
      }) => {
        return {
          name,
          code,
          description,
          image_url: imageUrl,
          PlantGifts: await mapEntities(PlantGifts, PlantGift, 'plant_gift_id'),
          PlantLifeStyles: await mapEntities(PlantLifeStyles, PlantLifeStyle, 'plant_life_style_id'),
          PlantTypes: await mapEntities(PlantTypes, PlantType, 'plant_type_id'),
          ProductCares: await mapEntities(ProductCares, Care, 'care_id'),
          ProductImages,
          ProductLights: await mapEntities(ProductLights, Light, 'light_id'),
          ProductSizes: await Promise.all(ProductSizes.map(async ({ name, price }) => {
            const { size_id } = await findEntityByName(Size, name, 'size_id');
            return { size_id, price };
          })),
        };
      })
    );

    const data = await Product.bulkCreate(payload, {
      include: [
        "ProductSizes",
        "ProductCares",
        "ProductLights",
        "PlantTypes",
        "PlantGifts",
        "PlantLifeStyles",
        "ProductImages",
      ],
    });
    res.send(data);
  } catch (err) {
    res.status(404).json({ msg: "Cannot create data", error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Product.findAll({
      include: [
        "ProductSizes",
        "ProductCares",
        "ProductLights",
        "PlantTypes",
        "PlantGifts",
        "PlantLifeStyles",
        "ProductImages",
      ],
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Cannot retrieve data", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findOne({
      where: { id },
      include: [
        "ProductSizes",
        "ProductCares",
        "ProductLights",
        "PlantTypes",
        "PlantGifts",
        "PlantLifeStyles",
        "ProductImages",
      ],
    });
    res.json(data);
  } catch (err) {
    res.status(400).json({ msg: "Cannot retrieve data", error: err.message });
  }
});

module.exports = router;
