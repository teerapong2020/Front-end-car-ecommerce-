import { useState } from "react";
import carDefault from "../assets/buy_page/defaultcar.png";
import uploadImage from "../assets/buy_page/upload_photo_icon.png";
function Buy() {
  const [formData, setFormData] = useState({
    headline: "",
    brand: "",
    year: "",
    mileage: "",
    color: "",
    fuel: "",
    gas: "",
    gear: "",
    price: "",
    pnumber: "",
    address: "",
    additionalInfo: "",
    file1: null,
    file2: null,
    file3: null,
    file4: null,
    file5: null,
    file6: null,
  });

  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleFileChange = async (e) => {
    const fileKey = `file${count}`;
    await setFormData({
      ...formData,
      [fileKey]: e.target.files[0],
    });
    document.getElementById("imagePreview").className = "hidden";
    document.getElementById("image-container").className =
      "grid grid-cols-3 gap-6 mr-[18px]  ";
    // imageRender(e.target.files[0])
    console.log(formData);
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const uploadimage = () => {
    document.getElementById(`uploadfileinbuycar`).click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto p-4 flex flex-col w-[1152px]"
    >
      <h5 className="text-[28px] mt-[35px] mb-[35px]">ขายรถของคุณ</h5>
      <div className="border border-black py-[18px] px-[25px] rounded-3xl  ">
        {/* First image */}
        <div className="mb-4 flex">
          <div id="image-container" className="    ">
            {formData.file1 && (
              <img
                src={URL.createObjectURL(formData.file1)}
                className="w-[250px] border border-gray-400 rounded-2xl"
              />
            )}
            {formData.file2 && (
              <img
                src={URL.createObjectURL(formData.file2)}
                className="w-[250px] border border-gray-400 rounded-2xl"
              />
            )}
            {formData.file3 && (
              <img
                src={URL.createObjectURL(formData.file3)}
                className="w-[250px] border border-gray-400 rounded-2xl"
              />
            )}
            {formData.file4 && (
              <img
                src={URL.createObjectURL(formData.file4)}
                className="w-[250px] border border-gray-400 rounded-2xl"
              />
            )}
            {formData.file5 && (
              <img
                src={URL.createObjectURL(formData.file5)}
                className="w-[250px] border border-gray-400 rounded-2xl"
              />
            )}
            {formData.file6 && (
              <img
                src={URL.createObjectURL(formData.file6)}
                className="w-[250px] border border-gray-400 rounded-2xl"
              />
            )}
          </div>
          <img
            src={carDefault}
            id="imagePreview"
            alt="default car"
            className=" mr-[18px]"
          />
          <div className="w-[354px] flex flex-col justify-center items-center border border-gray-400 rounded-2xl">
            <img
              src={uploadImage}
              id="1"
              alt="img_test"
              className="w-[100px] "
              onClick={uploadimage}
            />
            <div>อัพโหลดรูปภาพ</div>
          </div>
          <input
            id="uploadfileinbuycar"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className=" gap-[58px] mb-[58px] flex flex-col w-full">
        <h5 className="text-[28px] mt-[35px] mb-[21px]">รายละเอียดสินค้า</h5>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">
            หัวข้อรถที่ต้องการขาย
          </label>
          <input
            type="text"
            name="mileage"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เช่น BMW X1 2021 สภาพดี ไมล์น้อย"
            value={formData.mileage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">ยี่ห้อ</label>
          <input
            type="text"
            name="brand"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เลือกยี่ห้อ"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">ปีรถ</label>
          <input
            type="number"
            name="year"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="ปีรถ"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">เลขไมล์</label>
          <input
            type="number"
            name="model"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="ระบุเลขไมล์"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">สี</label>
          <select
            name="color"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เลือกสี"
            value={formData.color}
            onChange={handleChange}
            required
          >
            <option value="red">เลือกสี</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">
            เชื้อเพลิง
          </label>
          <select
            name="fuel"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เลือก เชื้อเพลิง"
            value={formData.fuel}
            onChange={handleChange}
            required
          >
            <option value="">เลือก เชื้อเพลิง</option>
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">
            แก๊ส/ไฟฟ้า
          </label>
          <select
            name="gas"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เลือกแก๊ส"
            value={formData.gas}
            onChange={handleChange}
            required
          >
            <option value="">เลือก แก๊สหรือไฟฟ้า</option>
            <option value="gasoline">แก๊ส</option>
            <option value="diesel">ไฟฟ้า</option>
          </select>
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">เกียร์</label>
          <select
            name="gear"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เลือกเกียร์"
            value={formData.gear}
            onChange={handleChange}
            required
          >
            <option value="">เลือกเกียร์</option>
            <option value="">ธรรมดา</option>
            <option value="gasoline">ออโต้</option>
          </select>
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">
            ระบุราคาที่เหมาะสม
          </label>
          <input
            type="number"
            name="price"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="ระบุราคาเต็ม ไม่ใช่ราคาดาวน์"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">
            เบอร์โทรศัพท์
          </label>
          <input
            type="text"
            name="pnumber"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เบอร์มือถือ เช่น 09xxxxxxxx"
            value={formData.pnumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">
            ระบุที่อยู่ของรถ
          </label>
          <input
            type="text"
            name="address"
            className="w-[758px] h-[54px] p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="เลือกจังหวัด, อำเภอ"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <label className=" text-gray-700 text-lg font-medium">
            ข้อมูลเพิ่มเติม
          </label>
          <textarea
            name="additionalInfo"
            className="w-[758px]  p-5 text-base border border-gray-300 rounded-s-xl"
            placeholder="ใส่รายละเอียดเพิ่มเติม เช่น เข้าศูนย์เช็คตลอด, ไม่เคยชน"
            rows="4"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center gap-6 mb-[54px] text-[18px] ">
        <input type="checkbox" className="h-5 w-5" />
        <label className="text-lg">
          กดเพื่อยอมรับ
          <a href="" className="text-red-600">
            ข้อกำหนดและเงื่อนไขการลงประกาศ
          </a>
        </label>
      </div>

      <div className="flex justify-center gap-[30px] text-[18px] font-bold ">
        <button
          type="submit"
          className="px-4 py-2 bg-[#3E5685] text-white rounded w-[364px] h-[50px]"
        >
          ลงขาย
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-[#E7E9EE] text-black rounded w-[364px] h-[50px] "
        >
          ยกเลิก
        </button>
      </div>
    </form>
  );
}

export default Buy;
