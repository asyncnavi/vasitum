const RecentActivity = () => {
    return (
        <div className="bg-blue-950 rounded-md flex flex-col w-full">
            <h2 className="text-white w-full bg-blue-900 rounded-md p-4 text-xl">
                Recent Activity
            </h2>
            <div className="p-4 text-gray-100 space-y-6 ">
                <small className="text-xs">10AM, Fri 10 Sept 2021</small>
                <h1 className="text-xl">You Posted a New Job.</h1>
                <span className="text-sm">Kindly check the requirements and terms of work and make sure everything is right.</span>
                <div className="flex justify-between">
                    <h4 className="text-sm">Today you made 12 activities</h4>
                    <button className="bg-red-400 py-2 px-4 rounded">
                        See All Activity
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecentActivity