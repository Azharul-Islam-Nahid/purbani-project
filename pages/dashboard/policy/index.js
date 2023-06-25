import DashboardLayout from "../../../components/common/DashboardLayout";
import Image from "next/image";
import Image01 from "../../../public/assets/images/Group-22.png";
import Image02 from "../../../public/assets/images/Group-23.png";
import Image03 from "../../../public/assets/images/Group-24.png";
import Image04 from "../../../public/assets/images/Group-25.png";
import Image05 from "../../../public/assets/images/Group-26.png";
import { useRouter } from "next/router";

const Department = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div>
        <div
          className={`bg-white py-16 px-20 drop-shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-32 mt-20 lg:mt-44`}
        >
          <button>
            <Image src={Image01} alt="img" width={120} height={120} />
          </button>
          <button
            onClick={() =>
              router.push(`/dashboard/policy/upload?department=it`)
            }
          >
            <Image src={Image02} alt="img" width={120} height={120} />
          </button>
          <button
            onClick={() =>
              router.push("/dashboard/policy/upload?department=hr")
            }
          >
            <Image src={Image03} alt="img" width={120} height={120} />
          </button>
          <button
            onClick={() =>
              router.push("/dashboard/policy/upload?department=accounce")
            }
          >
            <Image src={Image04} alt="img" width={120} height={120} />
          </button>
          <button
            onClick={() =>
              router.push("/dashboard/document/upload?department=procurement")
            }
          >
            <Image src={Image05} alt="img" width={120} height={120} />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

Department.auth = {
  adminOnly: true,
};
export default Department;
