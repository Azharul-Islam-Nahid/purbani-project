import Layout from "../../../../components/common/Layout";
import Navbar from "../../../../components/common/navbar";
import { BsEye } from "react-icons/bs";

const Index = () => {
    const data = [
        {
            title: "The pdf file name goes right here",
            videoUrl: "https://youtu.be/1nFLGjg9RxU",
        },
        {
            title: "The pdf file name goes right here",
            videoUrl: "https://youtu.be/1nFLGjg9RxU",
        },
        {
            title: "The pdf file name goes right here",
            videoUrl: "https://youtu.be/1nFLGjg9RxU",
        },
    ];

    return (
        <>
            <Layout>
                <Navbar />
                <div className="m-auto pt-20">
                    <div className="border rounded-md m-auto bg-white w-8/12 h-96 overflow-y-scroll">
                        {data.map((item, idx) => (
                            <div key={idx} className="mt-5 mb-5 mr-20 ml-40 flex flex-col">
                                <div className="flex justify-between flex-row">
                                    <div className="text-lg font-bold px-4 flex gap-x-1 items-center">
                                        {item.title}
                                    </div>
                                    <div className="flex gap-x-5">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            // href={item?.readableLink}
                                            className="cursor-pointer text-2xl text-color_brand hover:text-color_dark transition-all duration-200"
                                        >
                                            <BsEye />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <video
                                        controls
                                        src={item.videoUrl}
                                        style={{ width: "80%" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Index;
