import SideBar from "@/components/SideBar";
const LayoutProfile = ({ children }) => {
  return (
    <div className="flex gap-x-10 px-20 py-12">
      <SideBar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default LayoutProfile;
