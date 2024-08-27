import CountCharts from "@/components/CountCharts"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEDT */}
      <div className="w-fulll lg:w-2/3 flex flex-col gap-8">
        {/* USERS CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHARTS */}
          <div className="w-full lg:1/3 h-[450px]">
            <CountCharts/>
          </div>
          {/* ATTENDANCE CHARTS */}
          <div className="w-full lg:2/3 h-[450px]"></div>
        </div>
        {/* BOTTON CHARTS */}
        <div className=""></div>
      </div>
      {/* RIGHT */}
      <div className="w-fulll lg:w-1/3">RIGHT</div>
    </div>
  )
}

export default AdminPage