import { useState } from "react";

function Buy() {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    model: "",
    fuel: "",
    color: "",
    year: "",
    license: "",
    phone: "",
    additionalInfo: "",
    file1: null,
    file2: null,
    file3: null,
    file4: null,
    file5: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const uploadimage = (e) => {
    const id = e.target.id;
    document.getElementById(`uploadfile${id}inbuycar`).click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto p-4 flex flex-col w-[1152px]"
    >
      <div>ขายรถของคุณ</div>
      <div className="mb-4 ">
        {/* First image */}
        <div className="mb-4 flex">
          <img
            src="/src/assets/buy_page/defaultcar.png"
            alt="default car"
            className="w-[733px]"
          />
          <div className="w-[354px] flex flex-col justify-center items-center">
            <img
              src="/src/assets/buy_page/upload_photo_icon.png"
              id="1"
              alt="img_test"
              className="w-[100px]"
              onClick={(e) => {
                uploadimage(e);
              }}
            />
            <div>อัพโหลดรูปภาพ</div>
          </div>
          <input
            id="uploadfile1inbuycar"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className=" gap-4 mb-4">
        <div>
          <label className="block text-gray-700">หัวข้อรถที่ต้องการขาย</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">ยี่ห้อ</label>
          <input
            type="text"
            name="brand"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">รุ่น</label>
          <input
            type="text"
            name="model"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">เชื้อเพลิง</label>
          <select
            name="fuel"
            className="w-full p-2 border border-gray-300 rounded mt-2"
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
        <div>
          <label className="block text-gray-700">สี</label>
          <select
            name="color"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={formData.color}
            onChange={handleChange}
            required
          >
            <option value="">เลือก สี</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">ปีที่ผลิต</label>
          <input
            type="text"
            name="year"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">ทะเบียน</label>
          <input
            type="text"
            name="license"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={formData.license}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">เบอร์โทรศัพท์</label>
        <input
          type="text"
          name="phone"
          className="w-full p-2 border border-gray-300 rounded mt-2"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">ข้อมูลเพิ่มเติม</label>
        <textarea
          name="additionalInfo"
          className="w-full p-2 border border-gray-300 rounded mt-2"
          rows="4"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          ลงขาย
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          ยกเลิก
        </button>
      </div>
    </form>
  );
}

export default Buy;
