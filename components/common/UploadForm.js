import { baseUrl } from "../../api/api";
import axios from "axios";
import Swal from "sweetalert2";

const UploadForm = ({
  url,
  formData,
  setFormData,
  department,
  title,
  setTitle,
  subDepartment,
  setSubDepartment,
  loading,
  setLoading,
}) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData((prevFormData) => ({
      ...prevFormData,
      pdfFile: file,
    }));
  };

  const handleOptionChange = (e) => {
    setSubDepartment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append("file", formData.pdfFile);
    form.append("title", title);
    form.append("department", department);
    form.append("subDepartment", subDepartment);

    try {
      const { data: data } = await axios.post(`${baseUrl}${url}`, form, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      setLoading(false);
      if (data.statusCode === 201) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-[500px] w-full flex flex-col items-center bg-white rounded-lg shadow-lg py-10 border">
      <div className="text-xl flex justify-start border-b w-full px-10 font-semibold text-color_pink uppercase text-left pb-1">
        {department}
      </div>
      <div className="px-10 w-full ">
        <form onSubmit={handleSubmit}>
          <div className="w-full ">
            <div className="my-5 py-1">
              <div className="font-semibold text-black">Document Title</div>
              <input
                className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                placeholder="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {department === "sustainability" && (
              <div className="relative">
                <div className="font-semibold text-black">Department</div>
                <select
                  className="appearance-none outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md bg-white cursor-pointer"
                  value={subDepartment}
                  onChange={handleOptionChange}
                >
                  <option value="" disabled hidden>
                    Select an option
                  </option>
                  <option value="Certification">Certification</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Law & Regulation">Law & Regulation</option>
                  <option value="Forms">Forms</option>
                  <option value="Agreements">Agreements</option>
                </select>
                <div className="absolute top-3 right-0 flex items-center justify-center w-8 h-full pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7L10 10L13 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
            <div className="relative mt-7">
              <input
                className="hidden"
                type="file"
                name="pdfFile"
                id="pdf"
                onChange={handleFileChange}
              />
              <label
                htmlFor="pdf"
                className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <span className="text-sm">Choose PDF</span>
              </label>
              <div className="my-2 text-black">
                {formData?.pdfFile?.name && (
                  <span>{formData?.pdfFile?.name}</span>
                )}
              </div>
            </div>
          </div>
          <div className="py-8 w-full flex justify-end">
            {loading ? (
              <div className="flex justify-center relative mt-[20px] mr-5">
                <div className="custom-loader"></div>
              </div>
            ) : (
              <button
                type="submit"
                className={` rounded-xl border bg-color_brand px-16 py-2 font-medium text-gray-100 transition-all duration-100`}
              >
                Upload
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
