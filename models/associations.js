const User = require("./users-model");
const Customer = require("./customers-model");
const Product = require("./products-model");
const Image = require("./images-model");
const Care = require("./cares-model");
const ProductCare = require("./product-cares-model");
const Light = require("./lights-model");
const ProductLight = require("./product-lights-model");
const Size = require("./sizes-model");
const ProductSize = require("./product-sizes-model");
const PlantType = require("./plant-types-model");
const PlantTypeProduct = require("./plant-type-products-model");
const PlantGift = require("./plant-gifts-model");
const PlantGiftProduct = require("./plant-gift-products-model");
const PlantLifeStyle = require("./plant-life-styles-model");
const PlantLifeStyleProduct = require("./plant-life-style-products-model");
const PlantRoom = require("./plant-rooms-model");
const PlantRoomProduct = require("./plant-room-products-model");

// User - Customer Association
User.hasOne(Customer, { foreignKey: "user_id" });
Customer.belongsTo(User, { foreignKey: "user_id" });

// Product - Image Association
Product.hasMany(Image, { foreignKey: "product_id", as: "ProductImages" });
Image.belongsTo(Product, { foreignKey: "product_id", as: "ProductImages" });

// Care - ProductCare Association
Care.hasMany(ProductCare, { foreignKey: "care_id" });
ProductCare.belongsTo(Care, { foreignKey: "care_id" });

// Light - ProductLight Association
Light.hasMany(ProductLight, { foreignKey: "light_id" });
ProductLight.belongsTo(Light, { foreignKey: "light_id" });

// Size - ProductSize Association
Size.hasMany(ProductSize, { foreignKey: "size_id" });
ProductSize.belongsTo(Size, { foreignKey: "size_id" });

// PlantType - PlantTypeProduct Association
PlantType.hasMany(PlantTypeProduct, { foreignKey: "plant_type_id" });
PlantTypeProduct.belongsTo(PlantType, { foreignKey: "plant_type_id" });

// PlantGift - PlantGiftProduct Association
PlantGift.hasMany(PlantGiftProduct, { foreignKey: "plant_gift_id" });
PlantGiftProduct.belongsTo(PlantGift, { foreignKey: "plant_gift_id" });

// PlantLifeStyle - PlantLifeStyleProduct Association
PlantLifeStyle.hasMany(PlantLifeStyleProduct, {
  foreignKey: "plant_life_style_id",
});
PlantLifeStyleProduct.belongsTo(PlantLifeStyle, {
  foreignKey: "plant_life_style_id",
});

// PlantRoom - PlantRoomProduct Association
PlantRoom.hasMany(PlantRoomProduct, { foreignKey: "plant_room_id" });
PlantRoomProduct.belongsTo(PlantRoom, { foreignKey: "plant_room_id" });

// Product - ProductCare Association
Product.hasMany(ProductCare, {
  foreignKey: "product_id",
  as: "ProductCares",
});
ProductCare.belongsTo(Product, {
  foreignKey: "product_id",
  as: "ProductCares",
});

// Product - ProductLight Association
Product.hasMany(ProductLight, {
  foreignKey: "product_id",
  as: "ProductLights",
});
ProductLight.belongsTo(Product, {
  foreignKey: "product_id",
  as: "ProductLights",
});

// Product - ProductSize Association
Product.hasMany(ProductSize, {
  foreignKey: "product_id",
  as: "ProductSizes",
});
ProductSize.belongsTo(Product, {
  foreignKey: "product_id",
  as: "ProductSizes",
});

// Product - PlantTypeProduct Association
Product.hasMany(PlantTypeProduct, {
  foreignKey: "product_id",
  as: "PlantTypes",
});
PlantTypeProduct.belongsTo(Product, {
  foreignKey: "product_id",
  as: "PlantTypes",
});

// Product - PlantGiftProduct Association
Product.hasMany(PlantGiftProduct, {
  foreignKey: "product_id",
  as: "PlantGifts",
});
PlantGiftProduct.belongsTo(Product, {
  foreignKey: "product_id",
  as: "PlantGifts",
});

// Product - PlantLifeStyleProduct Association
Product.hasMany(PlantLifeStyleProduct, {
  foreignKey: "product_id",
  as: "PlantLifeStyles",
});
PlantLifeStyleProduct.belongsTo(Product, {
  foreignKey: "product_id",
  as: "PlantLifeStyles",
});

// Product - PlantRoomProduct Association
Product.hasMany(PlantRoomProduct, { foreignKey: "product_id" });
PlantRoomProduct.belongsTo(Product, { foreignKey: "product_id" });

// Sync all models
const syncModels = async () => {
  await User.sync();
  await Customer.sync();
  await Product.sync();
  await Image.sync();
  await Care.sync();
  await ProductCare.sync();
  await Light.sync();
  await ProductLight.sync();
  await Size.sync();
  await ProductSize.sync();
  await PlantType.sync();
  await PlantTypeProduct.sync();
  await PlantGift.sync();
  await PlantGiftProduct.sync();
  await PlantLifeStyle.sync();
  await PlantLifeStyleProduct.sync();
  await PlantRoom.sync();
  await PlantRoomProduct.sync();
};

syncModels();

module.exports = {
  User,
  Customer,
  Product,
  Image,
  Care,
  ProductCare,
  Light,
  ProductLight,
  Size,
  ProductSize,
  PlantType,
  PlantTypeProduct,
  PlantGift,
  PlantGiftProduct,
  PlantLifeStyle,
  PlantLifeStyleProduct,
  PlantRoom,
  PlantRoomProduct,
};
