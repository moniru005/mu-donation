import Chart from "react-apexcharts";

const PiChart = ({ totalDonations,  donated }) => {
    // console.log(totalDonations,  donated)


    return (
        <div className="flex flex-col  justify-center items-center p-4 mx-auto">
           
            <Chart
            type="pie"
            width={550}
            height={550}
            series={[ donated, totalDonations]}
            options={{
                title: {text: ""},
                noData: {text: "Empty Data"},
                colors: ["#00C49F", "#FF444A"] ,
                labels: ['Your Donation', 'Total Donation'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 250
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }],
                  
            }}>
                
            </Chart>

            <div className="mt-6 flex gap-6">
                <div className="flex justify-center items-center gap-2">
                    <p className="text-sm"> Your Donation</p>
                    <div className="w-20 h-2 bg-[#00C49F]"></div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-sm">Total Donation</p>
                    <div className="w-20 h-2 bg-[#FF444A]"></div>
                </div>

            </div>
        </div>
    );
};

export default PiChart;