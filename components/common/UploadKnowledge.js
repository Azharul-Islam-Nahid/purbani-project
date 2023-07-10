import { baseUrl, getHeaders } from "../../api/api";
import axios from "axios";
import Swal from "sweetalert2";
import { AiFillFilePdf } from "react-icons/ai";

const UploadKnowledge = ({
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
    const handlePdf = (e) => {
        const file = e.target.files[0];
        console.log(file)

        setFormData((prevFormData) => ({
            ...prevFormData,
            pdfFile: file,
        }));
        // console.log(formData.pdfFile)
    };
    const handleVideo = (e) => {
        const file = e.target.files[0];
        console.log(file)

        setFormData((prevFormData) => ({
            ...prevFormData,
            videoFile: file,
        }));
        // console.log(formData.videoFile)
    };

    // const handleOptionChange = (e) => {
    //     setSubDepartment("Hello world");
    //     console.log("this is category", e.target.value)
    //     console.log("category", subDepartment)
    // };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     const form = new FormData();
    //     form.append("title", title);
    //     form.append("department", department);
    //     form.append("category", subDepartment);

    //     // Append the files as an array under a single key
    //     form.append("files[]", [formData.pdfFile, formData.videoFile]);
    //     // form.append("files[]", formData.videoFile);

    //     try {
    //       const { data } = await axios.post(
    //         "http://localhost:5000/api/v1/knowledge/upload-knowledge-pdf",
    //         form,
    //         {
    //           headers: getHeaders(),
    //         }
    //       );

    //       setLoading(false);
    //       if (data.statusCode === 201) {
    //         Swal.fire({
    //           icon: "success",
    //           title: "Your work has been saved",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //       }
    //     } catch (error) {
    //       setLoading(false);
    //       console.log(error);
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Something went wrong!",
    //       });
    //     }
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const form = new FormData();
        form.append("title", title);
        form.append("department", department);
        form.append("category", subDepartment);

        // Append the files as an array under a single key
        form.append("files", formData.pdfFile);
        form.append("files", formData.videoFile);

        console.log(form);

        try {
            const { data } = await axios.post(
                `${baseUrl}${url}`,
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "x-auth-token": `${localStorage?.getItem("x-auth-token")}`,
                    },
                }
            );

            setLoading(false);
            if (data.statusCode === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    };


    return (
        <div className="max-w-[500px] w-full flex flex-col items-center bg- rounded-lg shadow-lg py-10 border-b-3 border-t-3 bg-white border-color_pink mt-3">
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
                        {(
                            <div className="relative">
                                <div className="font-semibold text-black">Category</div>
                                <select
                                    className="appearance-none outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md bg-white cursor-pointer"
                                    value={subDepartment}
                                    // onChange={handleOptionChange}
                                    onChange={(e) => setSubDepartment(e.target.value)}
                                >
                                    <option value="" disabled hidden>
                                        Select an option
                                    </option>
                                    <option value="Basis">Basis</option>
                                    <option value="Abap">Abap</option>
                                    <option value="Fico">Fico</option>
                                    <option value="PM">PM</option>
                                    <option value="HCM">HCM</option>
                                    <option value="SD">SD</option>
                                    <option value="MM">MM</option>
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
                                onChange={handlePdf}
                            />
                            <label
                                htmlFor="pdf"
                                className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100"
                            >
                                <span className="text-sm">Choose PDF</span>
                            </label>
                            <div className="my-2 ml-1 text-black">
                                {formData?.pdfFile?.name && (
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-color_dark_gray">
                                            {formData?.pdfFile?.name}
                                        </span>
                                        <span className="text-color_secondary text-xl">
                                            <AiFillFilePdf />
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {
                            <div className="relative mt-7">
                                <input
                                    className="hidden"
                                    type="file"
                                    name="videoFile"
                                    id="video"
                                    onChange={handleVideo}
                                />
                                <label
                                    htmlFor="video"
                                    className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100"
                                >
                                    <span className="text-sm">Choose Video</span>
                                </label>
                                <div className="my-2 ml-1 text-black">
                                    {formData?.videoFile?.name && (
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-color_dark_gray">
                                                {formData?.videoFile?.name}
                                            </span>
                                            <span className="text-color_secondary text-xl">
                                                {/* <AiFillFilePdf /> */}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        }
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

export default UploadKnowledge;
